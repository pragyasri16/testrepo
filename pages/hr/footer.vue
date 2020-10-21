<template>
  <div>
    <div class="card mx-auto" style="width: 20rem">
      <div class="card-header">
        <label class="card-text"> Question :</label>
        <input type="text" v-model="xyz.question" />
      </div>
      <ul class="list-group list-group-flush">
        <!-- <li class="list-group-item" v-for="i in 4" :key="i">
          <label> Option {{ i }}:</label>
          <input type="text" v-model="option[i]" />
        </li> -->
        <li class="list-group-item">
          <label> Option 1:</label> <input type="text" v-model="xyz.option1" />
        </li>
        <li class="list-group-item">
          <label> Option 2:</label> <input type="text" v-model="xyz.option2" />
        </li>
        <li class="list-group-item">
          <label> Option 3:</label> <input type="text" v-model="xyz.option3" />
        </li>
        <li class="list-group-item">
          <label> Option 4:</label> <input type="text" v-model="xyz.option4" />
        </li>
      </ul>
      <!-- Uncomment
      <select id="dept" name="department" v-model="dname">
        <option value="Select Language" selected disabled>
          Select Language
        </option>

        <option value="I.T.">I.T.</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
      </select> -->

      <!-- Work form here  -->
      <select v-model="lname" v-for="item in data" :key="item">
        <option v-for="xyz in item" :key="xyz" :value="xyz">{{ xyz }}</option>
      </select>
      <!-- To here -->

      <!-- Example of for loop accessing the data form firestore from collection
      (questionset) and document (language-options) -->
      <div v-for="item in data" :key="item">
        <div v-for="xyz in item" :key="xyz">
          {{ xyz }}
        </div>
      </div>

      <!-- <select v-model="lname">
        <option value="other">Other</option>
        <option value="ANDROID">ANDROID</option>
        <option value=".NET">.NET</option>
        <option value="C">C</option>
        <option value="C++">C++</option>        
        <option value="WEBDRIVER">WEBDRIVER</option>
      </select> -->
      <input
        v-show="lname == 'other'"
        type="text"
        placeholder="Enter language here."
        v-model="lagname"
      />
      <button
        @click.prevent="
          writeToFirestore()
          languages()
        "
        class="btn btn-info"
      >
        Submit
      </button>
    </div>
    <hr />
    {{ lname }}
  </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../../plugins/firebaseConfig'
import { v4 as uuidv4 } from 'uuid'

export default {
  data() {
    return {
      dname: null,
      lname: null,
      lagname: null,
      data: null,
      qid: uuidv4(),
      xyz: {
        question: null,
        option1: null,
        option2: null,
        option3: null,
        option4: null,
      },
    }
  },
  created() {
    db.collection('questionset')
      .doc('language-options')
      .get()
      .then((doc) => {
        this.data = doc.data()
      })
  },
  methods: {
    async writeToFirestore() {
      if (this.lname == 'other') {
        this.lname = this.lagname
      }
      const ref = db.collection('question-set').doc('test')
      const document = {
        [this.lname]: firebase.firestore.FieldValue.arrayUnion(this.xyz),
      }
      try {
        await ref.set(document, { merge: true })
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      this.writeSuccessful = true
    },

    async languages() {
      const data = {
        language: firebase.firestore.FieldValue.arrayUnion(this.lagname),
      }
      const res = await db
        .collection('questionset')
        .doc('language-options')
        .set(data, { merge: true })
      console.log('Set: ', res)
    },
  },
}
</script>

<style scoped>
.card {
  margin: auto;
}
</style>


