<template>
  <div>
   <h3 class="title is-3">Score - {{ score }}</h3>
     <!-- {{ tick }}{{ radio }} -->

    <div v-for="(item, ii) in data" :key="ii" class="column is-one-third mx-auto">
      <h4 class="title is-4 ">{{ item.que }}</h4>

      <ul>
        <li  v-for="(op, i) in item.options" :key="i">
          <!-- <b-radio type="is-danger" v-model="tick[item.id]" :name="item.id" :native-value="op" class="option">
           <b-icon icon="close"></b-icon> <span>{{ op }}</span>
          </b-radio> -->
          <b-radio-button v-model="tick[item.id]"
                :native-value="op"
                type="is-primary" :name="item.id" class="abc " >
                
                <span  >{{ op }}</span>
            </b-radio-button > 
        </li>
         
      </ul>
    </div>
    <button class="btn btn-primary ml-4 mb-4" @click.prevent="submit">
      Submit
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 0,
      tick: [],
      data: [
        {
          id: '0',
          que: 'What is full form of HTML ?',
          options: [
            'ferergrtg',
            'dfrgergre',
            'fervev',
            'Hyper Text Markup Language',
          ],
          ans: 'Hyper Text Markup Language',
        },
        {
          id: '1',
          que: 'What is full form of SEO ?',
          options: [
            'ferergrtg',
            'Search Engine Optimization',
            'fervev',
            'sdcsdvsdfvd',
          ],
          ans: 'Search Engine Optimization',
        },
        {
          id: '2',
          que: 'What is full form of JS ?',
          options: ['defwefwef', 'Javascript', 'ewrwerw', 'kjlk'],
          ans: 'Javascript',
        },
        {
          id: '3',
          que: 'Who make iPhones ?',
          options: ['ferergrtg', 'feekrnfjkernfe', 'fervev', 'Apple'],
          ans: 'Apple',
        },
      ],
    }
  },
  methods: {
    submit() {
      for (var i = 0; i < this.data.length; i++) {
        if (this.tick[i] == this.data[i].ans) {
          this.score += 10
        }
      }
    },
  },
}
</script>

<style scoped>
.abc{
  
border-radius: 100px;
}
.option {
  display: block;
  width: 300px;
  background-color: #fff;
  
  border-radius: 100px;
  border: 2px solid transparent;
  transition: 0.4s all;
}

.option:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid #341f97;
  color: #341f97;
}
.option.active {
  background-color: #341f97;
  color: #fff;
}
/* #radio {
  display: none;
} */
</style>