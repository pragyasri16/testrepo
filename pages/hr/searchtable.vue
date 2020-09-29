<template>
  <div>
    <!-- <b-table>
      <tr>
        <th>Name</th>
        <th>Address</th>
      </tr>
      <tr>
        <td>Shubhang</td>
        <td>Gondia</td>
      </tr>
      <tr>
        <td>Shruti</td>
        <td>Nagpur</td>
      </tr>
    </b-table>-->
    <b-table :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          isActive: true,
          age: 40,
          first_name: 'Dickerson',
          last_name: 'Macdonald',
        },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
      ],
    }
  },
}
</script>

<style scoped>
</style>