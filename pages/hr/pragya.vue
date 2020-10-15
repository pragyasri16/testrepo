<template>
    <div>
    <form>
 question<input
            id="que"
            v-model="question"
          />{{question}}
          option1<input
            id="opt1"
            v-model="option1"
          />{{option1}}
          option2<input
            id="opt2"
            v-model="option2"
          />{{option2}}
          option3<input
            id="opt3"
            v-model="option3"
          />{{option3}}
          <br>
         <button
          class="btn btn-primary"
          @click.prevent="writeToFirestore"
          :disabled="writeSuccessful"
        >
          <span v-if="!writeSuccessful">Promote</span>
          <span v-else>Successful!</span>
        </button>
    </form>
    </div>

</template>

<script>
import firebase from 'firebase'
import { db } from '../../plugins/firebaseConfig'
    export default {
        data() {
    return {
      question: null,
      option1: null,
      option2: null,
      option3: null,
      writeSuccessful: false,
      
    }
  },
  methods: {
    async writeToFirestore() {
      const ref = db.collection('pragya').doc('doc3')
      const document = {
        question: this.question,
        option1: this.option1,
        option2: this.option2,
        option3: this.option3,
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

<style lang="scss" scoped>

</style>