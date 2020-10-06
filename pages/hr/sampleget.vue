<template>
  <div>
    <table id="example" class="display" style="width:100%">
      <thead>
        <tr>
          <th>Job Title</th>
          <th>Department</th>
          <th>Experience</th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Manager</td>
          <td>Sales</td>
          <td>2+</td>
        </tr>
        <tr>
          <td>Manager</td>
          <td>Sales</td>
          <td>2+</td>
        </tr>
        <tr>
          <td>Manager</td>
          <td>Sales</td>
          <td>2+</td>
        </tr>
        <!-- <tr v-for="item in data" :key="item" class="abc">
          <td>{{item.jtitle}}</td>
          <td>{{item.dname}}</td>
          <td>{{item.experience}}</td>
        </tr>-->
      </tbody>
    </table>
    <!-- {{data}} -->
    <!-- <div v-for="item in data" :key="item" class="abc">
      {{item.jtitle}}
      <br /><br>
      {{item.dname}}
      <br><br>
      {{item.experience}}
    </div>-->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase'
import { db } from '../../plugins/firebaseConfig'
export default {
  data() {
    return {
      data: [],
    }
  },
  // middleware: 'auth',
  mounted() {
    $('#example').DataTable({
      columnDefs: [
        {
          targets: [0],
          orderData: [0, 1],
        },
        {
          targets: [1],
          orderData: [1, 0],
        },
        {
          targets: [2],
          orderData: [2, 0],
        },
      ],
    })

    db.collection('jobdetail')
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
  layout: 'hr',
  computed: {
    ...mapState('modules/user', ['user']),
  },
}
</script>

<style scoped>
@import url('https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css');

* {
  margin-left: 250px;
}

td,
th {
  background: white;
}
</style>
