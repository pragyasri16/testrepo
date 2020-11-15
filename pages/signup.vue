<template>
    <div>
      <div class="wrapper column is-one-third">
        <h2 class="title is-2 has-text-centered m-auto">Sign Up</h2>
        <p class="content is-medium has-text-centered">Create an account</p>
        <b-field label="Name">
            <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="Email"
            type=""
            message="">
            <b-input type="email"
                value=""
                placeholder="Enter valid e-mail address"
                v-model="email">
            </b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password"
                value=""
                v-model="pass"
                password-reveal>
            </b-input>
        </b-field>

        <div class="has-text-centered">
        <b-button type="is-success" size="is-medium" @click.prevent="signup">Sign Up</b-button>
        </div>
      </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import { auth } from '../plugins/firebaseConfig'

    export default {
        layout: 'access',
        data(){
          return{
                 email: '',
                 pass: '',
                 name: '',
          }
        },

        methods:{
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
      // console.log('claims => ', claims)
      user
        .updateProfile({
          displayName: this.name,
        })
        .then(function () {
          // Update successful.
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
          }
      }
    }
</script>

<style scoped>

.wrapper {
  /* width: 450px;
  height: 400px; */
  background: #fff;
  border-radius: 15px;
  margin: auto;
  box-shadow: 5px 10px 10px 5px rgba(0.19, 0.19, 0.19, 0.19);
  margin-top: 100px;
}
</style>