<template>
  <div>
    AdminUid: {{ user.adminUid }} <br />
    Correct Ans:<strong> {{ sendQues.correctAns }}</strong> <br />
    Department name from select box:<strong> {{ dname }} </strong><br />
    Department name from input box:<strong> {{ deptname }}</strong> <br />
    Language from select box:<strong> {{ lname }} </strong><br />
    Language from input box: <strong>{{ lagname }}</strong> <br />
    Department list from backend:<strong>{{ dept }}</strong
    ><br />
    Language list from backend:<strong> {{ language }}</strong> <br />
    Final Data: <strong> {{ sendQues }}</strong>

    <div class="card mx-auto" style="width: 20rem">
      <div class="card-header">
        <!-- Question Part -->
        <label class="card-text"> Question :</label>
        <input type="text" v-model="sendQues.question" />
      </div>
      <div>Enter options and select correct answer from radio buttons.</div>
      <!-- Option Part -->
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="i in 4" :key="i">
          <b-radio
            v-model="sendQues.correctAns"
            name="correctAns"
            :native-value="sendQues.mcqOps[i - 1]"
          >
          </b-radio>
          <input type="text" v-model="sendQues.mcqOps[i - 1]" />
        </li>
      </ul>
      <!-- Department -->
      <div>Select department.</div>

      <select v-model="dname" v-for="(item, i) in dept" :key="i">
        <option v-for="values in item" :key="values" :value="values">
          {{ values }}
        </option>
        <option value="Other">Add Another</option>
      </select>

      <input
        v-show="dname == 'Other'"
        type="text"
        placeholder="Enter department here."
        v-model="deptname"
      />
      <!-- Language Options -->
      <div v-show="dname == 'IT'">Select language.</div>

      <select
        v-model="lname"
        v-for="(item, i) in language"
        :key="i"
        v-show="dname == 'IT'"
      >
        <option v-for="values in item" :key="values" :value="values">
          {{ values }}
        </option>
        <option value="Other">Add Another</option>
      </select>

      <input
        v-if="lname == 'Other' && dname == 'IT'"
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
import { db } from '../../../plugins/firebaseConfig'
import { v4 as uuidv4 } from 'uuid'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      dname: null,
      lname: null,
      lagname: null,
      language: null,
      dept: null,
      deptname: null,

      // correctAns: null,
      sendQues: {
        question: null,
        correctAns: null,
        mcqOps: [],
      },
    }
  },
  computed: {
    ...mapState('modules/user', ['user']),
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
      //Question
      if (this.dname == 'IT') {
        if (this.lname == 'Other') {
          this.lname = this.lagname
        }
      } else {
        this.lname = this.dname
      }
      const ref = db.collection('questionset').doc(this.user.adminUid)
      const document = {
        [this.lname.toUpperCase()]: firebase.firestore.FieldValue.arrayUnion(
          this.sendQues
        ),
      }
      try {
        await ref.set(document, { merge: true })
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }

      //Department Section
      if (this.dname == 'Other') {
        this.dname = this.deptname
      }
      const dept = {
        dept: firebase.firestore.FieldValue.arrayUnion(
          this.dname.toUpperCase()
        ),
      }

      const rez = await db
        .collection('questionset')
        .doc(this.user.adminUid)
        .set(dept, { merge: true })

      //Language Option Section
      if (this.dname == 'IT') {
        if (this.lname != 'Other') {
          this.lagname = this.lname
        }

        const data = {
          language: firebase.firestore.FieldValue.arrayUnion(
            this.lagname.toUpperCase()
          ),
        }
        const res = await db
          .collection('questionset')
          .doc(this.user.adminUid)
          .set(data, { merge: true })
      }

      // //Department Section
      // if (this.dname == 'Other') {
      //   this.dname = this.deptname
      // }
      // const dept = {
      //   dept: firebase.firestore.FieldValue.arrayUnion(
      //     this.dname.toUpperCase()
      //   ),
      // }

      // const rez = await db
      //   .collection('questionset')
      //   .doc(this.user.adminUid)
      //   .set(dept, { merge: true })
    },
  },
}
</script>

<style scoped>
.card {
  margin: auto;
 
}
</style>

