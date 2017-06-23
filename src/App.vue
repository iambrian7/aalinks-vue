<template>
  <div id="app">
    {{ apimessage }}
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
      meetings: []
    }
  },
  methods: {
    fetchMeetings(){
      var self = this;
      axios.get("/api")
      .then(function(res) {
   //           debugger;  
             // self.ameetings = res.data;  
             console.log("data api= " + res.data)
             debugger;
             self.meetings = res.data
            // $route.meetings.res.data
        // res.data.forEach(function(a){
        //   self.ameetings.push(a);
        // })
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
  text-align: center;
  color: #2c3e50;
  
}

</style>
