<template id="mapped-select">
	<div class="mapped-select-info">
        <h1>Mapped Address</h1>
    <div class="mapped-select-title">
            {{mappedAddress.formatted_address}}
    </div>

        {{mappedAddress}}
    </div>
</template>
<script>
    export default {
    name: 'addMappedSelect',
    props: ["mappedAddress"],
	data(){
		return {
		//	address: '',
          //  addressError: false,
          //  result: null,
          //  lat: '',
         //   lng: '',
          //  newlocations: {}//,
            //formAddress: null
		}
	},
	methods:{
             
    },
    updated(){
        console.log("addMappedSelect updated")
    }
}// end export default


</script>
<style scoped>
    span{color: red;}
    #form-meeting { border: 1px solid black; padding: 20px;}
    .mapped-select-info {font-size: 1.5vw; max-width: 400px;}
    .mapped-select-title {background: rgb(182, 183, 183);; font-size: 2vw; margin: 30px; padding: 10px; border-radius: 5px;} 
</style>