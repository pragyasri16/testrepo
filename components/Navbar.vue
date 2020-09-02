<template>
    <div>
        <!-- <nuxt-link to='/'>Home</nuxt-link>
        <nuxt-link to='/hr/hr'>HR</nuxt-link> -->
     <nav class="navbar navbar-expand-md  navbar-light">
            <!-- Brand -->
            <h2 class="col-2 logo">LOGO</h2>
          
            <!-- Toggler/collapsibe Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <nuxt-link to='/' class="nav-link">Home</nuxt-link>
                </li>
                 <li class="nav-item">
                      <nuxt-link to='' class="nav-link">Product</nuxt-link>
                <li class="nav-item">
                  <!-- <a class="nav-link" href="#">INTERNSHIP</a> -->
                  <nuxt-link to='' class="nav-link">Login</nuxt-link>
                </li>
                <li class="nav-item">
                 <nuxt-link to='' class="nav-link">Signup</nuxt-link>
                 <li class="nav-item">
                  <nuxt-link to='' class="nav-link">Contact</nuxt-link>    
                </li>
              </ul>
            </div>
          </nav>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.logo{    
    border-right:5px solid #f1f3f5;
}
.navbar{
    border-bottom: 5px solid #f1f3f5;
}
</style>