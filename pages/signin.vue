<template>
    <div class="main">
      <!-- Default form login -->
      <form class="text-center border border-light p-5" action="#!">
      <p align="left" class="h4 mb-4">Login</p>

      <!-- Email -->
      <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail" />

      <!-- Password -->
      <input
        type="password"
        id="defaultLoginFormPassword"
        class="form-control mb-4"
        placeholder="Password"
      />

      <div class="d-flex justify-content-around">
        <div>
          <!-- Remember me -->
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember" />
            <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
          </div>
        </div>
        <div>
          <!-- Forgot password -->
          <a href>Forgot password?</a>
        </div>
      </div>

      <!-- Sign in button -->
      <button class="btn btn-info btn-block my-4" type="submit">Login</button>

      <!-- Register -->
      <p>
        Not a member?
        <a href>Register</a>
      </p>

     

         </form>
         </div>
         </template>
         <script>
export default {}
</script>
    <style scoped>
      .main{
          width: 400px;
          margin: auto;
      }
    
    </style>
    