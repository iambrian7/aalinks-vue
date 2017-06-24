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
            map : null,
            markers: [],
            lastInfoWindow: null,
            locations: [] 
    }
  },
  methods: {
        initMap: function(){
           // debugger;
            this.map = new google.maps.Map(document.getElementById('my-map'), {
            center: {lat: 44.9169913, lng: -93.4435269},
            zoom: 13
            });
        },
        uniqueLocations:function(meetings){
            var loc = {};
            meetings.forEach(function(m){
                if (!loc[m.location_id]){
                    loc[m.location_id] = m
                 }
            })
            this.locations = loc;
//             console.log("unique this locations len = " + Object.keys(this.locations).length)
        },
        markerContent:function(meetings, id){
          // debugger;
            var content = [];
            var days = ['Sun','Mon','Tue','Wed','Thr','Fri','Sat'];
            var day, dl;
            var meetingCount = 0;
        // add each meeting to the marker content
           for (var i=0; i<meetings.length; i++){
                var m = meetings[i]

                if (id == m.location_id){
                // add content for this meeting to this unique marker
                    if (m.day != day){
                        meetingCount = 0;
                        if (day) content.push("</dl>")
                        content.push("<h5>" + days[m.day] + "  %%cnt%%" + " meetings </h5>");
                        content.push("<dl>");// + "</dl>");
                        day = m.day;
                    }
                    content.push("<dt>"+ m.time_formatted +"</dt>");
                    content.push("<dd data-id=" + m.slug + ">"+ m.name +"</dd>");
                    meetingCount++;
                }
            }
            if (day) content.push("</dl>") // finish up last dl tag
        return content.join('').replace("%%cnt%%",meetingCount.toString());
        },
        addMarker: function(){
            var myLatlng = {lat: 44.8169913, lng: -93.8435269};
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: this.map,
                title: 'Click to zoom'
             });
        },
        makeMarkers: function(meetings){
    //      var bounds = new google.maps.LatLngBounds();
          for (var i in this.locations){
            var m = this.locations[i];
            var i = 1;
            var lat = m.loc.coordinates[1]
            var lng = m.loc.coordinates[0]
            var  myLatLng = { lat: lat * 1, lng: lng * 1}
             var latlng = new google.maps.LatLng(lat, lng);
            var marker = new google.maps.Marker({
                position: latlng,
                map: this.map,
                id: m.location_id,
                animation: google.maps.Animation.DROP,
                title: m.location
            });
            marker.content = '<h3>' + m.location + '</h3>' + "<div class='infoWin'>" +  m.address +
                                '<br /> ' + m.city + ', MN ' + m.postal_code + '</div>';
                        marker.content = marker.content + this.markerContent(meetings,m.location_id);
                        marker.content = "<div class='top-info-window'>" + marker.content + "</div>";
            google.maps.event.addListener(marker, 'click', (function (mark, i) {
                return function () {
                    if (this.lastInfoWindow)
                        this.lastInfoWindow.close();
                    else
                        this.lastInfoWindow = new google.maps.InfoWindow();
                    var infowindow = new google.maps.InfoWindow();
                    infowindow.setContent(mark.content);
                    infowindow.open(this.map, mark);
                    this.lastInfoWindow = infowindow;
                    }
                    })(marker, i));
        //    bounds.extend(latlng);
            this.markers.push(marker)
        }// end of meetings
        //debugger;
        // var bounds = new google.maps.LatLngBounds();
        // for (var i = 0; i < markers.length; i++) {
        //    bounds.extend(markers[i].getPosition());
        // }

     //   this.map.fitBounds(bounds);
     //  this.map.fitBounds(bounds);
     // this.map.setCenter(new google.maps.LatLng(this.lat,this.lng));
     //  this.map.setZoom(11);
        }
  },
  computed: {
  },
  mounted: function(){
      var self = this;
      this.initMap();
        Bus.$on('eventFired', (data) => {
        if (Array.isArray(data)){ // make sure data is meetings array
            var meetings = data;
        // delete markers
            this.uniqueLocations(meetings)
            this.markers.forEach(function (m) {
                m.setMap(null);
            })
            this.markers = [];
            this.makeMarkers(meetings)
        }
        });
  }
}

</script>
<style>
 #my-map {
        height: 100%; width: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
    dt {
  float: left;
  clear: left;
  margin-right: 5px;
  font-weight: bold;
}

dd {
  margin-left: 0px;
}
     </style>