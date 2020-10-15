<template>
  <div>
    <table id="example" class="display" style="width: 100%">
      <thead>
        <tr>
          <th>No.</th>
          <th>Job Title</th>
          <th>Department</th>
          <th>Experience</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in data" :key="i++">
          <td>{{ i }}</td>
          <td>{{ item.jtitle }}</td>
          <td>{{ item.dname }}</td>
          <td>{{ item.experience }}</td>
          <td>Button</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../../plugins/firebaseConfig'
export default {
  data() {
    return {
      data: [],
    }
  },
  layout: 'hr',
  mounted() {
    db.collection('jobdetail')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.data.push({
            id: doc.id,
            ...doc.data(),
          })
        })
      })
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
