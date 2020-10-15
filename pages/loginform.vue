<template>
  <div class="wrapper try">
    <!-- <div class="title">Login Form</div> -->
    <h2>Login</h2>
    {{ name }}
    <form autocomplete="on">
      <div class="field">
        <input type="email" v-model="email" required />
        <label>Email Address</label>
      </div>
      <div class="field">
        <input type="password" v-model="pass" required />
        <label>Password</label>
      </div>
      <div class="text-center pt-1">
        <nuxt-link
          to
          class="lcolor"
          data-toggle="modal"
          data-target="#forgetPass"
          >Forget password ?</nuxt-link
        >
      </div>
      <div class="field">
        <input type="submit" @click.prevent="login" value="Login" />
        <!-- @click.prevent="login" -->
      </div>
      <div class="signup-link">
        Not a member?
        <nuxt-link to>Signup Now</nuxt-link>
      </div>
    </form>

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
          <h4 class="mt-1">Enter Valid Email</h4>
          <!-- </div> -->
          <div class="modal-body">
            <input
              type="email"
              class="mt-2 p-1"
              v-model="forgetpass"
            /><br /><br />
            <button
              type="button"
              class="btn btn-primary p-2"
              @click.prevent="forget"
            >
              Submit
            </button>
            
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
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import firebase from 'firebase'
import { auth } from '../plugins/firebaseConfig'
export default {
  data() {
    return {
      email: '',
      pass: '',
      forgetpass: null,
      name: null,
    }
  },
  computed: {
    ...mapGetters('modules/user', ['user']),
  },

  methods: {
    ...mapMutations({
      addUser: 'addUser',
    }),
    ...mapActions('modules/user', ['userlogin']),
    forget() {
      auth
        .sendPasswordResetEmail(this.forgetpass)
        .then(function () {
          // Email sent.
          alert('Check email')
        })
        .catch(function (error) {
          // An error happened.
          alert('Error')
        })
    },

    async login() {
      const { user } = await auth.signInWithEmailAndPassword(
        this.email,
        this.pass
      )
      let { claims } = await user.getIdTokenResult()

      if (user.emailVerified == true) {
        this.userlogin({ ...user, ...claims })
        console.log('Data', user)
        if (claims.admin == true) {
          setTimeout(() => {
            window.location.reload()
          }, 1000)

          // alert('Admin login')

          // this.$router.go('/admin')
          // this.$router.push('/admin')
        }
        if (claims.hr == true) {
          setTimeout(() => {
            window.location.reload()
          }, 1000)
          this.$router.push('/hr')
        }
        if (claims.hm == true) {
          setTimeout(() => {
            window.location.reload()
          }, 1000)
          this.$router.push('/hm')
        }
        if (claims.sa == true) {
          setTimeout(() => {
            window.location.reload()
          }, 1000)
          this.$router.push('/superadmin')
        }
      } else {
        alert('Check your registered email for verification link .')
      }

      // else {
      //   alert('Incorrect username or password.')
      // }
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
.modal-content {
  margin: auto;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
h2 {
  text-align: center;
  line-height: 80px;
  font-size: 40px;
  background: #4eabe6;
  border-radius: 15px 15px 0 0;
  color: #fff;
}
.lcolor {
  color: #262626;
}

.wrapper {
  width: 380px;
  background: #fff;
  border-radius: 15px;
  margin: auto;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
}

form {
  padding: 10px 30px 50px 30px;
}
.field {
  height: 50px;
  width: 100%;
  margin-top: 20px;
  position: relative;
}
input {
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 17px;
  padding-left: 20px;
  border: 1px solid lightgrey;
  border-radius: 25px;
  transition: all 0.3s ease;
}
input:focus,
form .field input:valid {
  border-color: #4158d0;
}
label {
  position: absolute;
  top: 50%;
  left: 20px;
  color: #999999;
  font-weight: 4002;
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
.content {
  display: flex;
  width: 100%;
  height: 50px;
  font-size: 16px;
  align-items: center;
  justify-content: space-around;
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
  color: #3e1bdb;
  text-decoration: none;
}
form .pass-link a:hover,
form .signup-link a:hover {
  text-decoration: underline;
}
</style>