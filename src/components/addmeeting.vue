<template>
  <div class="add-meeting">
    <div id="add-intro">
 
            <div class="left-intro">
                <h2>Adding a meeting is a multi-step process. </h2>
                <ul class="list-unstyled">
                    <li v-bind:class="state == 1 ? 'intro-active' : ''">Determine location for meetings</li>
                    <li  v-bind:class="state == 2 ? 'intro-active' : ''">Choose name and details</li>
                    <li v-bind:class="state == 3 ? 'intro-active' : ''">Add contact information for all meetings added</li>
                </ul>
               <div class="row col-md-12">  <button @click="state = 1" v-if="state > 1" class="btn btn-success">Back</button><button @click="checkState" class="btn btn-success">Next</button></div>
            </div>
            <div class="right-intro">
                <div id="step1-intro" class="step-intro"v-if="state == 1">
                    There are many ways to add location information. Try enter an address 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aperiam magni eaque cumque, consectetur libero porro ut. Consectetur praesentium, nihil iusto quos voluptatem cupiditate nam ex, qui porro. Pariatur error impedit earum officia modi delectus, doloremque consequuntur, sint ipsa omnis odio consequatur nobis iste laudantium veritatis voluptatem, odit, nihil soluta ullam aperiam praesentium repellat. Officiis saepe quaerat neque possimus, sapiente, fugit exercitationem culpa quae, tempore optio quidem quo. Rerum iste, officia autem repellendus culpa sed dolor porro natus sit optio quae praesentium inventore harum deleniti voluptatibus quo, nobis sequi quidem nisi reprehenderit recusandae pariatur earum doloribus consectetur. Ex natus dolore molestiae ipsum labore quod ipsam soluta, mollitia! Fugiat nostrum est, inventore saepe alias molestiae cupiditate enim dolorum accusamus. Minus, corporis quibusdam praesentium, voluptatem possimus suscipit numquam, tempora odio voluptatum voluptatibus, iste eligendi cupiditate voluptas dolorem tenetur quaerat laborum. Ducimus provident recusandae dicta doloribus rem cum a nulla eligendi repellendus natus omnis ea nobis mollitia autem excepturi nesciunt deserunt numquam quas culpa id iste, praesentium. Nam tempora libero provident expedita sunt! Cumque amet provident natus nostrum, alias adipisci vel, reiciendis iure, mollitia voluptatibus magni delectus quas non dolores quaerat. Voluptatibus deleniti numquam animi, tempore saepe officiis vero qui nemo suscipit, harum ratione necessitatibus cupiditate ea. Modi qui deleniti facere dolor fuga atque iusto soluta dicta nemo, illum hic non odit, provident, beatae unde reprehenderit cupiditate error illo saepe porro. Perspiciatis modi, omnis recusandae at dolor dignissimos amet possimus. Odit iure odio provident dolores sapiente hic ex recusandae facilis eius officiis delectus numquam, exercitationem, repudiandae iusto ut ducimus quia, libero repellendus. Non, quo. Dignissimos necessitatibus consequatur vero delectus laborum earum fuga, accusantium consequuntur, ratione obcaecati quod quo quam minus. Sequi nam architecto perferendis molestiae laudantium, vel voluptatem? Asperiores aperiam quis nesciunt animi praesentium quod rem, dolores quia, perferendis eligendi placeat similique quas nemo ad qui sit ipsa minus odit, architecto laboriosam at! Dolor suscipit veritatis quaerat eum, deleniti atque obcaecati modi ipsum. Unde reprehenderit iusto, officia molestiae voluptatum, amet, velit, iure quidem excepturi aperiam hic illum! Incidunt, quasi obcaecati iure quis illo eum ea consequatur at ullam earum est maxime magnam beatae, commodi a architecto impedit exercitationem asperiores pariatur officiis! Praesentium sunt animi quia impedit ab mollitia iusto tenetur sequi iure in, eligendi laboriosam odit nostrum expedita facilis dolorem, nobis reprehenderit, laudantium aliquid tempore minima excepturi commodi ipsa asperiores? Totam reprehenderit incidunt corrupti laborum consequuntur adipisci quo, quisquam minima dolorum laudantium, ipsa vel magni facere maiores eos similique sed omnis! Expedita quo vitae sunt veritatis, repudiandae, voluptatum sed nemo, at perspiciatis ex voluptates molestias minima doloremque dolorum nesciunt voluptatibus possimus explicabo. Labore quis, ea! Repellat asperiores harum architecto ipsam animi doloremque id a incidunt minima natus reprehenderit officiis laudantium consequatur necessitatibus inventore ducimus explicabo ipsa laborum, repudiandae accusantium quis, aperiam consectetur temporibus. Numquam odit distinctio saepe tempora doloremque, ut dolore aperiam! Voluptates repellat quod magnam officia. Consequuntur omnis doloremque, explicabo deleniti tempore accusantium alias, unde reiciendis quae, vel sunt harum aliquid aliquam ea! Laborum fugiat perferendis minus eum accusantium quidem nam quo veritatis excepturi, natus ipsa ipsum assumenda vero, laudantium sequi porro sapiente at nostrum, officiis ratione fuga eligendi reprehenderit distinctio dolorum. Repellat deleniti atque vel dolores earum provident sed numquam, officiis aspernatur laboriosam, quisquam totam iste ullam doloribus ratione! Quae molestias ab recusandae distinctio provident ipsam consequatur, consectetur illum explicabo itaque iusto dolores eaque magni, quisquam corrupti dolorem, cumque error! Nihil sapiente blanditiis laborum quisquam doloribus distinctio beatae, et nesciunt eius, ipsum fuga voluptates. Pariatur suscipit sed eveniet, ipsa recusandae eius placeat fugit iure sint est quas, numquam possimus cum voluptates itaque totam quos, expedita officia excepturi velit accusamus eum dolore tenetur alias fuga! Neque fugiat, architecto veniam! Sunt explicabo ex vel quia adipisci fugiat accusamus officiis similique odit delectus, iure iste! Tempore velit quam voluptatum consequatur officiis tenetur assumenda aliquid, modi nesciunt, animi, omnis consequuntur ipsa, possimus commodi ullam. In, atque harum rem et assumenda, tenetur quae similique accusantium at architecto recusandae reprehenderit porro aspernatur reiciendis, omnis ipsum vel. Molestias beatae voluptates, eaque, maxime rem voluptatem sint et non quos tempore, unde inventore eum asperiores. Excepturi omnis corporis perferendis consequuntur tempora soluta a, ullam qui repudiandae. Eveniet et sapiente voluptatem, enim placeat autem iusto est. Laudantium odio saepe officiis blanditiis quasi commodi nisi quia fuga placeat, soluta possimus, quis nihil nostrum, temporibus accusamus veniam inventore reprehenderit tempore quae sed. Temporibus aliquam nihil quo numquam quis quia sit amet et doloremque, voluptas repellendus, minima, aspernatur voluptatem rem nisi assumenda repudiandae eligendi, nesciunt architecto corporis. Dicta porro fugiat debitis deleniti eveniet vero earum tenetur explicabo amet voluptatum expedita quidem reiciendis nam voluptatibus alias in suscipit, modi incidunt aperiam commodi. Nam, corrupti. Laudantium voluptatibus atque impedit consequatur fugiat placeat quae ratione nihil pariatur explicabo alias quod minima sit repellendus neque, doloremque suscipit possimus quidem sequi, temporibus amet labore! Nesciunt exercitationem minus soluta in laudantium commodi excepturi sit ipsum rem obcaecati. Assumenda magnam id nesciunt neque, vero delectus tenetur animi quibusdam eos odio. Officia sint ab consequuntur provident, incidunt eos! Sequi porro, placeat ex odio unde! Nobis ratione possimus, accusantium ipsum iusto unde sunt corrupti deleniti doloremque hic libero dignissimos pariatur, suscipit necessitatibus nostrum sint magnam rem iste distinctio facere culpa autem, voluptates ea tenetur modi. Ipsam asperiores, doloribus tenetur, quas quam, eum repellat architecto repellendus iusto quae sapiente explicabo molestias! Error rerum nobis explicabo, dolorem rem consequatur ut harum nemo neque, eum natus temporibus odio accusamus, ipsam obcaecati fuga ipsa officiis magnam quisquam fugiat voluptas libero sapiente! Libero non, sunt veniam obcaecati, nulla autem quas quos placeat. Consectetur rem molestiae, aut nulla repellat possimus ad ipsam, quisquam id commodi, maxime voluptate, hic cupiditate? Doloribus nam accusantium, suscipit amet tempore impedit quasi vero, dolorum unde eveniet ipsum nesciunt officia eum quia voluptatum molestias autem? Pariatur necessitatibus laboriosam voluptatum assumenda atque aliquam, hic voluptatem eveniet iste mollitia ducimus libero aperiam, vitae reiciendis similique maiores officia nulla aliquid quis vel quibusdam, voluptate et vero! Repudiandae et odit vero quo iure tempore, qui nobis dolorum, suscipit cumque fuga, impedit quidem dolorem eaque deleniti quis eveniet soluta! Nam!
                </div>
                <div id="step2-intro" class="step-intro"v-if="state == 2">
                    <div v-if='state > 1' class="location-summary row ">
                         <div class="col-md-12 "> 
                            <div class="panel panel-default">
                                <div class="panel-heading">You have selected this location</div>
                                <div class="panel-body">
                                <dl class="dl-horizontal">
                                    <dt>Location</dt><dd>{{newlocations[0].location}}</dd>
                                    <dt>Address</dt><dd>{{newlocations[0].address}}  {{newlocations[0].city}}  {{newlocations[0].state}}  {{newlocations[0].postal_code}}</dd>
                                    <dt>Geo Location</dt><dd>Latatude: {{newlocations[0].loc.coordinates[1]}} Longitude: {{newlocations[0].loc.coordinates[0]}}</dd> 
                                </dl>
                                </div>
                            </div>
                         </div> 
                    </div><!-- location-summary end -->
                    Add meeting name, time, day and other options
                </div>
                <div id="step3-intro" class="step-intro"v-if="state == 3">
                    Add contact info here 
                </div>
            </div>
   
    </div>
  <div class="location-details"  v-if="state == 1">
       <!-- <h1>{{ msg}}</h1> -->

    <input v-model="address" @keyup:enter="getLocation" id="address" type="text" placeholder="Enter address here" />
    <button @click="getLocation">Get Address</button>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 form-background">
          
                
       <div class="container">
  <form role="form" class="form-horizontal">
    <div class="form-group">
        <div class="input-group" v-bind:class="{ 'has-error' : errors.has('location') }">
        <!-- <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span> -->
         <input name="location"  v-model="formAddress.location" v-validate="'required|alpha|min:3'" class="form-control" type="text" id="location" placeholder="Location Name...">
        </div>
        <span v-show="errors.has('location')" class=" error text-danger">{{ errors.first('location') }}</span>
    </div>
    <div class="form-group">
      <div class="col-sm-3"><input type="text"   v-model="formAddress.street" v-validate="'required|min:3'" class="form-control" placeholder="Street"></div>
      <div class="col-sm-3"><input type="text"   v-model="formAddress.city" v-validate="'required|min:3'" class="form-control" placeholder="City"></div>
    </div>
      <div class="form-group">
            <div class="col-sm-3">
                <select class="form-control"  v-model="formAddress.state" v-validate="'required|min:2'">
                        <option value=" " >Please select your state</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select> 
            </div>
            <div class="col-sm-3"><input name="zip"  v-model="formAddress.zip" v-validate="'required|min:3'" class="form-control" type="text" id="zip" placeholder="zip Name..."></div>
        </div>
        <div class="form-group">
      <div class="col-sm-3"><input type="text"   v-model="formAddress.lat" v-validate="'required|min:3'" name="lat" class="form-control" placeholder="Latitude...">
       <span v-show="errors.has('lat')" class=" error text-danger">{{ errors.first('lat') }}</span>
       </div>
      <div class="col-sm-3 input-group" v-bind:class="{ 'has-error' : errors.has('lng') }"><input type="text"   v-model="formAddress.lng" v-validate="'required|min:3'" name="lng" class="form-control" placeholder="Longitude...">
       <span v-show="errors.has('lng')" class=" error text-danger">{{ errors.first('lng') }}</span>
       </div>
    </div>
