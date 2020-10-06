<template>
  <div>
    <!-- class="form-row" -->

    <div
      class="form-group"
      v-for="(item, i) in form"
      :key="i"
      :class="item.class"
    >
      <label>{{ item.label }}</label>
      <input
        :type="item.type"
        class="form-control"
        :id="item.id"
        v-model="arr[item.id]"
        @input="onInput"
      />
    </div>
    <br />

    <vue-editor class="editor col-5" v-model="arr[desc]" />
    <div class="col-5 text-right pt-3"><slot name="allbutton"></slot></div>
    <br /><br />{{ userid }}
  </div>
</template>

<script>
let VueEditor
if (process.client) {
  VueEditor = require('vue2-editor').VueEditor
}
export default {
  components: { VueEditor },
  data() {
    return {
      arr: [],
      userid: '',
    }
  },
  props: {
    form: {
      type: Array,
      // default: null,
    },
  },

  methods: {
    onInput() {
      this.$emit('getFormData', Object.assign({}, this.arr))
    },
  },
  mounted() {
    this.userid = localStorage.userid
  },
}
</script>
<style  scoped>
* {
  margin: auto;
  /* background-color: white; */
}

/* .form-group {
  width: 550px;
} */

.text {
  font-weight: bold;
  font-size: 20px;
  padding-top: 15px;
  color: #001737;
}

.form-control {
  background: #ffffff;
  border: 1.5px solid #657285;
  box-sizing: border-box;
  box-shadow: 4px 4px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.editor {
  border: 1.5px solid #657285;
  padding: 0;
  /* box-sizing: border-box; */
  box-shadow: 4px 4px 5px 1px rgba(0, 0, 0, 0.2);
  /* border-radius: 10px; */
}
</style>


login(){
  if(this.email == localStorage.email && this.pass == localStorage.pass){
    this.push
  }
  if(this.email == localStorage.adminemail && this.pass == localStorage.adminpass)
  this.$rous
  
}