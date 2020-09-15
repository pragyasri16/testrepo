<template>
    <div>
        <form  class="main-form">
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <div class="form-group">
            <label for="company name">Company Name:</label>
          </div>
        </div>
        <div class="col-md-8 col-sm-12">
          <input type="text" name="companyname" id="name" class="form-control" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="contact number">Contact number:</label>
          </div>
        </div>
        <div class="col-md-9 col-sm-12">
          <input type="text" name="number" id="no" class="form-control" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-12">
          <div class="form-group">
            <label for="address">Address:</label>
          </div>
        </div>
        <div class="col-md-9 col-sm-12">
          <input type="text" name="address" id="add" class="form-control" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-3 col-sm-12 col-xs-12">
          <div class="form-group">
            <label for="Pincode">Pincode:</label>
          </div>
        </div>
        <div class="col-md-3 col-sm-4 col-xs-4">
          <input type="text" name="pincode" id="pin" class="form-control" />
        </div>
        
        
      </div>

      <div class="row">
        <div class="col-3">
          <div class="form-group">
            <label for="state">State:</label>
          </div>
        </div>
        <div class="col-3">
          <input type="text" name="state" id="st" class="form-control" />
        </div>
       
      </div>

        
        <button class="btn btn-primary">update</button>
     
    </form>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.back {
  background-color: rgb(255, 255, 255);
  padding-top: 20px;
  margin-left: 270px;
  margin-right: 30px;
}
.main-form {
  width: 600px;
  margin-left: 30px;
}
.des {
  border: 1px solid rgb(216, 214, 214);
  margin-left: 40px;
}

.text {
  font-weight: bold;
  font-size: 20px;
}

.btn {
  margin-left: 10px;
}
.form-control,
textarea {
  background: #ffffff;
  border: 1.5px solid #657285;
  box-sizing: border-box;
  box-shadow: 4px 4px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
</style>