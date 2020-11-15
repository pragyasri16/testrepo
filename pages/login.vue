<template>
    <div>
      <div class="wrapper column is-one-third">
      <form autocomplete="on">
        <h2 class="title is-2 has-text-centered">Login</h2>
        <b-field label="Email"
            id="label"
            type=""
            message="">
            <b-input type="email"
                value=""
                v-model="email">
            </b-input>
        </b-field>
        
        <b-field label="Password" id="label">
            <b-input type="password"
                value=""
                v-model="pass"
                password-reveal>
            </b-input>
        </b-field>

        <nuxt-link to class="lcolor" @click.native="isModalActive = true"
          >Forget password ?
        </nuxt-link>
        <br>
        <div class="has-text-centered">
        <b-button type="is-primary" size="is-medium" @click.prevent="login" value="Login">Login</b-button>
        </div>
        <div class="has-text-centered ">
        Not a member?
        <nuxt-link to id="signUpLink">Sign up Now</nuxt-link>
      </div>
      </form>

        
       </div>
    </div>
</template>

<script>
import {mapActions, mapGetters } from 'vuex'
import firebase from 'firebase'
import { auth } from '../plugins/firebaseConfig'

    export default { 
      layout: 'access',
        data(){
          return{
            email: '',
            pass: '',
           
          }
        },
        // computed: {
        //  ...mapGetters('modules/user', ['user']),
        // },

         methods:{
            // ...mapMutations({
            //   addUser: 'addUser',
            // }),
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
          // this.$router.push('/hr')
        }
        if (claims.hm == true) {
          setTimeout(() => {
            window.location.reload()
          }, 1000)
          // this.$router.push('/hm')
        }
        if (claims.sa == true) {
          setTimeout(() => {
            window.location.reload()
          }, 1000)
          // this.$router.push('/superadmin')
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

.wrapper {
  /* width: 450px;
  height: 400px; */
  background: #fff;
  border-radius: 15px;
  margin: auto;
  box-shadow: 5px 10px 10px 5px rgba(0.19, 0.19, 0.19, 0.19);
  margin-top: 100px;
}

#label
{
margin-left: 20px;
margin-right: 20px;
padding-bottom: 20px;
}

.lcolor {
  color: #262626;
  text-decoration: none;
  margin-left: 20px;
  position: relative;
}

.lcolor:hover{
  font-weight: 500;
}

#loginButton{
  margin-left: 180px;
  width:100px;
  margin-top: 10px;
}

.signup-link{
    margin-left: 130px;
    padding-top: 10px;
}

#signUpLink{
    text-decoration: none;
   
   
}

#signUpLink:hover{
    text-decoration: none;
    font-weight: 500;
}
</style>