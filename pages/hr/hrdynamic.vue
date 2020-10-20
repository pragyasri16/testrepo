<template>
  <div>
    <MyForm :form="abc" v-on:getFormData="info = { ...$event }">
      <template v-slot:allbutton>
        <button
          class="btn btn-primary mx-auto"
          @click.prevent="writeToFirestore"
          :disabled="writeSuccessful"
        >
          <span v-if="!writeSuccessful">Promote</span>
          <span v-else>Successful!</span>
        </button>
      </template>
      
    </MyForm>
       <input type="button" @click="resetPassword" value="Reset password email" class="btn btn-success ">
    {{ info }}
  </div>
</template>
<!-- Change before adding firestore. -->
<script>
import firebase from 'firebase'
import { db, auth } from '../../plugins/firebaseConfig'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import { hrform } from '../../helper/form'
import MyForm from '../../components/MyForm'

export default {
  data() {
    return {
      abc: hrform,
      info: [],
      date: moment().format('DD/MM/YYYY'),
      writeSuccessful: false,
    }
  },
  //Change uuidv4()
  created() {
    db.collection('dynamicformdetails').where('id','==', 'testdoc')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.info.push({
            id: doc.id,
            ...doc.data(),
          })
          // this.qwer = doc.get('cname')
          // console.log('name', cName)
        })
      })
  },
  layout: 'hr',
  methods: {
    async writeToFirestore() {
      const ref = db.collection('dynamicformdetails').doc('testdoc')
      const document = {
        info: this.info,
        date: this.date,
      }
      try {
        await ref.set(document)
      } catch (e) { 
        // TODO: error handling
        console.error(e)
      }
      this.writeSuccessful = true
    },
    
 resetPassword(){
          auth.sendPasswordResetEmail(auth.currentUser.email).then(function() {
  // Email sent.
  alert('Check Mail')
}).catch(function(error) {
  // An error happened.
});
  },
}}
</script>

<style scoped>
/* * {
  background-color: white;
} */
/* button {
  color: black;
} */


</style>