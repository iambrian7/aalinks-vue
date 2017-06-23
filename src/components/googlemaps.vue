<template>
<div style="height:100%; width:100%;">
    <div id="my-map">

    </div>
    <button @click="addMarker">Add Marker</button>
</div>
</template>
<script>
     import { Bus } from '../main'
export default {
	data() {
		return {
            map : null   
    }
  },
  methods: {
        initMap: function(){
           // debugger;
            this.map = new google.maps.Map(document.getElementById('my-map'), {
            center: {lat: 44.9169913, lng: -93.4435269},
            zoom: 8
            });
        },
        addMarker: function(){
            var myLatlng = {lat: 44.8169913, lng: -93.8435269};
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: this.map,
                title: 'Click to zoom'
        });
        }
  },
  computed: {
  },
  mounted: function(){
      var self = this;
      this.initMap();
      this.map.addListener('click', function(event) {
          console.log("clicked at: " + event.latLng.lat() + " : " + event.latLng.lng())
          //coordsDiv.textContent =
          //    'lat: ' + Math.round(event.latLng.lat()) + ', ' +
          //    'lng: ' + Math.round(event.latLng.lng());
          var lat = event.latLng.lat();
          var lng = event.latLng.lng();
          var myLatlng = {lat: lat, lng: lng};
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: self.map,
            });
        });
        Bus.$on('eventFired', (data) => {
        	alert(data);
          this.msg = 'I heard an event.';
        });
    // debugger;
  //   document.addEventListener('DOMContentLoaded', function() {
  }
}

</script>
<style>
 #my-map {
        height: 100%; width: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
     
    </style>