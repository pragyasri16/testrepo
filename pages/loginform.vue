<template>
  
    <div class="wrapper try">
      <!-- <div class="title">Login Form</div> -->
      <h2>Login </h2>
      <form >
        <div class="field">
          <input type="text" required />
          <label>Email Address</label>
        </div>
        <div class="field">
          <input type="password" required />
          <label>Password</label>
        </div>
        
          
          
            <nuxt-link to='' class="lcolor">Forget password ?</nuxt-link>
           
          
       
        <div class="field">
          <input type="submit" value="Login" />
        </div>
        <div class="signup-link">
          Not a member?
          <nuxt-link to=''>Signup Now</nuxt-link>
        </div>
      </form>
    </div>
  
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
h2{
  text-align: center;
  line-height: 80px;
  font-size: 40px;
  background: #4eabe6;
  border-radius: 15px 15px 0 0;
  color: #fff;    
}
.lcolor{
  color: #262626;
}

.wrapper {
  width: 380px;
  background: #fff;
  border-radius: 15px;
  margin: auto;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
}

form {
  padding: 10px 30px 50px 30px;
}
.field {
  height: 50px;
  width: 100%;
  margin-top: 20px;
  position: relative;
}
input {
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 17px;
  padding-left: 20px;
  border: 1px solid lightgrey;
  border-radius: 25px;
  transition: all 0.3s ease;
}
input:focus,
form .field input:valid {
  border-color: #4158d0;
}
label {
  position: absolute;
  top: 50%;
  left: 20px;
  color: #999999;
  font-weight: 4002;
  font-size: 17px;
  pointer-events: none;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}
form .field input:focus ~ label,
form .field input:valid ~ label {
  top: 0%;
  font-size: 16px;
  color: #4158d0;
  background: #fff;
  transform: translateY(-50%);
}
.content {
  display: flex;
  width: 100%;
  height: 50px;
  font-size: 16px;
  align-items: center;
  justify-content: space-around;
}




form .field input[type='submit'] {
  color: #fff;
  border: none;
  padding-left: 0;
  margin-top: -10px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  background: #4eabe6;
  transition: all 0.3s ease;
}
form .field input[type='submit']:active {
  transform: scale(0.95);
}
form .signup-link {
  color: #262626;
  margin-top: 20px;
  text-align: center;
}
form .pass-link a,
form .signup-link a {
  color: #3e1bdb;
  text-decoration: none;
}
form .pass-link a:hover,
form .signup-link a:hover {
  text-decoration: underline;
}
</style>