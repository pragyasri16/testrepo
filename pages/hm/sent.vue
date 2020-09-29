<template>
  <div class="ab">
    <form class="form-inline space">
      <input
        class="search form-control form-control-sm"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <i class="fas fa-search icon" aria-hidden="true"></i>
    </form>

    <table id="example" class="table border border-dark bg-white responsive">
      <thead>
        <tr>
          <th>No.</th>
          <th>Date</th>
          <th>Job Title</th>
          <th>Department</th>
          <th>Vacancy</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>08/09/2020</td>
          <td>System Architect</td>
          <td>I.T.</td>
          <td>1</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>08/09/2020</td>
          <td>Accountant</td>
          <td>SALES</td>
          <td>5</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>08/09/2020</td>
          <td>Junior Technical Author</td>
          <td>I.T.</td>
          <td>5</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>08/09/2020</td>
          <td>Senior Javascript Developer</td>
          <td>I.T.</td>
          <td>4</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>08/09/2020</td>
          <td>Accountant</td>
          <td>SALES</td>
          <td>5</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>08/09/2020</td>
          <td>Integration Specialist</td>
          <td>I.T.</td>
          <td>2</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>08/09/2020</td>
          <td>Sales Assistant</td>
          <td>SALES</td>
          <td>5</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>08/09/2020</td>
          <td>Integration Specialist</td>
          <td>I.T.</td>
          <td>5</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>08/09/2020</td>
          <td>Javascript Developer</td>
          <td>I.T.</td>
          <td>1</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>08/09/2020</td>
          <td>Software Engineer</td>
          <td>I.T.</td>
          <td>5</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td>08/09/2020</td>
          <td>Office Manager</td>
          <td>MANAGEMENT</td>
          <td>6</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>12</td>
          <td>08/09/2020</td>
          <td>Support Lead</td>
          <td>I.T.</td>
          <td>5</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>13</td>
          <td>08/09/2020</td>
          <td>Regional Director</td>
          <td>MANAGEMENT</td>
          <td>2</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>14</td>
          <td>08/09/2020</td>
          <td>Senior Marketing Designer</td>
          <td>MARKETING</td>
          <td>5</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>15</td>
          <td>08/09/2020</td>
          <td>Regional Director</td>
          <td>MANAGEMENT</td>
          <td>4</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>16</td>
          <td>07/09/2020</td>
          <td>Marketing Designer</td>
          <td>MARKETING</td>
          <td>5</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>17</td>
          <td>07/09/2020</td>
          <td>Chief Financial Officer (CFO)</td>
          <td>SALES</td>
          <td>5</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>18</td>
          <td>07/09/2020</td>
          <td>Systems Administrator</td>
          <td>I.T.</td>
          <td>1</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>19</td>
          <td>07/09/2020</td>
          <td>Software Engineer</td>
          <td>I.T.</td>
          <td>2</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>20</td>
          <td>07/09/2020</td>
          <td>Personnel Lead</td>
          <td>I.T.</td>
          <td>5</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
        <tr>
          <td>21</td>
          <td>07/09/2020</td>
          <td>Development Lead</td>
          <td>I.T.</td>
          <td>5</td>
          <td>
            <button type="button" class="btn" @click.prevent>View Details</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  layout: 'hr',
}
</script>

<style scoped>
table {
  font-size: 18px;
  /* padding-left: 20px; */
}
tbody tr:hover {
  background-color: #f1f3f5;
}
/* .btn {
  background-color: white;
  color: #39d5d5;
  border: 2px solid  #39d5d5;
} */

.btn {
  border: 2px solid #39d5d5;
  background-color: white;
  color: #39d5d5;
  font-weight: 550;
  outline: none;
}

.btn:hover {
  background-color: #39d5d5;
  color: white;
}
.btn:focus {
  box-shadow: none;
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
@media (max-width: 900px) {
  .ab {
    /* width: 50%; */
    margin-left: 90px;
  }
}
</style>