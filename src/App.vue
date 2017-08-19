<template>
  <div id="app">
    <aalinks-nav></aalinks-nav>

    <router-view v-bind:meetings='meetings'></router-view>
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
      meetings: [],
      meeting_list: {},
      meeting_list_index: []
    }
  },
  methods: {
    fetchMeetings(){
      var self = this;
      axios.get("http://localhost:8081/api")
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
    console.log("layout.vue created................")
    this.fetchMeetings();
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

</style>
