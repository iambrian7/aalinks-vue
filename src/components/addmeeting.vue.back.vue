<template>
  <div class="add-meeting">
  <h1>{{ msg}}</h1>
  <h3> Enter an adress and press the button</h3>

    <input v-model="address" @keyup:enter="getLocation" id="address" type="text" placeholder="Enter address here" />
    <button @click="getLocation">Get LatLong</button>
    <div>
        <p>Latitude:
            <input type="text" v-model='lat' readonly />
        </p>
        <p>Longitude:
            <input type="text" v-model='lng' readonly />
        </p>
    </div>
    <div class="container-fluid">
    <div class="row form-background"><div class="col-md-6">
      <!-- name group   -->
    <div class="form-group">
        <label class="control-label">Location Name</label>  
        <div class="inputGroupContainer">
            <div class="input-group" v-bind:class="{ 'has-error' : errors.has('location') }">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input name="location"  v-model="formAddress.location" v-validate="'required|alpha|min:3'" class="form-control" type="text" id="location" placeholder="Location Name..." 
                    >
            </div>
            <span v-show="errors.has('first_name')" class=" error text-danger">{{ errors.first('first_name') }}</span>
        </div>
        </div>
 <!-- street group  -->
    <div class="form-group">
        <label class="control-label">Street Name</label>  
        <div class="inputGroupContainer">
            <div class="input-group" v-bind:class="{ 'has-error' : errors.has('street') }">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input name="street"  v-model="formAddress.street" v-validate="'required|min:3'" class="form-control" type="text" id="street" placeholder="Street Name..." 
                    v-bind:class="{ 'input': true, 'has-error': errors.has('street') }" >
            </div>
            <span v-show="errors.has('street')" class=" error text-danger">{{ errors.first('street') }}</span>
        </div>
    </div>
    <!-- city group  -->
    <div class="form-group">
        <label class="control-label">city Name</label>  
        <div class="inputGroupContainer">
            <div class="input-group" v-bind:class="{ 'has-error' : errors.has('street') }">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input name="city"  v-model="formAddress.city" v-validate="'required|min:3'" class="form-control" type="text" id="city" placeholder="city Name..." 
                    v-bind:class="{ 'input': true, 'has-error': errors.has('street') }" >
            </div>
            <span v-show="errors.has('city')" class=" error text-danger">{{ errors.first('city') }}</span>
        </div>
    </div>
    <!-- state group  -->
    <div class="form-group">
        <label class="control-label">state Name</label>  
        <div class="inputGroupContainer">
            <div class="input-group" v-bind:class="{ 'has-error' : errors.has('state') }">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input name="state"  v-model="formAddress.state" v-validate="'required|min:2'" class="form-control" type="text" id="state" placeholder="state Name..." 
                    v-bind:class="{ 'input': true, 'has-error': errors.has('street') }" >
            </div>
            <span v-show="errors.has('state')" class=" error text-danger">{{ errors.first('state') }}</span>
        </div>
    </div>
    <!-- zip group  -->
    <div class="form-group">
        <label class="control-label">zip Name</label>  
        <div class="inputGroupContainer">
            <div class="input-group" v-bind:class="{ 'has-error' : errors.has('zip') }">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input name="street"  v-model="formAddress.zip" v-validate="'required|min:3'" class="form-control" type="text" id="street" placeholder="zip Name..." 
                    v-bind:class="{ 'input': true, 'has-error': errors.has('zip') }" >
            </div>
            <span v-show="errors.has('zip')" class=" error text-danger">{{ errors.first('zip') }}</span>
        </div>
    </div>
     <!-- lat group  -->
    <div class="form-group">
        <label class="control-label">Latitude</label>  
        <div class="inputGroupContainer">
            <div class="input-group" v-bind:class="{ 'has-error' : errors.has('lat') }">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input name="lat"  v-model="formAddress.lat" v-validate="'required|min:3'" class="form-control" type="text" id="street" placeholder="Latitude..." 
                    v-bind:class="{ 'input': true, 'has-error': errors.has('zip') }" >
            </div>
            <span v-show="errors.has('lat')" class=" error text-danger">{{ errors.first('lat') }}</span>
        </div>
    </div>
     <!-- lng group  -->
    <div class="form-group">
        <label class="control-label">Longitude</label>  
        <div class="inputGroupContainer">
            <div class="input-group" v-bind:class="{ 'has-error' : errors.has('lng') }">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input name="lng"  v-model="formAddress.lng" v-validate="'required|min:3'" class="form-control" type="text" id="lng" placeholder="Longitude..." 
                    v-bind:class="{ 'input': true, 'has-error': errors.has('lng') }" >
            </div>
            <span v-show="errors.has('zip')" class=" error text-danger">{{ errors.first('zip') }}</span>
        </div>
    </div> 

        </div><!-- end column-->
    </div> <!-- end row-->
        <div class="row">
            <div class="col-md-6">
            
           <!-- name group  -->
    <div class="form-group">
        <label class="control-label">Location Name</label>  
        <div class="inputGroupContainer">
            <div class="input-group" v-bind:class="{ 'has-error' : errors.has('location') }">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input name="location"  v-model="formAddress.location" v-validate="'required|alpha|min:3'" class="form-control" type="text" id="location" placeholder="Location Name..." 
                    >
            </div>
            <span v-show="errors.has('first_name')" class=" error text-danger">{{ errors.first('first_name') }}</span>
        </div>
        </div>
 <!-- street group  -->
    <div class="form-group">
        <label class="control-label">Street Name</label>  
        <div class="inputGroupContainer">
            <div class="input-group" v-bind:class="{ 'has-error' : errors.has('street') }">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input name="street"  v-model="formAddress.street" v-validate="'required|min:3'" class="form-control" type="text" id="street" placeholder="Street Name..." 
                    v-bind:class="{ 'input': true, 'has-error': errors.has('street') }" >
            </div>
            <span v-show="errors.has('street')" class=" error text-danger">{{ errors.first('street') }}</span>
        </div>
    </div>
    <!-- city group  -->
    <div class="form-group">
        <label class="control-label">city Name</label>  
        <div class="inputGroupContainer">
            <div class="input-group" v-bind:class="{ 'has-error' : errors.has('street') }">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input name="city"  v-model="formAddress.city" v-validate="'required|min:3'" class="form-control" type="text" id="city" placeholder="city Name..." 
                    v-bind:class="{ 'input': true, 'has-error': errors.has('street') }" >
            </div>
            <span v-show="errors.has('city')" class=" error text-danger">{{ errors.first('city') }}</span>
        </div>
    </div>
    <!-- state group  -->
    <div class="form-group">
        <label class="control-label">state Name</label>  
        <div class="inputGroupContainer">
            <div class="input-group" v-bind:class="{ 'has-error' : errors.has('state') }">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input name="state"  v-model="formAddress.state" v-validate="'required|min:2'" class="form-control" type="text" id="state" placeholder="state Name..." 
                    v-bind:class="{ 'input': true, 'has-error': errors.has('street') }" >
            </div>
            <span v-show="errors.has('state')" class=" error text-danger">{{ errors.first('state') }}</span>
        </div>
    </div>
    <!-- zip group  -->
    <div class="form-group">
        <label class="control-label">zip Name</label>  
        <div class="inputGroupContainer">
            <div class="input-group" v-bind:class="{ 'has-error' : errors.has('zip') }">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input name="street"  v-model="formAddress.zip" v-validate="'required|min:3'" class="form-control" type="text" id="street" placeholder="zip Name..." 
                    v-bind:class="{ 'input': true, 'has-error': errors.has('zip') }" >
            </div>
            <span v-show="errors.has('zip')" class=" error text-danger">{{ errors.first('zip') }}</span>
        </div>
    </div>
     <!-- lat group  -->
    <div class="form-group">
        <label class="control-label">Latitude</label>  
        <div class="inputGroupContainer">
            <div class="input-group" v-bind:class="{ 'has-error' : errors.has('lat') }">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input name="lat"  v-model="formAddress.lat" v-validate="'required|min:3'" class="form-control" type="text" id="street" placeholder="Latitude..." 
                    v-bind:class="{ 'input': true, 'has-error': errors.has('zip') }" >
            </div>
            <span v-show="errors.has('lat')" class=" error text-danger">{{ errors.first('lat') }}</span>
        </div>
    </div>
     <!-- lng group  -->
    <div class="form-group">
        <label class="control-label">Longitude</label>  
        <div class="inputGroupContainer">
            <div class="input-group" v-bind:class="{ 'has-error' : errors.has('lng') }">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input name="lng"  v-model="formAddress.lng" v-validate="'required|min:3'" class="form-control" type="text" id="lng" placeholder="Longitude..." 
                    v-bind:class="{ 'input': true, 'has-error': errors.has('lng') }" >
            </div>
            <span v-show="errors.has('zip')" class=" error text-danger">{{ errors.first('zip') }}</span>
        </div>
    </div>
    <!-- <form id="aalinks-location-form"   name="aalinksLocationForm" class=" controller-form type form-style-9">
        <div class="validatePageOneTips hide"></div>
        <ul class="flex-form-fields">
            <li class="flex-form-inputs">
                <input type="text" v-model="formAddress.name" name="location" class="field-style field-split align-left" placeholder="Name" />
                <input type="text" v-model="formAddress.street" name="address" class="field-style field-split align-right" placeholder="Address" />
            </li>
            <li class="flex-form-inputs">
                <input type="text" v-model="formAddress.city" name="city" class="field-style flex-large" placeholder="City" />
                <input type="text" v-model="formAddress.state" name="state" class="field-style flex-small" placeholder="State" />
                <input type="number" v-model="formAddress.zip" name="postal_code" class="field-style flex-small" placeholder="Zip" />
            </li>
            <li class="flex-form-inputs">
                <input type="text" name="country" class="field-style flex-xsmall" value="US" placeholder="Country" disabled/>
                <input type="text" v-model="formAddress.lat" name="lat" class="field-style flex-large" placeholder="Latitude" />
                <input type="text" v-model="formAddress.lng" name="lng" class="field-style flex-large" placeholder="Longitude" />
            </li>
            <li class="flex-form-inputs">
            <input type="text" name="comments" class="field-style flex-large" placeholder="Comments:" />
            </li>
            <li>
                <input type="button" value="Checkmap" />
            </li>
        </ul>
    </form> -->
     </div>
            <div class="col-md-6">
             <google-map :locations="newlocations"></google-map>
            </div>
        </div>
    </div>
    <h1>Contact</h1>
    <contact></contact>
  </div>
