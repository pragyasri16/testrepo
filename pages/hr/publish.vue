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
    <!-- v-html="item.desc" -->
    <table id="example" class="table border border-dark bg-white responsive">
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th>Date</th>
          <th>Job Title</th>
          <th>Department</th>
          <th>Experience</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr>
          <td>0</td>
          <td>Manager</td>
          <td>Sales</td>
          <td>2+</td>
          <td>
            <button type="button" class="btn" @click.prevent="xyz(item.id)">
              View Details
            </button>
          </td>
        </tr> -->

        <tr v-for="(item, i) in data" :key="i++">
          <td>{{ i++ }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.info.jtitle }}</td>
          <td>{{ item.info.dname }}</td>
          <td>{{ item.info.experience }}</td>
          <td>
            <button type="button" class="btn" @click.prevent="">
              View Details
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- {{xyz}} -->
    {{ getId }}
  </div>

  <!-- </div> -->
</template>


<script>
import { mapState, mapGetters } from 'vuex'
import firebase from 'firebase'
import { db } from '../../plugins/firebaseConfig'
export default {
  data() {
    return {
      data: [],
      count: 0,
    }
  },

  // middleware: 'auth',
  //.where('id', '==', 'job1')
  created() {
    db.collection('postedjobs')
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
  methods: {
    // xyz() {
    //   this.$router.push('/hr/formfill')
    // },
    xyz() {
      // console.log('Value',val);
      this.$router.push('/hr/hrform')
    },
  },
  layout: 'hr',
  computed: {
    ...mapState('modules/user', ['user']),
    ...mapGetters({
      getId: 'getId',
    }),
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



