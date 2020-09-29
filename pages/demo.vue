<template>
  <section class="container">
    <div>
      <h2>Write to Firestore.</h2>
      <form >
          <input type="text" name="country" id="country" class="form-control" v-model="name" />
      </form>
      <div>
        <button @click="writeToFirestore" :disabled="writeSuccessful">
          <span v-if="!writeSuccessful">Write now</span>
          <span v-else>Successful!</span>
        </button>
      </div>
      {{name}}
    </div>
  </section>
</template>
<script>
import firebase from 'firebase'
import { db } from '../plugins/firebaseConfig'
export default {
  data() {
    return {
      writeSuccessful: false,
      name: null,
    }
  },
  methods: {
    async writeToFirestore() {
      const ref = db.collection('test').doc('test')
      const document = {
        text: 'This is Shubhang Chourasia.',
        name: this.name
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
<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>