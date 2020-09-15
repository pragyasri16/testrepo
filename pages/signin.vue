<template>
  <div class="main">
    <!-- Default form login -->
    <form class="text-center border border-light p-5" action="#!">
      <p align="left" class="h4 mb-4" @click.prevent="signin">Login</p>

      <!-- Email -->
      <input
        v-model="email"
        type="email"
        id="defaultLoginFormEmail"
        class="form-control mb-4"
        placeholder="E-mail"
      />

      <!-- Password -->
      <input
        v-model="pass"
        type="password"
        id="defaultLoginFormPassword"
        class="form-control mb-4"
        placeholder="Password"
      />

      <div class="d-flex justify-content-around">
        <div>
          <!-- Remember me -->
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember" />
            <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
          </div>
        </div>
        <div>
          <!-- Forgot password -->
          <a href>Forgot password?</a>
        </div>
      </div>

      <!-- Sign in button -->
      <button class="btn btn-info btn-block my-4" type="submit" @click.prevent="login">Login</button>

      <!-- Register -->
      <p>
        Not a member?
        <a href>Register</a>
      </p>
    </form>
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
    }
  },

  methods: {
    async login() {
      const { user } = await auth.signInWithEmailAndPassword(
        this.email,
        this.pass
      )
      let { claims } = await user.getIdTokenResult()
      // console.log('signin =>', user)
      // console.log('Admin =>', claims)

      if (claims.admin == true) {
        this.$router.push('/admin')
      }
      if (claims.hr == true) {
        this.$router.push('/hr')
      }
      if (claims.hm == true) {
        this.$router.push('/hm')
      }
      if (claims.sa == true) {
        this.$router.push('/superadmin')
      }
      //this.$router.push('/admin')
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
    