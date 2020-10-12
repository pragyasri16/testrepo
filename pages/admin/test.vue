<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="signup">
          <button @click.prevent="login" class="login btn">Login</button>
        </div>
        <div>
          <button @click.prevent="signup" class="login btn">Sign Up</button>
        </div>

        <div class="signup-form" v-if="signup1">
          <input
            type="text"
            placeholder="Your Email Address"
            class="input"
          /><br />
          <input
            type="text"
            placeholder="Choose a Username"
            class="input"
          /><br />
          <input
            type="password"
            placeholder="Choose a Password"
            class="input"
          /><br />
          <div class="btn">Create account</div>
        </div>

        <div class="login-form" v-if="log">
          <input
            type="text"
            placeholder="Email or Username"
            class="input"
          /><br />
          <input type="password" placeholder="Password" class="input" /><br />
          <div class="btn">log in</div>
          <span><a href="#">I forgot my username or password.</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      log: true,
      signup1: false,
      //   signx: true,
    }
  },
  methods: {
    login() {
      console.log('hi')
      if (this.log == true) {
        return this.log=true
      } else {
        this.signup1 = false
        this.log=true
      }
      //   this.log = false
      //   this.signx = true
    },
    signup() {
      console.log('hi')
      if (this.signup1 == true) {
        return this.signup1 = true
      } else {
        this.signup1 = true
        this.log = false
      }
      //   this.log = false
      //   this.signx = true
    },

    // sign() {
    //   console.log('hi')
    //   this.log = true
    //   this.signx = false
    // },
  },
}
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  background: #e9eaea;
  font-family: roboto;
  user-select: none;
}

.container {
  width: 450px;
  margin: 30px auto;
}

.signup,
.login {
  width: 50%;
  background: #fff;
  float: left;
  height: 60px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
}

.signup-form,
.login-form {
  background: #fff;
  padding: 40px;
  clear: both;
  width: 100%;
  box-sizing: border-box;
  height: 400px;
}

.input {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 25px;
  border: 2px solid #e9eaea;
  color: #3e3e40;
  font-size: 14px;
  outline: none;
  transform: all 0.5s ease;
}

.input:focus {
  border: 2px solid #34b3a0;
}

.btn {
  width: 100%;
  background: #34b3a0;
  height: 60px;
  text-align: center;
  line-height: 60px;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  margin-bottom: 30px;
}

span a {
  text-decoration: none;
  color: #000;
}

::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #3e3e40;
  font-family: roboto;
}
</style>