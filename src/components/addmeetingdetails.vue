<template>
  <div class="addmeetingdetails">
    <div class="container">
    <div class="row">
       <div class="col-md-12 add-form">
         <div class="addmeeting-button">Add meeting name and select options then add one or more meetings to this location
         <button class="btn btn-success" @click="addMeeting">Add Meeting</button>
         </div> 
      <form class="form-inline">
        <div class="form-group">
            <label class="control-label">Group Name</label>  
            <div class="inputGroupContainer">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
                    <input type="text" name="name"   v-model="name" v-validate="'required|alpha|min:3'" class="form-control" placeholder="Name of Meeting" />
                    <span v-if="name_msg" class=" error text-danger">{{ name_msg }}</span>
                </div>
                  <!-- <span v-show="errors.has('name')" class=" error text-danger">{{ errors.first('name') }}</span> -->
            </div>
        </div>

        <!-- day group  -->
        <div class="form-group">
            <label class="control-label">Day</label>  
            <div class="inputGroupContainer">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-bell"></i></span>
                    <select   v-model="day" name="day" class="form-control" >
                        <option value="0">Sunday</option><option selected value="1">Monday</option>
                        <option value="2">Tuesday</option><option value="3">Wednesday</option>
                        <option value="4">Thursday</option><option value="5">Friday</option> <option value="6">Saturday</option>
                    </select>
                </div>
            </div>
        </div>
        <!-- time group  -->
        <div class="form-group">
            <label class="control-label">Time</label>  
            <div class="inputGroupContainer">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-bell"></i></span>
                    <select type="text"  v-model="time" id="timeSelect" name='timeSelect' class="form-control">
                        <option v-for="n in items" :value="n">{{ n }}</option>
                    </select>
                </div>
            </div>
        </div>
        <!-- type group  -->
        <div class="form-group">
            <label class="control-label">Type</label>  
            <div class="inputGroupContainer">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-bell"></i></span>
                    <span class="radio-group">
                    <label class="radio-inline"><input type="radio" value="Open" v-model="type">Open Meeting</label>
                    
                    <label class="radio-inline"><input type="radio" value="Closed" v-model="type">Closed Meeting</label>
                    </span>
                    <!-- <select v-model="newMeeting.type" name="meetingType" class="form-control">
                        <option>Open</option>
                        <option>Closed</option>

                    </select> -->
                </div>
            </div>
        </div>
        <!-- gender group  -->
        <div class="form-group">
            <label class="control-label">Gender</label>  
            <div class="inputGroupContainer">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-bell"></i></span>
                
                    <label class="radio-inline"><input type="radio" value="Men/Women" v-model="gender">Men/Women</label>
                    
                    <label class="radio-inline"><input type="radio" value="Men" v-model="gender">Men Only</label>
                    
                    <label class="radio-inline"><input type="radio" value="Women" v-model="gender">Women Only</label>
                    <!-- <select   v-model="newMeeting.gender" name="gender" class="form-control">
                    <label for="two">Women</label>
                    <select   v-model="newMeeting.gender" name="gender" class="form-control">
                        <option>Men/Women</option>
                        <option>Men</option>
                        <option>Women</option>
                    </select> -->
                </div>
            </div>
        </div>
            <!-- format group  -->
        <div class="form-group">
            <label class="control-label">Format</label>  
            <div class="inputGroupContainer">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-bell"></i></span>
                    <select   v-model="format" name="format" class="form-control" >
                        <!-- <option selected hidden>Format</option> -->
                        <option>Big Book</option>
                        <option>Step</option>
                        <option>Topic</option>
                        <option>Speaker</option>
                        <option>Bucket Meeting</option>
                        <option>Callup Bucket Meeting</option>

                    </select>
                </div>
            </div>
        </div>
    </form>
       </div>

        <div class="added-list col-md-12">
            <div class="added-list-title">
               {{meetingsAdded.length}} Meetings to add 
            </div>
        <table class="table table-striped table-bordered table-condensed">
            <thead>
            <tr>
                <th>Meeting Name</th><th>Day</th><th>Time</th><th>Type</th><th>Gender</th><th>Format</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="meeting in meetingsAdded">
                <td>{{meeting.name}}</td><td>{{meeting.day | dayname}}</td><td>{{meeting.time}}</td><td>{{meeting.type}}</td><td>{{meeting.gender}}</td><td>{{meeting.format}}</td>
            </tr>
            </tbody>
        </table>
        </div>
                        
      </div><!-- /.col-md-12 -->

   
      </div><!-- /.row -->
    </div><!-- /.container -->
  </div> <!--  end id contact -->
</template>

<script>

export default {
  name: 'addmeetingdetails',
  data () {
    return {
      msg: 'Add one or more meetings to this location',
      name_msg: '',
  //  newMeeting: {
        name: '',
        day: '1',
        time:'7:00 PM',
        type: 'Open',
        gender: 'Men/Women',
        format: 'Big Book',
     // },
      meetingsAdded: []
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    dayname: function(value){
      var daysIndex = ['Sun','Mon', 'Tue','Wed','Thu', 'Fri', 'Sat'];
      return daysIndex[+value]
    }
  },
  watch: {
    name(value){
        console.log(value + ' length= ' + value.length)
        if (value.length < 3){
            this.name_msg = "name must be > 2"
            console.log(value + '(len < 3) length= ' + value.length)
        } else {
            console.log(value + ' (lengh ok) length= ' + value.length)
            this.name_msg = ''
        }
    }
  },
  methods: {
     addMeeting: function(){
         if (this.name.length < 3){
             debugger;
             this.name_msg = "Please add meeting name..."
             return;
         }
       this.meetingsAdded.push({
         name: this.name,
         day: this.day,
         time: this.time,
         type: this.type,
         gender: this.gender,
         format: this.format
      })
       this.name = ""
     }
  },
  computed: {
  items: function(){
  //alert("created")
  var items = []
   var hours, minutes, ampm;
    for(var i = (1 * 60); i <= (24 * 60); i += 15){
        hours = Math.floor(i / 60);
        minutes = i % 60;
        if (minutes < 10){
            minutes = '0' + minutes; // adding leading zero
        }
        ampm = hours % 24 < 12 ? 'AM' : 'PM';
        hours = hours % 12;
        if (hours === 0){
            hours = 12;
        }
      items.push(hours + ':' + minutes + ' ' + ampm);
      }
      return items;
  }
  },
  mounted: function () {
    // this.$nextTick(() => {
    //     $(".contact").hide()
    //      $(".contact").fadeIn('slow')
       
    // }

    // )
  }
}
</script>
<style scoped>
    .add-form {border: 1px solid black; border-radius: 5px; padding: 10px;}
  .container  { margin-top: 20px; padding: 20px; border: 1px solid black; background: #aaa;}
  .radio-group {padding: 0 10px;}
  .input-group { background: white;}
  .added-list table {margin: 20px 0;}
  .addmeeting-button {background: #333; color: white; border: 1px solid #888; font-size: 20px;padding: 15px; 
  margin: 0 5px 15px 5px;}
  /* .input-group span {
    font-size: .8em;
    color: #FF3400;
} */
</style>