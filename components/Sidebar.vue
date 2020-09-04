<template>
    <div class="wrapper">
        <div class="sidebar">
            <ul>
                <li><nuxt-link to='/' class="db">Dashboard</nuxt-link></li>
                <li><nuxt-link to='/' class="dbc">Publish</nuxt-link></li>
                <li><nuxt-link to='/' class="dbc">Test</nuxt-link></li>
                <li><nuxt-link to='/' class="dbc">Question Set</nuxt-link></li>
                <li><nuxt-link to='/' class="dbc">Analytics</nuxt-link></li>
                <li><nuxt-link to='/' class="dbc">Sent</nuxt-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.wrapper{
  display: flex;
  position: fixed;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

.sidebar{
  width: 200px;
  height: 100%;
  padding: 30px 0px;
  position: fixed;
  background: rgb(25, 39, 230);
  border-right: solid 5px #E9E9E9;
}


.db{
  color: #39D5D5;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 36px;
  padding: 15px;
}

.dbc{
  color: #001737;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 36px;
  padding: 15px;
}

li:hover{
  background-color: #E9E9E9;  
}
</style>