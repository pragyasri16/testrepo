<template>
  <div class="row">
    <div class="col-12">
      <!-- <nuxt-link to='/'>Home</nuxt-link>
      <nuxt-link to='/hr/hr'>HR</nuxt-link>-->
      <nav class="navbar navbar-expand-md navbar-light">
        <!-- Brand -->
        <h2 class="col">LOGO</h2>

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
              <nuxt-link to class="nav-link">Product</nuxt-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">INTERNSHIP</a> -->
              <nuxt-link to class="nav-link">Login</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to class="nav-link">Signup</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to class="nav-link">Contact</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar {
  border-bottom: 5px solid #f1f3f5;
  position: fixed;
  top: 0;
}
</style>