</template>

<script>
 import GoogleMap from '@/components/googlemaps'
    import Contact from "./contact.vue"
export default {
  name: 'add-meeting',
  components: {
    // <my-component> will only be available in parent's template
    'contact': Contact, "google-map": GoogleMap
  },
  data () {
    return {
      msg: 'Add a meeting',
      address: '',
      formAddress: {},
      result: null,
      lat: '',
      lng: '',
      newlocations: {}
    }
  },
  methods: {
      getLocation: function(){
          console.log("address = " + this.address)
           this.getLatitudeLongitude(this.showResult, this.address)
      },
      showResult: function(result){
          Object.keys(this.formAddress).forEach((k) => {
              this.formAddress[k] = '';
          })
        this.lat = result.geometry.location.lat();
        this.lng = result.geometry.location.lng();
         var a = result.address_components;
         var keys = {street_number:'street',locality:'city',administrative_area_level_1:'state',postal_code:'zip'}
         var parts = {}
       //  debugger;
         a.forEach((x) => {
             console.log("x=" + JSON.stringify(x, null, 3))
             var key = x.types[0]
             if (key == 'route'){
                this.formAddress.street += " " + x.short_name
             }else{
                parts[key] = x.short_name
                var xxk = keys[key]
                this.formAddress[xxk] = x.short_name
             }
            
             })
             this.formAddress.lat = this.lat
              this.formAddress.lng = this.lng
         console.log("parts=" + JSON.stringify(parts, null, 3))

         //this.formAddress.street = a.filter( x=> x.types.contains(""))
        //  this.formAddress = {
        //              street: a[0].short_name + a[1].short_name,
        //              city: a[2].short_name,
        //              state: a[4].short_name,
        //              zip: a[6].short_name,
        //              lat:  this.lat,
        //              lng:  this.lng
        //          }

        ///////////  add a location to result   /////////////////////
         var loc = {};

        loc[0] = {
            location: 'New Meeting',
            address: this.formAddress.street,
            city: this.formAddress.city,
            state: this.formAddress.state,
            postal_code: this.formAddress.zip,
            loc : {
                "type": "Point",
                "coordinates": [
                   this.formAddress.lng,
                   this.formAddress.lat
                ]
            },
            meetings: []
        } // add this location data 
        this.newlocations = loc
        console.log("formAddress = " + JSON.stringify(this.formAddress, null, 3))
        this.$nextTick(function () {
                console.log("next tick validating") // => 'updated'
                 this.$validator.validateAll();
          })
       
        this.address = '';
      },
        getLatitudeLongitude: (callback, address)  => {
            var self = this;
        // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
        var address = address || '12913 Pioneer Rd., Minnetonka, MN';
        // Initialize the Geocoder
        var geocoder = new google.maps.Geocoder();
        if (geocoder) {
            geocoder.geocode({
                'address': address
            }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                 //   debugger;
                
                 console.log("results[0] = " + JSON.stringify(results[0], null, 3))
                
                    self.result = results[0];
                    callback(results[0]);
                }
            });
        }
}
  }
}
</script>
// function showResult(result) {
//     document.getElementById('latitude').value = result.geometry.location.lat();
//     document.getElementById('longitude').value = result.geometry.location.lng();
// }

