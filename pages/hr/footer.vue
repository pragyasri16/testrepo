<template>
  <div>
    <div class="card mx-auto" style="width: 20rem">
      <div class="card-header">
        <label class="card-text"> Question :</label>
        <input type="text" v-model="xyz.question" />
      </div>
      <ul class="list-group list-group-flush">
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
      <!-- Department -->
      <select v-model="dname" v-for="(item, i) in dept" :key="i">
        <option v-for="xyz in item" :key="xyz" :value="xyz">{{ xyz }}</option>
        <option value="Other">Other</option>
      </select>
      <input
        v-show="dname == 'Other'"
        type="text"
        placeholder="Enter department here."
        v-model="deptname"
      />
      <!-- Language Options -->
      <select v-model="lname" v-for="(item, i) in language" :key="i">
        <option v-for="xyz in item" :key="xyz" :value="xyz">{{ xyz }}</option>
        <option value="Other">Other</option>
      </select>

      <input
        v-show="lname == 'Other'"
        type="text"
        placeholder="Enter language here."
        v-model="lagname"
      />
      <button @click.prevent="writeToFirestore()" class="btn btn-info">
        Submit
      </button>
    </div>
    <hr />
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
      language: null,
      dept: null,
      deptname:null,
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
        this.language = doc.data()
      })

    db.collection('questionset')
      .doc('department')
      .get()
      .then((doc) => {
        this.dept = doc.data()
      })
  },
  methods: {
    async writeToFirestore() {
      //Question Section
      if (this.lname == 'Other') {
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

      //Language Option Section
      if (this.lname != 'Other') {
        this.lagname = this.lname
      }

      const data = {
        language: firebase.firestore.FieldValue.arrayUnion(this.lagname),
      }
      const res = await db
        .collection('questionset')
        .doc('language-options')
        .set(data, { merge: true })
      //Department Section
      if (this.dname == 'Other') {
        this.dname = this.deptname
      }
      const dept = {
        dept: firebase.firestore.FieldValue.arrayUnion(this.dname),
      }

      const rez = await db
        .collection('questionset')
        .doc('department')
        .set(dept, { merge: true })
    },
  },
}
</script>

<style scoped>
.card {
  margin: auto;
}
</style>


