<template>
    <div style="background: #f1f3f5">
        <div class="container-sm" id="container">
           <h2>Create a new Smart Test</h2>
           <hr id="hline1"> 

            <form action class="main-form">
                <div class="row">
                    <div class="col-3">
                        <div class="form-group">
                            <label for="jobtitle" id="jobname">Job Title:</label>
                        </div>
                    </div>
                    <div class="col-3">
                        <input type="text" name="jobtitle" id="jobtitle" class="form-control" />
                    </div>
                    
                    <div class="col-3">
                        <div class="form-group">
                            <label for="jobtitle" id="timename">Time Duration:</label>
                        </div>
                    </div>
                    <select class="custom-select">
                        <option selected>15 Minutes</option>
                        <option value="1">20 Minutes</option>
                        <option value="2">25 Minutes</option>
                        <option value="3">30 Minutes</option>
                    </select>
                </div>

                <div class="col-3">
                    <div class="form-group">
                        <label for="jobtitle" id="skillname">Choose Skills for Test:</label>
                    </div>
                </div>
                <br>
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group" role="group" aria-label="1">
                            <!-- <button type="button" class="btn btn-secondary" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">1</button>
                            <button type="button" class="btn btn-secondary" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">2</button>
                            <button type="button" class="btn btn-secondary" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">3</button>
                            <button type="button" class="btn btn-secondary" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">4</button>
                            <button type="button" class="btn btn-secondary" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">5</button>
                             -->
                        </div>
                        <div class="btn-group" role="group" aria-label="Third group">
                            <button type="button" class="btn btn-secondary" data-toggle="collapse" data-target="#collapseExample">All Sector</button>
                        </div>

                        <div class="btn-group" role="group" aria-label="Third group">
                            <button type="button" class="btn btn-secondary" data-toggle="collapse" data-target="#collapseExample">IT Sector</button>
                        </div>

                        <div class="btn-group" role="group" aria-label="Third group">
                            <button type="button" class="btn btn-secondary" data-toggle="collapse" data-target="#collapseExample"></button>
                        </div>

                        <div class="btn-group" role="group" aria-label="Third group">
                            <button type="button" class="btn btn-secondary" data-toggle="collapse" data-target="#collapseExample">8</button>
                        </div>

                        <div class="btn-group" role="group" aria-label="Third group">
                            <button type="button" class="btn btn-secondary" data-toggle="collapse" data-target="#collapseExample">8</button>
                        </div>
                        
                    </div>
                    
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="">Option 1
                                </label>

                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="">Option 1
                                </label>

                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="">Option 1
                                </label>

                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="">Option 1
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" @click="toggleDropdown($event)", data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Choose Skills
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">All Sector</a>
                            <a class="dropdown-item" href="#">IT Sector</a>
                            <a class="dropdown-item" href="#">Apptitude</a>
                            <a class="dropdown-item" href="#">English</a>
                        </div>
                            
                    </div> -->
                
                      
            </form>
                    <button type="button" class="btn1">Archieve</button>
                    <button type="button" class="btn1">Custom Test</button>
                    <button type="button" class="btn1">Reset</button>
                    <button type="button" class="btn1">Genrate Test</button>
        </div>      
    </div>
</template>

<script>
    export default {
        layout:'hr'
        
    // methods: {
    //         toggleDropdown(event) {
    //             event.currentTarget.classList.toggle('is-active')
    //         }
    //     }
 }
</script>

<style scoped>
#container{
    width: 1080px;
    height: 500px;
    margin-left: 260px;
    margin-top: 50px;
    /* margin-top: px; */
    float: center;
    background: #ffffff;
}

h2{
font-family: IBM Plex Sans;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 36px;
/* or 75% */
text-align: center;
color: #000000;
}

#hline1{
position: absolute;
width: 1078px;
height: 0px;
left: 260px;
top: 150px;
border: 1px solid #39D5D5;
}

#jobname{
  font-weight: bold;
  font-size: 20px;
  padding-top: 20px;
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
    margin-left: -15px;
}

.btn{
    width:150px;
    height: 30px;
    margin-top: -100px;
    margin-left: 220px;
    background: #f1f3f5;
    color:#000000;
     
}

.dropdown-menu{
background: #ffffff;
}

.dropdown-item{
    /* box-sizing: border-box;
    background: #39D5D5; */
}


.btn1{
    width:150px;
    height: 30px;
    margin-top: 250px;
    margin-left: 80px;
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

.btn-toolbar{
    padding-top: 80px;
    padding-left: 200px;
    float: center;

}

.btn-group{
   margin-left: -200px;

   padding-left: 5px;
}

.btn btn-secondary{
    padding-top: 125px;
}
</style>