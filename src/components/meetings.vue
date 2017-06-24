<template>
  <div class="meetings">
   <div class="aaflex-container">
   <div class="aaflex-list item">
    <h3>Miles found: {{ filteredMeetings.length }}</h3>
    
    <button @click="mileMax = 2" :class="{ active: mileMax == 2 }">Mile 2</button>
    <button @click="mileMax = 5" :class="{ active: mileMax == 5 }">Mile 5</button>
    <button @click="mileMax = 10" :class="{ active: mileMax == 10 }">Mile 10</button>
    <button @click="mileMax = 20" :class="{ active: mileMax == 20 }">Mile 20</button> <br>
    <button @click="day=0" :class="{ active: day == 0 }">Sun</button>
    <button @click="day=1" :class="{ active: day == 1 }">Mon</button>
    <button @click="day=2" :class="{ active: day == 2 }">Tue</button>
    <button @click="day=3" :class="{ active: day == 3 }">Wed</button>
    <button @click="day=4" :class="{ active: day == 4 }">Thr</button>
    <button @click="day=5" :class="{ active: day == 5 }">Fri</button>
    <button @click="day=6" :class="{ active: day == 6 }">Sat</button>
    <button @click="addMarkers">AddMarker</button>
   <ol>
            <li
             v-for="(a, index) in filteredMeetings" 
             class='acct-todo-item' 
              v-bind:data-key='a.name'
              > {{ a.name }}
               <!--<router-link to="{{a.slug"}}>{{ a.name }}</router-link>-->
               </li>
         </ol>
   </div>
   <div class="aaflex-map item">
     <google-map></google-map>
   </div>
   </div>
    
  </div>
</template>

<script>
  import GoogleMap from '@/components/googlemaps'
    import { Bus } from '../main'
export default {
  name: 'meetings',
  props: ["meetings"],
  components: {
    "google-map": GoogleMap
  },
  data () {
    return {
      msg: 'Welcome to meetings',
      mileMax: 2,
      day: 0,
       lat: 44.9169,
      lng: -93.4450,
      home: {lat:44.9270729,lng:-93.4479148},
      isActive: true
    }
  },
  methods: {
    mileLimit: function(m){
     //debugger;
      return (this.mileMax > this.distance(this.lat,this.lng,m.loc.coordinates[1],m.loc.coordinates[0])) 
    },
    addMarkers: function(){
      debugger;
     // Bus.$emit('eventFired',this.msg);
     // this.msg = 'I fired an event.'
    },
     daycut: function(m){
     //debugger;
      return (this.day == m.day) 
    },
    distance: function(lat1, lon1, lat2, lon2, unit) {
      var radlat1 = Math.PI * lat1 / 180;
      var radlat2 = Math.PI * lat2 / 180;
      var radlon1 = Math.PI * lon1 / 180;
      var radlon2 = Math.PI * lon2 / 180;
      var theta = lon1 - lon2;
      var radtheta = Math.PI * theta / 180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit === 'K') { dist = dist * 1.609344 };
      if (unit === 'N') { dist = dist * 0.8684 };
      return dist;
    },
    sendMarkers:function(newMeetings){
      console.log(".......................emitting new meetings day filter= " + newMeetings.length)
      var n =newMeetings;
      Bus.$emit('eventFired',n);
    }
  },
  computed: {
    filteredMeetings: function(){
      var firstcut = this.meetings.filter(this.mileLimit)
      console.log("mile filter= " + firstcut.length)
    //  debugger;
       var newMeetings = firstcut.filter(this.daycut)
        
        this.sendMarkers(newMeetings);
        
     return newMeetings;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.meetings { width: 100wh; height: 100vh; background: #ccc;
padding: 0; margin: 0;}
.aaflex-container {display: flex; align-content: flex-start; width: 100%}
.aaflex-list { flex: 0 0 300px; background: yellow; overflow: scroll;}
.aaflex-map { flex:1 0 auto; background: #6cffbc;}
.item {height: 90vh;}
.active {background: #6cffbc;}

 #accts-todo-container { display: flex; justify-content: space-around;}
        .accts-list { padding: 10px; border: 1px solid grey; flex: 1; background: #666;}
        .accts-list h3 {border-bottom: 1px solid red; margin: 5px; background: #aaa; text-align: center;}
        .acct-todo-item { padding: 5px; border: 1px solid grey; margin: 5px; background: #fff; text-align: left;}
        .accts-todo-header {padding: 5px; font-size: 2.0em; background: #ddd; display: flex;}
        #accts-todo-date {padding: 5px; font-size: 0.6em; flex: 0 0 200px; color: red;}
        .due {background:#fd9d9d;}
</style>
