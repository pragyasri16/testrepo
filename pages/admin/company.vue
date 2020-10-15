<template>
  <div>
    <div class="container login-container">
      <div class="col-md-5 login-form-2">
        <h3>Select Role</h3>
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder=" Email *"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder=" Password *"
              v-model="pass"
            />
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="role"
              id="hr"
              value="hr"
              v-model="roles"
            />
            <label class="form-check-label text-light" for="hr"
              ><strong>Human Resource</strong></label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="role"
              id="hm"
              value="hm"
              v-model="roles"
            />
            <label class="form-check-label text-light" for="hm"
              ><strong>Hiring Manager</strong></label
            >
          </div>
          <br /><br />
          <div class="form-group text-center">
            <button class="btn btn-light" type="submit" @click.prevent="signup">
              SUBMIT
            </button>
          </div>
          {{ roles }}
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { auth } from '../../plugins/firebaseConfig'
export default {
  data() {
    return {
      email: null,
      pass: null,
      roles: null,
    }
  },
  layout: 'admin',

  methods: {
    async signup() {
      if (this.roles == null || this.email == null || this.pass == null) {
        alert('Please fill all details.')
      } else {
        const { user } = await auth.createUserWithEmailAndPassword(
          this.email,
          this.pass
        )
        // console.log('user =>', user)

        // var setRole = this.roles
        if(this.roles=='hr')
        {
          let data = {
          uid: user.uid,
          role: { hr: true },
        }
        let callable = firebase.functions().httpsCallable('customeClaims')
        const res = await callable(data)
        const { claims } = await user.getIdTokenResult()
        }
        if(this.roles=='hm'){
          let data = {
          uid: user.uid,
          role: { hm: true },
        }
        let callable = firebase.functions().httpsCallable('customeClaims')
        const res = await callable(data)
        const { claims } = await user.getIdTokenResult()
        }
       
        
        // console.log('setRole=', setRole)
        // console.log('role=', role)
        // let callable = firebase.functions().httpsCallable('customeClaims')
        // const res = await callable(data)
        // const { claims } = await user.getIdTokenResult()
      }

      // console.log('user => ', user)
      // console.log('claims => ', claims)
    },
  },
}
</script>
<style scoped>
/* input {
    width: 400px;
    } */

h3 {
  text-align: center;
}

.login-container {
  margin-top: 5%;
  margin-bottom: 5%;
}

.login-form-2 {
  margin: auto;
  padding: 3%;
  background: #0062cc;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-2 h3 {
  text-align: center;
  color: #fff;
}
.login-container form {
  padding: 10%;
}
.btnSubmit {
  width: 50%;
  border-radius: 1rem;
  padding: 1.5%;
  border: none;
  cursor: pointer;
}

.login-form-2 .btnSubmit {
  font-weight: 600;
  color: #0062cc;
  background-color: #fff;
}
</style>





