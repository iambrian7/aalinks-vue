<template>
  <div class="test-responsive-form">
      <h3>Test Responsive form </h3>

      <p>Next is the child of responsive-form sending object from parent</p>
      <p @click="what">Click Here to reveal changes in child form</p>
      <div class="form-address-display">
          {{JSON.stringify(formAddress, null, 4)}}
      </div>
      <div class="test-message">{{testMessage}}</div>
      <!-- <keep-alive>
      <responsive-form :testAddress="formAddress"></responsive-form>
      </keep-alive> -->
      <new-vee><</new-vee>
  </div>
</template>

<script>
import ResponsiveForm from "./ResponsiveForm.vue"
import TestVee from "./newvee.vue"
export default {
  name: 'test-responsive-form',
  components: {
    // <my-component> will only be available in parent's template
    'responsive-form': ResponsiveForm, 'new-vee': TestVee
  },
  data () {
    return {
        testMessage: "",
      formAddress: {
          location: "default location",
         address: "default address",
          city: "default city",
           state: "default state",
            zip: "default zip",
            lat: "default lat",
            lng: "default lng",
            comments: "default commemt",
            meeting_name: ''
      }
    }
  },
  methods: {
    what(){
        console.log(`child form info: ${JSON.stringify(this.formAddress, null, 4)}`)
        this.testMessage= this.formAddress.location
    },
    
  },// end of methods
  created: function(){
    console.log("TestResponsiveForm.vue created................")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .form-address-display {border: 1px solid black; font-size: 1.5vw; background: #ccc; margin: 10px auto; padding: 10px;}
</style>
