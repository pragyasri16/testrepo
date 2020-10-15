<template>
  <div>
    {{ que }}
    <form>
      question<input v-model="que.question" /> option1<input
        id="opt1"
        v-model="que.option1"
      />
      option2<input v-model="que.option2" /> option3<input
        id="opt3"
        v-model="que.option3"
      />
      option4<input id="opt4" v-model="que.option4" />
      <br />
    </form>

    <div class="card">
      <form>
        <label for="department">Choose a Department:</label>
        <select v-model="dname">
          <option value="it">IT</option>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option></select
        ><br />
        <label for="list">Choose Language:</label>
        <select>
          <option value=".NET">.NET</option>
          <option value="ANDROID">ANDROID</option>
          <option value="C">C</option>
          <option value="C++">C++</option>
          <option value="C#">C#</option>
          <option value="CSS">CSS</option>
          <option value="DEVOPS">DEVOPS</option>
          <option value="GENERAL CODING">GENERAL CODING</option>
          <option value="HTML">HTML</option>
          <option value="HTTP">HTTP</option>
          <option value="IOS">IOS</option>
          <option value="JAVA">JAVA</option>
          <option value="PHP">PHP</option>
          <option value="PRODUCT DEVELOPMENT">PRODUCT DEVELOPMENT</option>
          <option value="PYTHON">PYTHON</option>
          <option value="QA ENGINEER TESTING">QA ENGINEER TESTING</option>
          <option value="REACT">REACT</option>
          <option value="REACT NATIVE">REACT NATIVE</option>
          <option value="RUBY">RUBY</option>
          <option value="RUBY ON RAILS">RUBY ON RAILS</option>
          <option value="SQL">SQL</option>
          <option value="SELENUM">SELENUM</option>
          <option value="SWIFT">SWIFT</option>
          <option value="TCP">TCP</option>
          <option value="UNIX">UNIX</option>
          <option value="WEBDRIVER">WEBDRIVER</option>
        </select>
        <button class="btn btn-primary" @click.prevent="writeToFirestore">
          Submit
        </button>
      </form>

      <div
        class="card"
        style="width: 18rem"
        v-for="(item, i) in data"
        :key="i++"
      >
        <div class="card-header">
          <p class="card-text">Que No. {{ i }} {{ item.question }}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ item.option1 }}</li>
          <li class="list-group-item">{{ item.option2 }}</li>
          <li class="list-group-item">{{ item.option3 }}</li>
          <li class="list-group-item">{{ item.option4 }}</li>
        </ul>
        <button @click.="deleteque(item.id)" class="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../../plugins/firebaseConfig'
import { v4 as uuidv4 } from 'uuid'
export default {
  data() {
    return {
      question: null,
      option1: null,
      option2: null,
      option3: null,
      option4: null,
      data: [],
      qid: uuidv4(),
      dname: null,
      que: {},
    }
  },
  methods: {
    async writeToFirestore() {
      const ref = db
        .collection('question-set')
        .doc('test')
        .collection('this.dname')
      const document = {
        question: this.question,
        option1: this.option1,
        option2: this.option2,
        option3: this.option3,
        option4: this.option4,
      }
      try {
        await ref.set(document)
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      this.writeSuccessful = true
    },

    deleteque(val) {
      db.collection('question-set').doc(val).delete()
    },
  },

  mounted() {
    db.collection('question-set')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.data.push({
            id: doc.id,
            ...doc.data(),
          })
        })
      })
  },
}
</script>

<style scoped>
</style>