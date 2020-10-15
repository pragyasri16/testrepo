<template>
  <div class="ab">
    <form class="form-inline space">
      <input
        class="search form-control form-control-sm"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <i class="fas fa-search icon" aria-hidden="true"></i>
    </form>

    <table id="example" class="table border border-dark bg-white responsive">
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
          <td>{{i}}</td>
          <td>{{item.jtitle}}</td>
          <td>{{item.dname}}</td>
          <td>{{item.experience}}</td>
          <td>Button</td>

        </tr>
      </tbody>
    </table>
  </div>
  <!-- </div> -->
</template>

<script>
import firebase from 'firebase'
import { db } from '../../plugins/firebaseConfig'
export default {
  data(){
    return{
      data:[]
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
table {
  font-size: 18px;
  /* padding-left: 20px; */
}
tbody tr:hover {
  background-color: #f1f3f5;
}
/* .btn {
  background-color: white;
  color: #39d5d5;
  border: 2px solid  #39d5d5;
} */

.btn {
  border: 2px solid #39d5d5;
  background-color: white;
  color: #39d5d5;
  font-weight: 550;
  outline: none;
}

.btn:hover {
  background-color: #39d5d5;
  color: white;
}
.btn:focus {
  box-shadow: none;
}
.icon {
  padding-left: 10px;
}

::-webkit-input-placeholder {
  text-align: center;
}

.search {
  width: 200px;
}

.fas {
  color: #0880ae;
}
@media (max-width: 900px) {
  .ab {
    /* width: 50%; */
    margin-left: 90px;
  }
}
</style>