<!-- comments group -->
    <div class="form-group">
        <label class="control-label">Comments</label>  
        <div class="inputGroupContainer">
            <div class="input-group col-sm-6">
                <textarea class="form-control" rows="3" size="60" name="comments"  v-model="formAddress.comments"  id="comments" placeholder="Enter text here,,,"></textarea>
                <!-- <input name="comments"  v-model="formAddress.comments" class="form-control" type="text" id="comments" placeholder="Comments i.e. 'back door..." > -->
            </div>
        </div>
    </div>

  </form>
       </div>
                <input type="button" value="Checkmap" @click="checkMap"/>
                <div class="map-error" v-if="addressError">Location form is not valid</div>
       
     </div>
            <div class="col-md-6">
             <google-map :locations="newlocations"></google-map>
            </div>
        </div>
    </div>
     </div> <!-- location-details end -->
        
     <add-meetingdetails v-if="state == 2"></add-meetingdetails>

    <contact v-if="state == 3"></contact>
    
  </div>

</template>

<script>
 import GoogleMap from '@/components/googlemaps'
 import Contact from "./contact.vue"
 import AddMeetingDetails from "./addmeetingdetails.vue"
export default {
  name: 'add-meeting',
  components: {
    // <my-component> will only be available in parent's template
    'contact': Contact, "google-map": GoogleMap, "add-meetingdetails": AddMeetingDetails
  },
  data () {
    return {
      msg: 'Add a meeting',
      address: '',
      addressError: false,
      formAddress: {},
      result: null,
      lat: '',
      lng: '',
      newlocations: {},
      state: 1
    }
  },
  methods: {
      checkMap: function(){
          debugger;
          this.addressError = false;
          var a = this.formAddress;
          this.address = a.street + ", " + a.city + ", " + a.state + ", "+ a.zip;
        this.getLocation();
      },
      checkState: function(){
         // debugger;
          var state = this;
        if (this.state == 1){
             this.$validator.validateAll();
             this.$validator.validateAll().then(function(success) {
        if (!success) return;
            state.state = 2;      
       // alert("All good")
      })
        } else {
            if (this.state == 2){
                state.state = 3;
            }
        }
      },
      getLocation: function(){
          console.log("address = " + this.address)
           this.getLatitudeLongitude(this.showResult, this.address)
      },
      showResult: function(result){
          debugger
          if (!result){
            this.addressError = true  
            this.newlocations = null
            return;
          } 
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
         console.log("formAddress =" + JSON.stringify(this.formAddress, null, 3))

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
           // debugger;
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
        console.log("check map address........ = " + address)
        // Initialize the Geocoder
        var geocoder = new google.maps.Geocoder();
        if (geocoder) {
            geocoder.geocode({
                'address': address
            }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                 //   debugger;
                
                 console.log("results[0] = " + JSON.stringify(results[0], null, 3))
                
                   // self.result = results[0];
                    callback(results[0]);
                } else {
                    debugger;
                    console.log("GeocodeStatus is not ok ......." + status)
                    callback(null);
                   // self.result = null;
                   // self.addressError = true;
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
    .location-summary { margin: 20px auto; font-size: 1.2em; background: #ccc;}
    .location-summary .panel {margin: 10px;}
.form-background { background: #ccc;}
#add-intro {border: 1px solid black; background: #ccc; padding: 10px; margin: 10px; height: 300px; display: flex; }
#add-intro row, #add-intro col-md-8 {height: 100%}
    .left-intro li {border: 1px solid #aaa; background: #ccc;}
    .intro-active {border: 2px solid green !important;}
.step-intro {background: #fff; padding: 10px 20px 10px 10px; height: 100%;}
.left-intro {flex: 1;}
.right-intro {flex: 3; overflow-y:  scroll;}
.map-error {height: 50px; background: red; font-size: 1.2em; border: 1px solid black; border-radius: 5px; padding: 10px;}
</style>
