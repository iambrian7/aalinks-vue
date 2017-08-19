<template>
  <div class="meetinglist">
  <h1>{{ msg}}</h1>
  <h3>Base meetings: {{meetings.length}}</h3>
  <button @click='fixIndex'>Fix Index</button>
  <label>Choose Day</label><input v-model="query" placeholder="edit me">
  <div class="container">
    <div class="my-List">
         <!-- <div class="meeting-header" v-for="m in meetings.slice(0,3)">  -->
      <div class="meeting-header" v-for="m in filteredIndex">
        <div class="panel panel-primary">
          <div class="panel-heading">  Name: {{meetingObj[m].name}}</div>
            <div class="panel-body">
               {{ meetingObj[m].address}} {{ meetingObj[m].day | dayname}} 
              <!-- <pre>{{m}}</pre> -->
            </div>
        </div>
      </div>
    </div><!-- end my-list-->
       <!-- <p v-for="m in filteredIndex">{{meetingObj[m].name}}</p>  -->
  </div> <!-- end container -->
  </div>
</template>

<script>
export default {
  name: 'MeetingList',
  props: ["meetings"],
  data () {
    return {
      msg: 'Welcome to Meeting List',
      query: "",
      meetingObj: {},
      meetingIndex: []
    }
  }, 
  methods: {
    fixIndex: function(){
     // debugger;
      self = this;
      var indx = []
      this.meetings.forEach(function(m){
        if ((self.query == m.day) && (indx.length < 5)){
          indx.push(m._id)
        }
         
      })
      this.meetingIndex = indx;

    }
  },
  computed: {
    filteredIndex: function(){
      self = this;
      var indx = []
      this.meetings.forEach(function(m){
        if ((self.query == m.day) && (indx.length < 5)){
          indx.push(m._id)
        }
         
      })
    //  debugger
      this.meetingIndex = indx;
      return this.meetingIndex;
    }
    // filteredObj: function(){
    //   var index = this.meetingIndex[0]
    //   return this.meetingObj[index]
    // }
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
  created: function(){
   // debugger;
   console.log("meetinglist created")
    self = this;
    this.meetings.forEach(function(m){
      self.meetingObj[m._id] = m;  
      })
  },
    updated: function(){
      console.log("meetinglist updated")
   // debugger;
    self = this;
    this.meetings.forEach(function(m){
      self.meetingObj[m._id] = m;  
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.class {
   
    background-color: #cccccc;
    width: 100wh;
    height: 100vh;
}
.meeting-header {background: #ccc;}
p {background: #ccc;}
</style>
