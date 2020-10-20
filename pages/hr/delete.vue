<template>
    <div>

  <div  id="account" role="tabpanel" aria-labelledby="account-tab">
                  <div class="container">
                      <div class="row">
                        <div class="col-md-">
                            <div class="alert alert-info">
                              Please use the Reset password email button for reseting the password. The form doens't work currently
                            </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text"  v-model="account.name" placeholder="User name" class="form-control">
                          </div>
                        </div>

                        <div class="">
                          <div class="form-group">
                            <input type="text"  v-model="account.email" placeholder="Email address" class="form-control">
                          </div>
                        </div>

                        <div class="">
                          <div class="form-group">
                            <input type="text"  v-model="account.password" placeholder="New password" class="form-control">
                          </div>
                        </div>

                        <div class="">
                          <div class="form-group">
                            <input type="text" v-model="account.confirmPassword"  placeholder="Confirm password" class="form-control">
                          </div>
                        </div>

                       

                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="submit" value="Save Changes" class="btn btn-primary w-100">
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="button" @click="resetPassword" value="Reset password email" class="btn btn-success w-100">
                          </div>
                        </div>
                      </div>
                  </div>
  </div>
      <button class="btn btn-info my-4 btn-block" @click.prevent="SUBMIT">
        SUBMIT
      </button>
      
   
    </div>
</template>

<script>
import firebase from 'firebase'
import { auth } from '../../plugins/firebaseConfig'

    export default {
         data() {
    return {
      email: '',
      pass: '',
     account:[],
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
        
    },
    resetPassword(){
          auth.sendPasswordResetEmail(auth.currentUser.email).then(function() {
  // Email sent.
  alert('Check Mail')
}).catch(function(error) {
  // An error happened.
});
          

          // auth.sendPasswordResetEmail(auth.currentUser.email).then(() =>  {
          //      Toast.fire({
          //       type: 'success',
          //       title: 'Email sent'
          //     })
          // }).catch((error) =>  {
          //     console.log(error);
          // });
          
          }
          }
          }
</script>

<style lang="scss" scoped>

</style>