// function getLatitudeLongitude(callback, address) {
//     // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
//     address = address || 'Ferrol, Galicia, Spain';
//     // Initialize the Geocoder
//     geocoder = new google.maps.Geocoder();
//     if (geocoder) {
//         geocoder.geocode({
//             'address': address
//         }, function (results, status) {
//             if (status == google.maps.GeocoderStatus.OK) {
//                 callback(results[0]);
//             }
//         });
//     }
// }

// var button = document.getElementById('btn');

// button.addEventListener("click", function () {
//     var address = document.getElementById('address').value;
//     getLatitudeLongitude(showResult, address)
// });

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-background { background: #ccc;}
.class {
   
    background-color: #cccccc;
    width: 100wh;
    height: 100vh;
}
.form-style-9{
    max-width: 450px;
    background: #FAFAFA;
    padding: 12px;
    margin: 25px auto;
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
    /*border: 6px solid #305A72;*/
}
.form-style-9 ul{
    padding:0;
    margin:0;
    list-style:none;
}
.form-style-9 ul li{
    /*display: block;*/
    margin-bottom: 10px;
    min-height: 35px;
}
.form-style-9 ul li  .field-style{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 4px;
    outline: none;
    border: 1px solid #B0CFE0;
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;

}.form-style-9 ul li  .field-style:focus{
     box-shadow: 0 0 5px #B0CFE0;
     border:1px solid #B0CFE0;
 }
.form-style-9 ul li .field-split{
    width: 49%;
}
.form-style-9 ul li .field-full{
    width: 100%;
}
.form-style-9 ul li input.align-left{
    float:left;
}
.form-style-9 ul li input.align-right{
    float:right;
}
.form-style-9 ul li textarea{
    width: 100%;
    height: 100px;
}
.form-style-9 ul li input[type="button"],
.form-style-9 ul li input[type="submit"] {
    -moz-box-shadow: inset 0px 1px 0px 0px #3985B1;
    -webkit-box-shadow: inset 0px 1px 0px 0px #3985B1;
    box-shadow: inset 0px 1px 0px 0px #3985B1;
    background-color: #216288;
    border: 1px solid #17445E;
    display: inline-block;
    cursor: pointer;
    color: #FFFFFF;
    padding: 8px 18px;
    text-decoration: none;
    font: 12px Arial, Helvetica, sans-serif;
}
.form-style-9 ul li input[type="button"]:hover,
.form-style-9 ul li input[type="submit"]:hover {
    background: linear-gradient(to bottom, #2D77A2 5%, #337DA8 100%);
    background-color: #28739E;
}
.flex-form-fields { display: flex; flex-direction: column;}
.flex-large { flex: 4 1 auto;margin:0 4px;}
.flex-small { flex: 1 1 auto; width: 40px;margin:0 5px;}
.flex-xsmall { flex: 1 1 auto; width: 25px;margin:0 5px;}
.flex-form-inputs {display: flex; justify-content: space-around;}
.flex-input { background: yellow; border: 1px solid black; margin: 0 10px; padding: 5px;}
</style>
