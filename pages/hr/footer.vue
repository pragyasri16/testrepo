<template>
  <div>
    <div class="card mx-auto " style="width: 20rem">
      <div class="card-header">
        <label class="card-text "> Question  :</label>
        <input type="text" v-model="xyz.test.que"/>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" >
          <label> Option 1:</label> <input type="text" v-model="  xyz.test.op1" />
        </li>
        <li class="list-group-item">
          <label> Option 2:</label> <input type="text" v-model="xyz.test.op2" />
        </li>
        <li class="list-group-item">
          <label> Option 3:</label> <input type="text" v-model="xyz.test.op3" />
        </li>
        <li class="list-group-item">
          <label> Option 4:</label> <input type="text" v-model="xyz.test.op4" />
        </li>
      </ul>
       <select id="dept" name="department" v-model="dname">
          <option value="it">It</option>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option></select
        >
      <button @click.prevent="writeToFirestore" class="btn btn-info">Submit</button>
    </div>
    <hr>
{{ xyz.question }}--{{xyz.option1}}--{{xyz.option2}}--{{xyz.option3}}--{{xyz.option4}}

{{xyz}}

     




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
      dname:null,
      data: [],
      qid: uuidv4(),
      xyz:{
        test:{
que:null,
op1:null,
op2:null,
op3:null,
op4:null,

        }
      },
    }
    },
   methods: {
    async writeToFirestore() {
      const ref = db.collection('question-set').doc(this.qid)
      const document = {
        xyz: this.xyz
        
      }
       try {
        await ref.set(document)
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      this.writeSuccessful = true
    }
   }
}
</script>

<style scoped>
.card {
  margin-top: 20px;
}
</style>