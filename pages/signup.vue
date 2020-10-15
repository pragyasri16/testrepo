<template>
  <div class="main">
    <!-- Default form register -->
    <form class="text-center border border-light p-5" @submit.prevent="signup">
      <p align="left" class="h4 mb-4">Sign up</p>

      <div class="form-row mb-4">
        <div class="col">
          <!-- contact person name -->
          <input
            type="text"
            id="Name"
            class="form-control"
            placeholder="Contact person name"
            v-model="name"
          />
        </div>
      </div>

      <!-- E-mail -->
      <input
        v-model="email"
        type="email"
        id="Email"
        class="form-control mb-4"
        placeholder="E-mail"
      />

      <!-- Password -->
      <input
        v-model="pass"
        type="password"
        id="Password"
        class="form-control"
        placeholder="Password"
        aria-describedby="defaultRegisterFormPasswordHelpBlock"
      />
      <!-- <small
        id="defaultRegisterFormPasswordHelpBlock"
        class="form-text text-muted mb-4"
        >At least 8 characters and 1 digit</small
      > -->

      <!-- Sign up button -->
      <button class="btn btn-info my-4 btn-block">SUBMIT</button>
      <!-- <button
        class="btn btn-primary my-4 btn-block"
        type="button"
        @click.prevent=""
        :disabled="load"
        data-toggle="modal"
        data-target="#forgetPass"
      >
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
          v-if="load"
        ></span>
        Submit
      </button> -->
      <!-- <button class="btn btn-info my-4 btn-block" @click.prevent="signin">signin</button> -->
    </form>
    <!-- Default form register -->
    <!-- <pre>
      {{ email }}-{{ pass }}-{{ name }}
    </pre> -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="forgetPass"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered mx-auto" role="document">
        <div class="modal-content text-center">
          <!-- <div class="modal-header"> -->
          <button
            type="button"
            class="close ml-auto"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>

          <!-- </div> -->
          <div class="modal-body">
            <h3>Check Your Mail</h3>
          </div>
          <!-- <div class="modal-footer mt-3">
            
            <button type="button" class="btn btn-primary p-2 mr-3">
              Save changes
            </button>
          </div> -->
        </div>
      </div>
    </div>
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
      load: false,
    }
  },
  methods: {
    async signup() {
      this.load = true

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
      // console.log('claims => ', claims)
      user
        .updateProfile({
          displayName: this.name,
        })
        .then(function () {
          // Update successful.
          // alert('Name assigned')
        })
        .catch(function (error) {
          // An error happened.
          alert('Error')
        })
      user
        .sendEmailVerification()
        .then(function () {
          // Email sent.
          alert('Check your mail for verification.')
          // return true
        })
        .catch(function (error) {
          // An error happened.
          alert('Error creating account.')
        })
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
