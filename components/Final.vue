<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light">
      <!-- Brand -->

      <h2>LOGO</h2>
      <!-- <h2>{{xyz}}</h2> -->

      <!-- Toggler/collapsibe Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <div class="navbar-toggler-icon"></div>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav ml-auto">
          <li v-if="xyz">
            <h4>{{this.user.email}}</h4>
          </li>
          <button type="button" class="btn btn-success" @click="signOut" v-if="xyz">Logout</button>
          <li class="nav-item" v-if="!xyz">
            <nuxt-link to="/" class="nav-link">Home</nuxt-link>
          </li>
          <li class="nav-item" v-if="!xyz">
            <nuxt-link to="/" class="nav-link">Features</nuxt-link>
          </li>
          <li class="nav-item" v-if="!xyz">
            <nuxt-link to class="nav-link">Pricing</nuxt-link>
          </li>
          <li class="nav-item" v-if="!xyz">
            <nuxt-link to class="nav-link">Contact</nuxt-link>
          </li>

          <button type="button" class="btn btn-primary" @click.prevent="login" v-if="!xyz">Login</button>
          <button type="button" class="btn btn-success" @click.prevent="signup" v-if="!xyz">SignUp</button>
        </ul>
      </div>
    </nav>

    <div v-if="user">
      <input type="checkbox" id="check" />
      <label for="check">
        <i class="fa fa-bars" id="btn"></i>
        <i class="fa fa-times" id="cancel"></i>
      </label>

      <div class="sidebar">
        <ul>
          <!-- <svg
            id="profile"
            enable-background="new 0 0 512 512"
            height="50"
            viewBox="0 0 512 512"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="m256 512c-60.615 0-119.406-21.564-165.543-60.721-10.833-9.188-20.995-19.375-30.201-30.275-38.859-46.06-60.256-104.657-60.256-165.004 0-68.381 26.628-132.668 74.98-181.02s112.639-74.98 181.02-74.98 132.668 26.628 181.02 74.98 74.98 112.639 74.98 181.02c0 60.348-21.397 118.945-60.251 164.998-9.211 10.906-19.373 21.093-30.209 30.284-46.134 39.154-104.925 60.718-165.54 60.718zm0-480c-123.514 0-224 100.486-224 224 0 52.805 18.719 104.074 52.709 144.363 8.06 9.543 16.961 18.466 26.451 26.516 40.364 34.256 91.801 53.121 144.84 53.121s104.476-18.865 144.837-53.119c9.493-8.052 18.394-16.976 26.459-26.525 33.985-40.281 52.704-91.55 52.704-144.356 0-123.514-100.486-224-224-224z"
              />
              <path
                d="m256 256c-52.935 0-96-43.065-96-96s43.065-96 96-96 96 43.065 96 96-43.065 96-96 96zm0-160c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64z"
              />
              <path
                d="m411.202 455.084c-1.29 0-2.6-.157-3.908-.485-8.57-2.151-13.774-10.843-11.623-19.414 2.872-11.443 4.329-23.281 4.329-35.185 0-78.285-63.646-142.866-141.893-143.99l-2.107-.01-2.107.01c-78.247 1.124-141.893 65.705-141.893 143.99 0 11.904 1.457 23.742 4.329 35.185 2.151 8.571-3.053 17.263-11.623 19.414s-17.263-3.052-19.414-11.623c-3.512-13.989-5.292-28.448-5.292-42.976 0-46.578 18.017-90.483 50.732-123.63 32.683-33.114 76.285-51.708 122.774-52.358.075-.001.149-.001.224-.001l2.27-.011 2.27.01c.075 0 .149 0 .224.001 46.489.649 90.091 19.244 122.774 52.358 32.715 33.148 50.732 77.053 50.732 123.631 0 14.528-1.78 28.987-5.292 42.976-1.823 7.262-8.343 12.107-15.506 12.108z"
              />
            </g>
          </svg>
          <h5 id="profile_name">HR Name</h5>-->
          <!-- @click="sidetest" -->
          <hr />
          <!-- <li @click="newtest">Test</li> -->
          <li>
            <nuxt-link to="/" >
              <i class="fas fa-layer-group"></i>
              <span>Dashboard</span>
            </nuxt-link>
          </li>
          <li v-if="hrsb">
            <nuxt-link to="/hr/mytable">
              <i class="far fa-paper-plane"></i>
              <span>Publish</span>
            </nuxt-link>
          </li>
          <li v-if="hrsb">
            <nuxt-link to="/">
              <i class="far fa-clipboard"></i>
              <span>Test</span>
            </nuxt-link>
          </li>
          <li v-if="hrsb">
            <nuxt-link to="/">
              <i class="fas fa-book-open"></i>
              <span>Questions</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" v-if="hrsb">
              <i class="fas fa-chart-pie"></i>
              <span>Analytics</span>
            </nuxt-link>
          </li>
          <li v-if="hmsb">
            <nuxt-link to="/hm/sent">
              <i class="far fa-paper-plane"></i>
              <span>Sent</span>
            </nuxt-link>
          </li>
          <li v-if="adminsb">
            <nuxt-link to="/admin/company">
              <i class="far fa-user"></i>
              <span>Profiles</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import firebase from 'firebase'
