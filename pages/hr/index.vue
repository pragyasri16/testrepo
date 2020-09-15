<template>
  <div>
    <table id="example" class="display" style="width:100%">
      <thead>
        <tr>
          <th>No.</th>
          <th>Date</th>
          <th>Job Title</th>
          <th>Department</th>
          <th>Vacancy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>08/09/2020</td>
          <td>System Architect</td>
          <td>I.T.</td>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>08/09/2020</td>
          <td>Accountant</td>
          <td>SALES</td>
          <td>5</td>
        </tr>
        <tr>
          <td>3</td>
          <td>08/09/2020</td>
          <td>Junior Technical Author</td>
          <td>I.T.</td>
          <td>5</td>
        </tr>
        <tr>
          <td>4</td>
          <td>08/09/2020</td>
          <td>Senior Javascript Developer</td>
          <td>I.T.</td>
          <td>4</td>
        </tr>
        <tr>
          <td>5</td>
          <td>08/09/2020</td>
          <td>Accountant</td>
          <td>SALES</td>
          <td>5</td>
        </tr>
        <tr>
          <td>6</td>
          <td>08/09/2020</td>
          <td>Integration Specialist</td>
          <td>I.T.</td>
          <td>2</td>
        </tr>
        <tr>
          <td>7</td>
          <td>08/09/2020</td>
          <td>Sales Assistant</td>
          <td>SALES</td>
          <td>5</td>
        </tr>
        <tr>
          <td>8</td>
          <td>08/09/2020</td>
          <td>Integration Specialist</td>
          <td>I.T.</td>
          <td>5</td>
        </tr>
        <tr>
          <td>9</td>
          <td>08/09/2020</td>
          <td>Javascript Developer</td>
          <td>I.T.</td>
          <td>1</td>
        </tr>
        <tr>
          <td>10</td>
          <td>08/09/2020</td>
          <td>Software Engineer</td>
          <td>I.T.</td>
          <td>5</td>
        </tr>
        <tr>
          <td>11</td>
          <td>08/09/2020</td>
          <td>Office Manager</td>
          <td>MANAGEMENT</td>
          <td>6</td>
        </tr>
        <tr>
          <td>12</td>
          <td>08/09/2020</td>
          <td>Support Lead</td>
          <td>I.T.</td>
          <td>5</td>
        </tr>
        <tr>
          <td>13</td>
          <td>08/09/2020</td>
          <td>Regional Director</td>
          <td>MANAGEMENT</td>
          <td>2</td>
        </tr>
        <tr>
          <td>14</td>
          <td>08/09/2020</td>
          <td>Senior Marketing Designer</td>
          <td>MARKETING</td>
          <td>5</td>
        </tr>
        <tr>
          <td>15</td>
          <td>08/09/2020</td>
          <td>Regional Director</td>
          <td>MANAGEMENT</td>
          <td>4</td>
        </tr>
        <tr>
          <td>16</td>
          <td>07/09/2020</td>
          <td>Marketing Designer</td>
          <td>MARKETING</td>
          <td>5</td>
        </tr>
        <tr>
          <td>17</td>
          <td>07/09/2020</td>
          <td>Chief Financial Officer (CFO)</td>
          <td>SALES</td>
          <td>5</td>
        </tr>
        <tr>
          <td>18</td>
          <td>07/09/2020</td>
          <td>Systems Administrator</td>
          <td>I.T.</td>
          <td>1</td>
        </tr>
        <tr>
          <td>19</td>
          <td>07/09/2020</td>
          <td>Software Engineer</td>
          <td>I.T.</td>
          <td>2</td>
        </tr>
        <tr>
          <td>20</td>
          <td>07/09/2020</td>
          <td>Personnel Lead</td>
          <td>I.T.</td>
          <td>5</td>
        </tr>
        <tr>
          <td>21</td>
          <td>07/09/2020</td>
          <td>Development Lead</td>
          <td>I.T.</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  mounted() {
    $('#example').DataTable({
      columnDefs: [
        {
          targets: [0],
          orderData: [0, 1],
        },
        {
          targets: [1],
          orderData: [1, 0],
        },
        {
          targets: [4],
          orderData: [4, 0],
        },
      ],
    })
  },
  layout: 'hr',
}
</script>

<style scoped>
@import url('https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css');

* {
  margin-left: 250px;
}
</style>
