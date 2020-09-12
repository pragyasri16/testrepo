<template>
  <div class="main">
    <!-- Default form register -->
    <form class="text-center border border-light p-5" action="#!">
      <p align="left" class="h4 mb-4">Sign up</p>

      <div class="form-row mb-4">
        <div class="col">
          <!-- First name -->
          <input
            type="text"
            id="defaultRegisterFormFirstName"
            class="form-control"
            placeholder="Company name"
          />
        </div>
      </div>
      <!-- E-mail -->
      <input
        type="text"
        id="defaultRegisterFormEmail"
        class="form-control mb-4"
        placeholder="Address"
      />

      <!-- E-mail -->
      <input
        v-model="email"
        type="email"
        id="defaultRegisterFormEmail"
        class="form-control mb-4"
        placeholder="E-mail"
      />

      <!-- Password -->
      <input
        v-model="pass"
        type="password"
        id="defaultRegisterFormPassword"
        class="form-control"
        placeholder="Password"
        aria-describedby="defaultRegisterFormPasswordHelpBlock"
      />
      <small
        id="defaultRegisterFormPasswordHelpBlock"
        class="form-text text-muted mb-4"
      >At least 8 characters and 1 digit</small>

      <!-- Phone number -->
      <input
        type="text"
        id="defaultRegisterPhonePassword"
        class="form-control"
        placeholder="Contact number"
        aria-describedby="defaultRegisterFormPhoneHelpBlock"
      />
      <br />

      <!-- contact person name -->
      <input
        v-model="name"
        type="text"
        id="defaultRegisterPhonePassword"
        class="form-control"
        placeholder="Contact person name"
        aria-describedby="defaultRegisterFormPhoneHelpBlock"
      />
      <br />

      <!-- Country -->
      <input
        type="text"
        id="defaultRegisterPhonePassword"
        class="form-control"
        placeholder="Country"
        aria-describedby="defaultRegisterFormPhoneHelpBlock"
      />

      <!-- Sign up button -->
      <button class="btn btn-info my-4 btn-block" @click.prevent="signup">SUBMIT</button>
      <button class="btn btn-info my-4 btn-block" @click.prevent="signin">signin</button>
    </form>
    <!-- Default form register -->
    <pre>
      {{email}}-{{pass}}-{{name}}
    </pre>
  </div>
</template>
<script>
import firebase from 'firebase'
import { auth } from '../plugins/firebaseConfig'
export default {
  data() {
    return {
      email: '',
      pass: '',
      name: '',
    }
  },
  methods: {
    async signin() {
      const { user } = await auth.signInWithEmailAndPassword(
        this.email,
        this.pass
      )
      let { claims } = await user.getIdTokenResult()
      console.log('signin =>', user)
      console.log('Admin =>', claims)

      //this.$router.push('/admin')
    },
    async signup() {
      const { user } = await auth.createUserWithEmailAndPassword(
        this.email,
        this.pass
      )
      // console.log('user =>', user)
      let data = {
        uid: user.uid,
        role: { admin: true },
      }
      let callable = firebase.functions().httpsCallable('customeClaims')
      const res = await callable(data)
      const { claims } = await user.getIdTokenResult()
      console.log('user => ', user)
      console.log('claims => ', claims)
    },
  },
}
</script>
<style scoped>
.main {
  width: 400px;
  margin: auto;
}
</style>
