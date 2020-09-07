<template>
  <div>
    <form class="form-inline space">
      <input
        class="search form-control form-control-sm"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <i class="fas fa-search icon" aria-hidden="true"></i>
    </form>
    <div class="table-responsive">
      <!-- <table class="table table-hover bg-white text-dark">
        <thead>
          <tr class="table-light">
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>-->

      <table class="table" width="500px">
        <tr>
          <th>Check</th>
          <th>Name</th>
          <th>Date</th>
          <th>Job Title</th>
          <th>Department</th>
          <th>Vacancy</th>
        </tr>
        <tr>
          <td>Box</td>
          <td>1</td>
          <td>26/08/2020</td>
          <td>Java Sr. Dev</td>
          <td>I.T.</td>
          <td>1</td>
          <td>Button</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'hr',
}
</script>

<style scoped>
.table {
  margin-left: 250px;
}

.space {
  margin-left: 250px;
}
.icon {
  padding-left: 10px;
}

::-webkit-input-placeholder {
  text-align: center;
}

.search {
  width: 200px;
}

.fas {
  color: #0880ae;
}
</style>