import Cookies from 'js-cookie'
import { auth } from '../plugins/firebaseConfig'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState('modules/user', ['user']),
    // ...mapGetters({
    //   getUserById: 'getUserById',
    // }),
    xyz() {
      console.log('user', this.user)
      // this.userlogin({ ...user, ...claims })isSadmin: user.sa,
      // let { claims } = await user.getIdTokenResult()
      if (this.user != null) {
        if (
          this.user.isHr == true ||
          this.user.isHm == true ||
          this.user.isAdmin == true ||
          this.user.isSadmin == true
        ) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },

    hrsb() {
      if (this.user != null) {
        if (this.user.isHr == true) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
    hmsb() {
      if (this.user != null) {
        if (this.user.isHm == true) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
    adminsb() {
      if (this.user != null) {
        if (this.user.isAdmin == true) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
  },

  methods: {
    ...mapActions('modules/user', ['userlogin']),

    login() {
      this.$router.push('/loginform')
    },
    signup() {
      this.$router.push('/signup')
    },
    signOut() {
      auth.signOut().then(async () => {
        await Cookies.remove('access_token')
        await this.$router.push('/')
        // await window.location.reload()
      })
    },
  },

  mounted() {
    // let testuser = auth.currentUser.getIdTokenResult()
    // console.log(testuser)
    // auth.onAuthStateChanged((user) => {
    //   this.user = user
    //   console.log(auth.currentUser.getIdTokenResult())
    // })
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:600|Open+Sans:600&display=swap');
@import url('https://kit.fontawesome.com/a076d05399.js');
h2 {
  padding-left: 30px;
}
.navbar {
  border-bottom: 5px solid #f1f3f5;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: white;
}
.nav-item {
  padding-top: 5px;
  padding-left: 10px;
  font-size: 18px;
  font-family: IBM Plex Sans;
}
.btn {
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 6px;
  width: 90px;
  height: 40px;
  font-size: 20px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

li:hover {
  background-color: #e9e9e9;
  text-decoration: none;
}

#profile {
  margin-left: 70px;
}

#profile_name {
  padding-left: 40px;
  padding-bottom: 30px;
}

.sidebar {
  position: fixed;
  width: 250px;
  left: -250px;
  height: 100%;
  background: #ffffff;
  transition: all 0.5s ease;
  margin-top: -25px;
  border-right: 5px solid #f1f3f5;
}

.sidebar a {
  color: #001737;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  display: block;
  height: 65px;
  width: 100%;
  /* color: #001737; */
  line-height: 65px;
  padding-left: 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #f1f3f5;
  /* border-top: 1px solid rgba(25, 208, 253, 0.1); */
  /* border-left: 5px solid black; */
  /* font-family: 'Open Sans', sans-serif; */
  transition: all 0.1s ease;
}
a.active,
a:hover {
  /* border-left: 5px solid #3639ee; */
  color: #39d5d5;
}
.sidebar a i {
  font-size: 23px;
  margin-right: 16px;
}
.sidebar a span {
  letter-spacing: 1px;
}
#check {
  display: none;
}
label #btn,
label #cancel {
  position: absolute;
  cursor: pointer;
  color: rgba(0, 23, 55, 0.5);
  border-radius: 5px;
  border: 0.75px solid rgba(0, 23, 55, 0.5);
  margin: 5px;
  font-size: 29px;
  /* background: #262626; */
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
  margin-top: -80px;
  margin-left: 200px;
  transition: all 0.5s ease;
}
label #cancel {
  opacity: 0;
  visibility: hidden;
}
#check:checked ~ .sidebar {
  left: 0;
}
#check:checked ~ label #btn {
  /* margin-left: 245px; */
  opacity: 0;
  visibility: hidden;
}
#check:checked ~ label #cancel {
  /* margin-left: 245px; */
  opacity: 1;
  visibility: visible;
}
@media (max-width: 860px) {
  .sidebar {
    height: auto;
    width: 70px;
    left: 0;
    margin: 100px 0;
  }

  #btn,
  #cancel {
    display: none;
  }
  span {
    position: absolute;
    margin-left: 23px;
    opacity: 0;
    visibility: hidden;
  }
  .sidebar a {
    height: 60px;
  }
  .sidebar a i {
    margin-left: -10px;
  }
  a:hover {
    width: 200px;
    background: inherit;
  }
  .sidebar a:hover span {
    opacity: 1;
    visibility: visible;
    text-decoration: none;
  }
}
</style>


