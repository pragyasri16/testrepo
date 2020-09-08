<template>
    <div class="main">
      <!-- Default form register -->
      <form class="text-center border border-light p-5" action="#!">
        <p  align="left" class="h4 mb-4">Sign up</p>

        <div class="form-row mb-4">
          <div class="col">
            <!-- First name -->
            <input
              type="text"
              id="defaultRegisterFormFirstName"
              class="form-control"
              placeholder="Company name"
            />
          </div>
          </div>
           <!-- E-mail -->
        <input
          type="email"
          id="defaultRegisterFormEmail"
          class="form-control mb-4"
          placeholder="Address"
        />
         

        <!-- E-mail -->
        <input
          type="email"
          id="defaultRegisterFormEmail"
          class="form-control mb-4"
          placeholder="E-mail"
        />

        <!-- Password -->
        <input
          type="password"
          id="defaultRegisterFormPassword"
          class="form-control"
          placeholder="Password"
          aria-describedby="defaultRegisterFormPasswordHelpBlock"
        />
        <small
          id="defaultRegisterFormPasswordHelpBlock"
          class="form-text text-muted mb-4"
        >At least 8 characters and 1 digit</small>

        <!-- Phone number -->
        <input
          type="text"
          id="defaultRegisterPhonePassword"
          class="form-control"
          placeholder="Contact number"
          aria-describedby="defaultRegisterFormPhoneHelpBlock"
        />
        <br>

        <!-- contact person name -->
        <input
          type="text"
          id="defaultRegisterPhonePassword"
          class="form-control"
          placeholder="Contact person name"
          aria-describedby="defaultRegisterFormPhoneHelpBlock"
        />
      <br>

       <!-- Country -->
        <input
          type="text"
          id="defaultRegisterPhonePassword"
          class="form-control"
          placeholder="Country"
          aria-describedby="defaultRegisterFormPhoneHelpBlock"
        />
        

        <!-- Sign up button -->
        <button class="btn btn-info my-4 btn-block" type="submit">SUBMIT</button>

       
      </form>
      <!-- Default form register -->


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
    