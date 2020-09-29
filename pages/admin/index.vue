<template>
  <div class="text back">
    <h2>{{user}}</h2>
    <form class="main-form">
      <div class="row">
        <div class="col-md-4 col-sm-12 form-group">
          <label for="cname">Company Name:</label>
        </div>
        <div class="col-md-8 col-sm-12">
          <input type="text" name="cname" id="cname" class="form-control" v-model="cname" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 col-sm-12 form-group">
          <label for="caddress">Address:</label>
        </div>
        <div class="col-md-8 col-sm-12">
          <input
            type="text"
            name="department"
            id="department"
            class="form-control"
            v-model="address"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 col-sm-12 col-xs-12">
          <div class="form-group">
            <label for="state">State:</label>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12">
          <input type="text" name="state" id="state" class="form-control" v-model="state" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 col-sm-12 col-xs-12">
          <div class="form-group">
            <label for="country">Country:</label>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12">
          <input type="text" name="country" id="country" class="form-control" v-model="country" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-12 form-group">
          <label for="cnum">Contact Number:</label>
        </div>
        <div class="col-md-4 col-sm-12">
          <input type="tel" name="cnum" id="cnum" class="form-control" v-model="cnum" />
        </div>
      </div>

      <div class="text-right">
        <button
          class="btn btn-primary"
          @click.prevent="writeToFirestore"
          :disabled="writeSuccessful"
        >
          <span v-if="!writeSuccessful">Update</span>
          <span v-else>Successful!</span>
        </button>
      </div>
    </form>
    {{entry[1]}}
    <h2 class="abc">Accessing data in Firestore</h2>
    <div v-for="item in entry" :key="item" class="col">
      <div v-for="ele in item" :key="ele">{{ele}}</div>
      <br />
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../../plugins/firebaseConfig'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      writeSuccessful: false,
      cname: null,
      address: null,
      state: null,
      country: null,
      cnum: null,
      entry: [],
    }
  },
  layout: 'admin',
  computed: {
    ...mapState('modules/user', ['user']),
  },
  methods: {
    async writeToFirestore() {
      const ref = db.collection('company').doc(this.user.uid)
      const document = {
        cname: this.cname,
        address: this.address,
        state: this.state,
        country: this.country,
        cnum: this.cnum,
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
.back {
  background-color: rgb(255, 255, 255);
  padding-top: 20px;
  margin-left: 270px;
  margin-right: 30px;
}
.main-form {
  width: 600px;
  margin-left: 30px;
}

.text {
  font-weight: bold;
  font-size: 20px;
}

.btn {
  margin-left: 10px;
}
.form-control {
  background: #ffffff;
  border: 1.5px solid #657285;
  box-sizing: border-box;
  box-shadow: 4px 4px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
</style>
