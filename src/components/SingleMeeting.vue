<template>
  <div class="single">
    <div v-if="!meets">
      <p>Loading..............</p>
    </div>
    <div v-else>
        <h1>{{ msg }} {{ meets.name }}</h1>
        <h3> {{meets}}  </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'single',
  props: ['meetingpath'],
  data () {
    return {
      msg: `Welcome to `,
      // meets: {}
    }
  },
  computed: {
    meets(){
      var x = this.$store.getters.getViewMeeting;
      if (!x){
        console.log(`meetingspath: ${this.meetingspath}`)
        console.log(`$route meetingspath: ${this.$route.params.meetingpath}`)
      }
      console.log(`meets computed at ${x}`)
      return x
    }
  },
  methods: {

  },
created: function(){
    // debugger;
  //  this.meets =  this.$store.getters.getViewMeeting;

    console.log("single meeting created")
    // console.log(`singlemeeting: created: prop meeting = ${this.meets.name}`)
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



</style>
