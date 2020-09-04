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

          <button type="button" class="btn btn-primary">Login</button>
          <button type="button" class="btn btn-success">SignUp</button>
        </ul>
      </div>
    </nav>

    <div class="wrapper" id="mySideNav">
      
      <div class="sidebar" >
        <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>
        <button type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
        <ul>
          <li>
            <nuxt-link to="/" class="db">Dashboard</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="dbc">Publish</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="dbc">Test</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="dbc">Question Set</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="dbc">Analytics</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="dbc">Sent</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
</script>

<style scoped>
.navbar {
  border-bottom: 5px solid #f1f3f5;
  padding-top: 15px;
  padding-bottom: 15px ;
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
  background: rgb(25, 39, 230);
  border-right: solid 5px #e9e9e9;
}

.close{
  width: 40px;
  height: 40px;
  color: #fff;
}

.db {
  color: #39d5d5;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 36px;
  padding: 15px;
}

.dbc {
  color: #001737;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 36px;
  padding: 15px;
}

li:hover {
  background-color: #e9e9e9;
  text-decoration: none;
}
</style>
