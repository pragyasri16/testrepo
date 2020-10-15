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

    {{ info }}
  </div>
</template>
<!-- Change before adding firestore. -->
<script>
import firebase from 'firebase'
import { db } from '../../plugins/firebaseConfig'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import { jobform } from '../../helper/form'
import MyForm from '../../components/MyForm'


export default {
  data() {
    return {
      abc: jobform,
      info: [],
      date: moment().format('DD/MM/YYYY'),
      writeSuccessful: false,
      demo:null
    }
  },
  layout: 'hr',
  
  methods: {
    async writeToFirestore() {
      const ref = db.collection('dynamicformdetails').doc(uuidv4())
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
  },
}
</script>

<style scoped>
/* * {
  background-color: white;
} */
/* button {
  color: black;
} */
</style>