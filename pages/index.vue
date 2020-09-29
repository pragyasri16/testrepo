<template>
  <div>
    <div class="container">
      <Logo />
      <h1 class="title">Shubhang</h1>
      {{asdf}}
      <br />
      <br />
      {{qwer}}
      <!-- {{data[0].cname}} -->
    </div>

    <h2 class="abc">Accessing data in Firestore</h2>
    {{data}}
    <div v-for="item in data" :key="item" class="abc">
      <div v-for="ele in item" :key="ele">{{ele}}</div>
      <br />
    </div>
  </div>
</template> 


<script>
import firebase from 'firebase'
import { db } from '../plugins/firebaseConfig'
// const { uuid } = require('uuid')
import { v4 as uuidv4 } from 'uuid'

export default {
  data() {
    return {
      data: [],
      asdf: uuidv4(),
      qwer: null,
    }
  },
  methods: {
    // xyz() {
    //   var your_uuid = uuid()
    //   console.log('data', your_uuid)
    // },
  },
  // created() {
  //   console.log('data', uuidv4())
  // },

  mounted() {
    db.collection('company')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.data.push({
            id: doc.id,
            ...doc.data(),
          })
          // this.qwer = doc.get('cname')
          // console.log('name', cName)
        })
      })
  },

  // beforeCreate() {
  //   db.collection('company')
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         this.data.push({
  //           id: doc.id,
  //           ...doc.data(),
  //         })
  //       })
  //     })
  // },
}
</script>
<style>
.abc {
  margin-left: 130px;
  margin-bottom: 30px;
}
.container {
  margin: 0 auto;
  min-height: 500px;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>



