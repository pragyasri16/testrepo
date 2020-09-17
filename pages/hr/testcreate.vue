<template>
<div class="container">
  <h1>Create a new Smart Test</h1>
    <form action class="main-form-sm-md" id="form1">
        <div class="row">
                    <div class="col-3">
                        <div class="form-group">
                            <label for="jobtitle" id="jobname">Job Title :</label>
                        </div>
                    </div>

                    <div class="col-3">
                        <input type="text" name="jobtitle" id="jobtitle" class="form-control" />
                    </div>
                    
                    <div class="col-3">
                        <div class="form-group">
                            <label for="jobtitle" id="timename">Time Duration :</label>
                        </div>
                    </div>

                    <select class="custom-select">
                        <option selected>15 Minutes</option>
                        <option value="1">20 Minutes</option>
                        <option value="2">25 Minutes</option>
                        <option value="3">30 Minutes</option>
                    </select>

                    <div class="col-3">
                        <div class="form-group">
                            <label for="jobtitle" id="skillname">Choose Skills for Test :</label>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="menu">
                            <p id="hmenu1" v-on:click="cardShow">All-Sector</P> 
                            <p id="hmenu2" v-on:click="cardShow2">IT-Sector</P>
                            <p id="hmenu3" v-on:click="cardShow3">Apptitude</P>
                            <p id="hmenu4" v-on:click="cardShow4">English</P>
                            <p id="hmenu5" v-on:click="cardShow5">Reasoning</P>  
                        </div>

                        <div class="container-fluid">
                                <div class="card" v-if="contView">
                                    <div class="card-body bg-primary text-white">Basic card 1</div>
                                </div>
                                <div class="card" v-if="contView2">
                                    <div class="card-body bg-primary text-white">Basic card 2</div>
                                </div>
                                <div class="card" v-if="contView3">
                                    <div class="card-body bg-primary text-white">Basic card 3</div>
                                </div>
                                <div class="card" v-if="contView4">
                                    <div class="card-body bg-primary text-white">Basic card 4</div>
                                </div>
                                <div class="card" v-if="contView5">
                                    <div class="card-body bg-primary text-white">Basic card 5</div>
                                </div>
                        </div>
                    </div>
                    
                    
        </div>
                    <button type="button" class="btn1">Archieve</button>
                    <button type="button" class="btn2">Custom Test</button>
                    <button type="button" class="btn3">Reset</button>
                    <button type="button" class="btn4">Genrate Test</button>
    </form>
</div>
</template>

<script>
    export default {
        layout:'hr',

        data(){
            return{
                contView: false,
                contView2: false,
                contView3: false,
                contView4: false,
                contView5: false
            };
        },

        methods:{
                   cardShow(){
                           this.contView = true;
                   },
                   cardShow2(){
                           this.contView2 = true;
                   },
                   cardShow3(){
                           this.contView3 = true;
                   },
                   cardShow4(){
                           this.contView4 = true;
                   },
                   cardShow5(){
                           this.contView5 = true;
                   }
                }
        };
 
</script>

<style scoped>
.container{
    background: lightblue;
    width:1080px;
    height: auto;
    margin-left: 255px;
}
.container h1{
font-family: IBM Plex Sans;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 36px;

}

#form1{
    height: 600px;
    background: #ffffff;
}

#jobname{
  font-weight: bold;
  font-size: 20px;
  padding-top: 20px;
  margin-left: -130px;
}

.form-control{
    width: 400px;
    margin-top: 20px;
    margin-left: -160px;
}

#timename{
  font-weight: bold;
  font-size: 20px;
  padding-top: 20px;
  margin-left: 90px;
}

.custom-select{
    width: 150px;
    height: 40px;
    margin-top: 20px;
}

#skillname{
    font-weight: bold;
    font-size: 20px;
    padding-top: 20px;
    margin-left: 0px;
}

.menu{
    margin-top: 25px;
    padding-left: px;
    display: flex;
}

#hmenu1{
    cursor: pointer;
    font-size: 20px;
    margin-left: 0px;
    margin-top: px;
    position: relative;
}
#hmenu2{
    cursor: pointer;
    font-size: 20px;
    margin-left: 80px;
    margin-top: px;
    position: relative;
    
}
#hmenu3{
    cursor: pointer;
    font-size: 20px;
    margin-left: 80px;
    margin-top: px;
    position: relative;
}
#hmenu4{
   cursor: pointer;
    font-size: 20px;
    margin-left: 80px;
    margin-top: px;
    position: relative;
}

#hmenu5{
    cursor: pointer;
    font-size: 20px;
    margin-left: 80px;
    margin-top: px;
    position: relative;
}
    
.card{
    width: 1000px;
   height: 250px;
   margin-left: -260px;
   margin-bottom: 20px
}   

.btn1{
    width:150px;
    height: 30px;
    margin-top: 300px;
    margin-left: 0px;
    margin-bottom: 20px;
    background: #4EABE6;
    border: 1px solid #4EABE6;
    border-radius: 10px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
}

.btn2{
    width:150px;
    height: 30px;
    margin-top: 500px;
    margin-left: 100px;
    margin-bottom: 20px;
    background: #4EABE6;
    border: 1px solid #4EABE6;
    border-radius: 10px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
}

.btn3{
    width:150px;
    height: 30px;
    margin-top: 500px;
    margin-left: 100px;
    margin-bottom: 20px;
    background: #4EABE6;
    border: 1px solid #4EABE6;
    border-radius: 10px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
}

.btn4{
    width:150px;
    height: 30px;
    margin-top: 500px;
    margin-left: 100px;
    margin-bottom: 20px;
    background: #4EABE6;
    border: 1px solid #4EABE6;
    border-radius: 10px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
}
</style>