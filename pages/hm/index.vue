<template>
  <div class="text back">
    <!-- {{desc}}
    {{dur1}}-->
    <form class="main-form">
      <div class="row">
        <div class="col-md-3 col-sm-12 form-group">
          <div class>
            <label for="jobtitle">Job Title:</label>
          </div>
        </div>
        <div class="col-md-9 col-sm-12">
          <input type="text" name="jobtitle" id="jobtitle" class="form-control" v-model="jtitle" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-3 col-sm-12 form-group">
          <label for="department">Department:</label>
        </div>
        <div class="col-md-9 col-sm-12">
          <input type="text" name="department" id="department" class="form-control" v-model="dname" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-3 col-sm-12 col-xs-12 form-group">
          <label for="salary">Salary:</label>
        </div>
        <div class="col-md-3 col-sm-4 col-xs-4">
          <input type="number" name="salary-1" id="salary-1" class="form-control" v-model="sal1" />
        </div>
        <div class="col-md-1 col-sm-2 col-xs-2">to</div>
        <div class="col-md-3 col-sm-4 col-xs-4">
          <input type="number" name="salary-2" id="salary-2" class="form-control" v-model="sal2" />
        </div>
        <div class="col-md-1 col-sm-2 col-xs-2">Annual</div>
      </div>

      <div class="row">
        <div class="col-3 form-group">
          <label for="experience">Experience:</label>
        </div>
        <div class="col-3">
          <input
            type="number"
            step="0.1"
            name="experience"
            id="experience"
            class="form-control"
            v-model="experience"
          />
        </div>
        <div class="col-1">Yrs</div>
      </div>

      <div class="row">
        <div class="col-3 form-group">
          <label for="duration">Duration:</label>
        </div>
        <div class="col-4">
          <input type="date" name="date-1" id="date-1" class="form-control" v-model="dur1" />
        </div>
        <div class="col-1">to</div>
        <div class="col-4">
          <input type="date" name="date-2" id="date-2" class="form-control" v-model="dur2" />
        </div>
      </div>

      <div class="row">
        <div class="col-3 form-group">
          <label for="description">Description:</label>
        </div>
      </div>
      <div class="row">
        <div class="col-12 form-group">
          <vue-editor class="editor" v-model="desc" />
          <!-- <textarea name="description" id="description" cols="57" rows="5"></textarea> -->
        </div>
      </div>
      <div class="text-right">
        <!-- <button class="btn btn-primary">Add Test</button> -->
        <button
          class="btn btn-primary"
          @click.prevent="writeToFirestore"
          :disabled="writeSuccessful"
        >
          <span v-if="!writeSuccessful">Promote</span>
          <span v-else>Successful!</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../../plugins/firebaseConfig'
import moment from 'moment'
let VueEditor
if (process.client) {
  VueEditor = require('vue2-editor').VueEditor
}
import { v4 as uuidv4 } from 'uuid'
export default {
  components: { VueEditor },
  layout: 'hr',
  data() {
    return {
      writeSuccessful: false,
      jtitle: null,
      dname: null,
      sal1: null,
      sal2: null,
      experience: null,
      dur1: null,
      dur2: null,
      desc: null,
      date: moment().format('DD/MM/YYYY'),
    }
  },
  
  // middleware: 'auth',

  methods: {
    async writeToFirestore() {
      const ref = db.collection('jobdetail').doc(uuidv4())
      const document = {
        jtitle: this.jtitle,
        dname: this.dname,
        sal1: this.sal1,
        sal2: this.sal2,
        experience: this.experience,
        dur1: this.dur1,
        dur2: this.dur2,
        desc: this.desc,
        date: this.date,
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
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.back {
  background-color: rgb(255, 255, 255);
  padding-top: 20px;
  margin-left: 270px;
  margin-right: 30px;
}
.main-form {
  width: 550px;
  margin-left: 30px;
}

.text {
  font-weight: bold;
  font-size: 20px;
}

.btn {
  margin-left: 10px;
}
.form-control,
textarea {
  background: #ffffff;
  border: 1.5px solid #657285;
  box-sizing: border-box;
  box-shadow: 4px 4px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.editor {
  border: 1.5px solid #657285;
  /* box-sizing: border-box; */
  box-shadow: 4px 4px 5px 1px rgba(0, 0, 0, 0.2);
  /* border-radius: 10px; */
}
</style>
