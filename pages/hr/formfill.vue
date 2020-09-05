<template>
  <div class="text">
    <form action class="main-form">
      <div class="row">
        <div class="col-3">
          <div class="form-group">
            <label for="jobtitle">Job Title:</label>
          </div>
        </div>
        <div class="col-9">
          <input type="text" name="jobtitle" id="jobtitle" class="form-control" />
        </div>
      </div>

      <div class="row">
        <div class="col-3">
          <div class="form-group">
            <label for="department">Department:</label>
          </div>
        </div>
        <div class="col-9">
          <input type="text" name="department" id="department" class="form-control" />
        </div>
      </div>

      <div class="row">
        <div class="col-3">
          <div class="form-group">
            <label for="salary">Salary:</label>
          </div>
        </div>
        <div class="col-3">
          <input type="text" name="salary-1" id="salary-1" class="form-control" />
        </div>
        <div class="col-1">to</div>
        <div class="col-3">
          <input type="text" name="salary-2" id="salary-2" class="form-control" />
        </div>
        <div class="col-0">Annual</div>
      </div>

      <div class="row">
        <div class="col-3">
          <div class="form-group">
            <label for="experience">Experience:</label>
          </div>
        </div>
        <div class="col-3">
          <input type="text" name="experience" id="experience" class="form-control" />
        </div>
        <div class="col-1">Yrs</div>
      </div>

      <div class="row">
        <div class="col-3">
          <div class="form-group">
            <label for="duration">Duration:</label>
          </div>
        </div>
        <div class="col-3">
          <input type="text" name="date-1" id="date-1" class="form-control" />
        </div>
        <div class="col-1">to</div>
        <div class="col-3">
          <input type="text" name="date-2" id="date-2" class="form-control" />
        </div>
      </div>

      <div class="row">
        <div class="col-3">
          <div class="form-group">
            <label for="description">Description:</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-9">
          <div class="form-group">
            <textarea name="description" id="description" cols="57" rows="5" class="des"></textarea>
          </div>
        </div>
      </div>

      <button class="btn btn-primary">Add Test</button>
      <button class="btn btn-primary">Promote</button>
    </form>
  </div>
</template>

<script>
export default {
    layout: 'hr'
}
</script>

<style scoped>
.main-form {
  width: 550px;
  margin-left: 300px;
}
.des {
  border: 1px solid rgb(216, 214, 214);
}
.text {
  font-weight: bold;
  font-size: 20px;
}
</style>
