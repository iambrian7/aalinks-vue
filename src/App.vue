<template>
  <div id="app">
    <aalinks-nav></aalinks-nav>
    <button v-if="!locationFound" @click="mylocation">Find your location</button>
    <keep-alive include="addmeeting">
       <router-view v-bind:meetings='meetings' v-bind:lat='lat' v-bind:lng='lng'></router-view>
    </keep-alive>
  </div>
</template>

<script>




import Navigate from '@/components/navigation'
export default {
  name: 'app',
  components: {
    "aalinks-nav": Navigate
  },
   data () {
    return {
      apimessage: 'Welcome to Your Vue.js no server yet .............',
      lat: 44.9169,
      lng: -93.4450,
      meetings: [],
      meeting_list: {},
      meeting_list_index: [],
      locationFound: false
    }
  },
  methods: {
    mylocation: function(){
      var self = this;

      var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;

      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      self.locationFound = true;
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
    },
    testGeo: function(){
      var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;

      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
    },
    geoLocate: function(){
                var startPos;
                var self = this;
        console.log("geoLocate attempt")

        // if ("geolocation" in navigator) {
        //   /* geolocation is available */
        //   console.log("geoLocate success......")
        //   debugger
        //   this.fetchMeetings();
        // } else {
        //   /* geolocation IS NOT available */
        //   console.log("failed..........")
        //     this.fetchMeetings();
        // }


                var geoSuccess = function(position) {
                 //   debugger;
                 //  Aalinks.coords = position.coords;
                    self.lat = position.coords.latitude;
                    self.lng = position.coords.longitude;
                    //  startPos = position;
                    // document.getElementById('startLat').innerHTML = startPos.coords.latitude;
                    //  document.getElementById('startLon').innerHTML = startPos.coords.longitude;
                    //  $(document).trigger('aalinks/localMeetings')
                    console.log("position coords = " + self.lat + ":" + self.lng)
                   // console.log("geoSuccess " + JSON.stringify(Aalinks.options, null, 4))
                  //  $.publish('aalinks/localMeetings');
                    self.fetchMeetings();



          

                };
                var geoError = function(error) {
                //  debugger
                    console.log('Error occurred. Error code: ' + error.code);
                    self.lat = 44.9169
                    self.lng = -93.4450
                    self.fetchMeetings();

                    // error.code can be:
                    //   0: unknown error
                    //   1: permission denied
                    //   2: position unavailable (error response from location provider)
                    //   3: timed out
                };
                console.log('geoLocate...................');
              //  debugger
                navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

            },
    fetchMeetings(){
      var self = this;
      debugger
      axios.get("https://moonstrider.com/meetings/?miles=40")
      // axios.get("http://localhost:8081/api")
      .then(function(res) {
   //           debugger;  
             // self.ameetings = res.data;  
            // console.log("data api= " + res.data)
          //   debugger;
             self.meetings = res.data
            // $route.meetings.res.data
            for (var i=0; i<3; i++){
              console.log("meeting " + i + " " + JSON.stringify(self.meetings[i], null, 3))
            }
        res.data.forEach(function(a){
          self.meeting_list[a._id] = a;
          self.meeting_list_index.push(a._id)
        })
          for (var i=0; i<3; i++){
            var mIndex = self.meeting_list_index[i];
              console.log("meeting_list " + i + " " + JSON.stringify(self.meeting_list[mIndex], null, 3))
            }
    //    console.log(this.todos[0])
     //   console.log("todos count= " + this.todos.length)
      })
    }
  },
  computed: {
    
  },
  created: function(){
    
debugger
    console.log("app.vue created................")
    //this.fetchMeetings();
    //this.geoLocate();
    var self = this;
    this.testGeo();
    this.timeFetch = window.setTimeout(function(){
      self.fetchMeetings();
    },2000)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  
}
* {
  box-sizing: border-box;
}
</style>
