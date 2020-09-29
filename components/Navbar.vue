<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light">
      <!-- Brand -->
      <h2>LOGO</h2>

      <!-- Toggler/collapsibe Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link">Features</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to class="nav-link">Pricing</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to class="nav-link">Contact</nuxt-link>
          </li>

          <button type="button" class="btn btn-primary" @click.prevent="login">Login</button>
          <button type="button" class="btn btn-success" @click.prevent="signup">SignUp</button>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push('/loginform')
    },
    signup() {
      this.$router.push('/signup')
    },
  },
}
</script>

<style scoped>
h2 {
  padding-left: 30px;
}
.navbar {
  border-bottom: 5px solid #f1f3f5;
  padding-top: 15px;
  padding-bottom: 15px;
  background: white;
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

.wrapper {
  display: flex;
  position: fixed;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

.sidebar {
  width: 200px;
  height: 100%;
  padding: 30px 0px;
  position: fixed;
  background: #fff;
  border-right: solid 5px #e9e9e9;
}



li:hover {
  background-color: #e9e9e9;
  text-decoration: none;
}
</style>
