<template>
  <div class="main">
    <!-- Default form register -->
<<<<<<< HEAD
    <form class="text-center border border-light p-5" >
=======
    <form class="text-center border border-light p-5" action="#!">
>>>>>>> 9234ed8713f9cf0e763e7ce9a69fd40ba8b71b9c
      <p align="left" class="h4 mb-4">Sign up</p>

      <div class="form-row mb-4">
        <div class="col">
          <!-- First name -->
          <input
            type="text"
<<<<<<< HEAD
            id="FirstName"
=======
            id="defaultRegisterFormFirstName"
>>>>>>> 9234ed8713f9cf0e763e7ce9a69fd40ba8b71b9c
            class="form-control"
            placeholder="Company name"
          />
        </div>
      </div>
      <!-- E-mail -->
      <input
<<<<<<< HEAD
        type="email"
        id="Email"
=======
        type="text"
        id="defaultRegisterFormEmail"
>>>>>>> 9234ed8713f9cf0e763e7ce9a69fd40ba8b71b9c
        class="form-control mb-4"
        placeholder="Address"
      />

      <!-- E-mail -->
      <input
<<<<<<< HEAD
=======
        v-model="email"
>>>>>>> 9234ed8713f9cf0e763e7ce9a69fd40ba8b71b9c
        type="email"
        id="defaultRegisterFormEmail"
        class="form-control mb-4"
        placeholder="E-mail"
      />

      <!-- Password -->
      <input
<<<<<<< HEAD
        type="password"
        id="defaultRegisterFormPassword1"
=======
        v-model="pass"
        type="password"
        id="defaultRegisterFormPassword"
>>>>>>> 9234ed8713f9cf0e763e7ce9a69fd40ba8b71b9c
        class="form-control"
        placeholder="Password"
        aria-describedby="defaultRegisterFormPasswordHelpBlock"
      />
      <small
<<<<<<< HEAD
        id="p-ins"
        class="form-text text-muted mb-4"
        >At least 8 characters and 1 digit</small
      >
=======
        id="defaultRegisterFormPasswordHelpBlock"
        class="form-text text-muted mb-4"
      >At least 8 characters and 1 digit</small>
>>>>>>> 9234ed8713f9cf0e763e7ce9a69fd40ba8b71b9c

      <!-- Phone number -->
      <input
        type="text"
<<<<<<< HEAD
        id="pno"
=======
        id="defaultRegisterPhonePassword"
>>>>>>> 9234ed8713f9cf0e763e7ce9a69fd40ba8b71b9c
        class="form-control"
        placeholder="Contact number"
        aria-describedby="defaultRegisterFormPhoneHelpBlock"
      />
      <br />

      <!-- contact person name -->
      <input
<<<<<<< HEAD
        type="text"
        id="name"
=======
        v-model="name"
        type="text"
        id="defaultRegisterPhonePassword"
>>>>>>> 9234ed8713f9cf0e763e7ce9a69fd40ba8b71b9c
        class="form-control"
        placeholder="Contact person name"
        aria-describedby="defaultRegisterFormPhoneHelpBlock"
      />
      <br />

      <!-- Country -->
      <input
        type="text"
<<<<<<< HEAD
        id="country"
=======
        id="defaultRegisterPhonePassword"
>>>>>>> 9234ed8713f9cf0e763e7ce9a69fd40ba8b71b9c
        class="form-control"
        placeholder="Country"
        aria-describedby="defaultRegisterFormPhoneHelpBlock"
      />

      <!-- Sign up button -->
<<<<<<< HEAD
      <button class="btn btn-info my-4 btn-block" type="submit">SUBMIT</button>
    </form>
    <!-- Default form register -->
  </div>
</template>
<script>
export default {}
=======
      <button class="btn btn-info my-4 btn-block" @click.prevent="signup">SUBMIT</button>
      <!-- <button class="btn btn-info my-4 btn-block" @click.prevent="signin">signin</button> -->
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
    async signup() {
      const { user } = await auth.createUserWithEmailAndPassword(
        this.email,
        this.pass
      )
      // console.log('user =>', user)
      let data = {
        uid: user.uid,
        role: { sa: true },
      }
      let callable = firebase.functions().httpsCallable('customeClaims')
      const res = await callable(data)
      const { claims } = await user.getIdTokenResult()
      // console.log('user => ', user)
      // console.log('claims => ', claims)
    },
  },
}
>>>>>>> 9234ed8713f9cf0e763e7ce9a69fd40ba8b71b9c
</script>
<style scoped>
.main {
  width: 400px;
  margin: auto;
}
</style>
