<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light">
      <!-- Brand -->
      <h2 class="col-2 logo">LOGO</h2>

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
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.logo {
  border-right: 5px solid #f1f3f5;
}
.navbar {
  border-bottom: 5px solid #f1f3f5;
}
.nav-item {
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
</style>
