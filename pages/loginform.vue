<template>
  <div class="body">
    <div class="wrapper try">
      <div class="title">Login Form</div>
      <form action="#">
        <div class="field">
          <input type="email" v-model="email" required />
          <label>Email Address</label>
        </div>
        <div class="field">
          <input type="password" v-model="pass" required />
          <label>Password</label>
        </div>
        <div class="content">
          <div class="checkbox">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <div class="pass-link">
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <div class="field">
          <input type="submit" @click.prevent="login" value="Login" />
        </div>
        <div class="signup-link">
          Not a member?
          <a href="#">Signup now</a>
        </div>
      </form>
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
      // else {
      //   alert('Incorrect username or password.')
      // }
      //this.$router.push('/admin')
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body {
  background: #f2f2f2;
}

.wrapper {
  width: 380px;
  background: #fff;
  border-radius: 15px;
  margin: auto;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
}
.wrapper .title {
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  line-height: 100px;
  color: #fff;
  user-select: none;
  border-radius: 15px 15px 0 0;
  background: #4eabe6;
}
.wrapper form {
  padding: 10px 30px 50px 30px;
}
.wrapper form .field {
  height: 50px;
  width: 100%;
  margin-top: 20px;
  position: relative;
}
.wrapper form .field input {
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 17px;
  padding-left: 20px;
  border: 1px solid lightgrey;
  border-radius: 25px;
  transition: all 0.3s ease;
}
.wrapper form .field input:focus,
form .field input:valid {
  border-color: #4158d0;
}
.wrapper form .field label {
  position: absolute;
  top: 50%;
  left: 20px;
  color: #999999;
  font-weight: 400;
  font-size: 17px;
  pointer-events: none;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}
form .field input:focus ~ label,
form .field input:valid ~ label {
  top: 0%;
  font-size: 16px;
  color: #4158d0;
  background: #fff;
  transform: translateY(-50%);
}
form .content {
  display: flex;
  width: 100%;
  height: 50px;
  font-size: 16px;
  align-items: center;
  justify-content: space-around;
}
form .content .checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
}
form .content input {
  width: 15px;
  height: 15px;
  background: red;
}
form .content label {
  color: #262626;
  user-select: none;
  padding-left: 5px;
}
form .content .pass-link {
  color: '';
}
form .field input[type='submit'] {
  color: #fff;
  border: none;
  padding-left: 0;
  margin-top: -10px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  background: #4eabe6;
  transition: all 0.3s ease;
}
form .field input[type='submit']:active {
  transform: scale(0.95);
}
form .signup-link {
  color: #262626;
  margin-top: 20px;
  text-align: center;
}
form .pass-link a,
form .signup-link a {
  color: #4158d0;
  text-decoration: none;
}
form .pass-link a:hover,
form .signup-link a:hover {
  text-decoration: underline;
}
</style>