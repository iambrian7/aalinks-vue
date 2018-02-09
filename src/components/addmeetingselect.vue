<template id="addmeeting-select">
<form role="form" class="form-horizontal" id="form-meeting">
    <div class="form-group">
        <!-- <div class="input-group" v-bind:class="{ 'has-error' : errors.has('location') }"> -->
        <!-- <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span> -->
            <input name="location"  v-model="formAddress.location_name" v-validate="'required|min:3'" class="form-control" type="text" id="location" placeholder="Location Name...">
        <!-- </div> -->
        <span v-show="errors.has('location')" class=" error text-danger">{{ errors.first('location') }}</span>
    </div>
    <div class="form-group">
      <div class="col-sm-3"><input type="text"   v-model="formAddress.street" v-validate="'required|min:3'" class="form-control" placeholder="Street"></div>
      <div class="col-sm-3"><input type="text"   v-model="formAddress.city" v-validate="'required|min:3'" class="form-control" placeholder="City"></div>
    </div>
      <div class="form-group">
            <div class="col-sm-3">
                <!-- <select class="form-control"  v-model="formAddress.state" v-validate="'required|min:2'"> -->
                <select class="form-control"  v-model="formAddress.state">
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
            <div class="col-sm-3"><input name="zip"  v-model="formAddress.zip" class="form-control" type="text" id="zip" placeholder="zip Name..."></div>
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
        <label class="control-label" @click="snapit('hello snapper')">Comments</label>  
        <div class="inputGroupContainer">
            <div class="input-group col-sm-6">
                <textarea class="form-control" rows="3" size="60" name="comments"  v-model="formAddress.comments"  id="comments" placeholder="Enter text here,,,"></textarea>
                <!-- <input name="comments"  v-model="formAddress.comments" class="form-control" type="text" id="comments" placeholder="Comments i.e. 'back door..." > -->
            </div>
        </div>
    </div>

  </form>		
</template>
<script>
    export default {
    name: 'addmeetingSelect',
    props: ["formAddress","snapit"],
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
	watch:{
		email(value){
			this.eventName();
			this.email = value;
			this.check_email(value);
		},
		password(value){
			this.eventName();
			this.password = value;
			this.checkPassword(value);
		},
		confirmPassword(value){
			this.eventName();
			this.confirmPassword = value;
			this.checkConfirmPassword(value);
		}
	},
	methods:{
             
		changeToTnc(){
			this.$emit('change','tnc');
		},
		check_email(value){
			if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(value))
			{
				this.msg[name] = '';
			}else{
				this.msg[name] = 'Keep Typing... We are waiting for correct Email';
			}
		},
		checkPassword(value){
			this.passwordLengthCheck(value);
		},
		checkConfirmPassword(value){
			if(this.passwordLengthCheck(value)){
				if (value == this.password) {
					this.msg[name]= '';
					this.disableSubmitButton = false;
				}else{
					this.msg[name] = "Password does not match, please try again";
				}
			}
		},
		passwordLengthCheck(passwordToCheck){
			remainingChars = 6 - passwordToCheck.length;
			if (passwordToCheck.length < 6) {
				this.msg[name] = 'Password must contain 6 characters. '+ remainingChars +' more to go...';
			}else{
				this.msg[name] ='';
				return true;
			}
		},
		eventName(){
			name = event.target.name;
		},
		submit(){
			alert('Great you have completed this project, keep learning.')
		}
    },
    updated(){
        console.log("addmeetingselect updated")
    }
}// end export default


</script>
<style scoped>
    span{color: red;}
    #form-meeting { border: 1px solid black; padding: 20px;}
</style>