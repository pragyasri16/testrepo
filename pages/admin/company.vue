<template>
  <div>
    <div class="container login-container">
      <div class="row">
        <div class="col-md-6 login-form-1">
          <h3>HR Login Details</h3>
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder=" Email *"
                value
                v-model="hremail"
              />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" placeholder=" Password *" value />
            </div>
            <div class="form-group">
              <button class="btn btn-primary" type="submit ">SUBMIT</button>
            </div>
          </form>
        </div>
        <div class="col-md-6 login-form-2">
          <h3>HM Login Details</h3>
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder=" Email *"
                value
                v-model="hmemail"
              />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" placeholder=" Password *" value />
            </div>
            <div class="form-group">
              <button class="btn btn-primary" type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
      <div class="text-center">
        <br />
        <button
          class="btn btn-primary"
          @click.prevent="writeToFirestore"
          :disabled="writeSuccessful"
        >
          <span v-if="!writeSuccessful">Update</span>
          <span v-else>Successful!</span>
        </button>
      </div>
    </div>
    <h2 class="abc">Accessing data in Firestore</h2>
    <div v-for="item in entry" :key="item" class="col">
      <div v-for="ele in item" :key="ele">{{ele}}</div>
      <br />
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapState } from 'vuex'
import { db } from '../../plugins/firebaseConfig'
export default {
  data() {
    return {
      entry: [],
    }
  },
  computed: {
    ...mapState('modules/user', ['user']),
  },
  methods: {
    async writeToFirestore() {
      const ref = db
        .collection('company')
        .doc(this.user.uid)
        .collection('profiles')
        .doc('testdoc')
      const document = {
        hremail: this.hremail,
        hmemail: this.hmemail,
      }
      try {
        await ref.set(document)
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      this.writeSuccessful = true
    },
  },
  mounted() {
    db.collection('company')
      .doc('KHpAuUXe2JcWNDMAkc8AoQJKg3j2')
      .collection('profiles')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.entry.push({
            id: doc.id,
            ...doc.data(),
          })
        })
      })
  },
}
</script>
<style scoped>
input {
  width: 400px;
}
h3 {
  text-align: center;
}

.login-container {
  margin-top: 5%;
  margin-bottom: 5%;
}
.login-form-1 {
  padding: 5%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-1 h3 {
  text-align: center;
  color: #333;
}
.login-form-2 {
  padding: 5%;
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
.login-form-1 .btnSubmit {
  font-weight: 600;
  color: #fff;
  background-color: #0062cc;
}
.login-form-2 .btnSubmit {
  font-weight: 600;
  color: #0062cc;
  background-color: #fff;
}
</style>





