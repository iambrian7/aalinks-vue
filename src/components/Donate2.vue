<template>
  <div class='donate2'>
      
    <div class='header'>
      <h1 class="aalinks-title">Each gift is another link in the chain growing stronger</h1>
    </div>
    <div class='flex-columns'>
      <div class='help'>
        <img class="help-img" src="../../static/help.jpg" alt="help">
          <!-- <img src="https://cdn.scotch.io/2842/b7yhhuUPSGO1fEkMHD6P_sticks.jpeg" alt="A bundle of sticks"> -->
      </div>
      <div class="amount-container section" v-if="activetab === 1" >
        <div class="section-content">
            <div class="donate-row">
              <button v-for="amt in amts" :key="amt" @click="amount = amt, isActive = amt" v-bind:class="{ active: isActive == amt }">${{ amt }}</button>        
              <input type="text" placeholder="donation amount..." v-model="amount" size="5">
            </div>
            <div class="donate-row">
              <div class="donate-view">
                I wish to donate {{amount | currency}}
              </div>
            </div>
        </div>
        <div class="section-control">
          <button @click="activetab=2">Next</button>
          <button @click="cancel">Cancel</button>
        </div>
      </div>
      <div class="info-container  section" v-if="activetab === 2" >
        <div class="section-content">
        <p>
            ( <span class="error-text">*</span> fields are optional)
        </p>
            <div class="donate-row">
                  <FloatingInput v-model="name" pholder="Name"></FloatingInput>
                  <FloatingInput v-model="email" pholder="Email"></FloatingInput>
                  <FloatingInput v-model="address.street" pholder="Street"></FloatingInput>
                  <FloatingInput v-model="address.city" pholder="City"></FloatingInput>
                  <select  v-model="address.state">
                    <optgroup>
                        <option disabled value="">Please select one</option>
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
                    </optgroup>
                </select>	
                  <!-- <FloatingInput v-model="address.state" pholder="State (2 char)" width="4"></FloatingInput> -->
                  <FloatingInput v-model="address.zip" pholder="Zip Code" width="4"></FloatingInput>
            </div>
        </div>  <!-- end section-content A track list to auto-fill  Grid By Example 34 -->
        <div class="section-content">
          <div class="donate-row">
            <div class="input-view">

                  <FloatingInput v-model="card.name" pholder="Name on Card"></FloatingInput><span class="req">*</span>
                  <!-- <div class="error" v-if="cardNumberError">
                    <p>{{ cardNumberError }}</p>
                  </div> -->
            </div>
                  <FloatingInput v-model="card.number" pholder="Card Number" :err="cardNumberError"></FloatingInput>
                  <!-- <div class="error" v-if="cardNumberError">
                    <p>{{ cardNumberError }}</p>
                  </div> -->
            <!-- Name on Card: <input type="text" v-model="card.name"> -->
            <!-- Card Number:  <input type="text" class="input" v-model="card.number"> -->
          </div>
          <!-- <div class="donate-row">
            <YearDropdown />
          </div> -->
          <div class="donate-row">
              <label class="select-month">Expiry Month
              <select v-model="card.exp_month" select="select-month" :class="{error: cardMonthError}">
                  <option value=""></option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
              </select>
              </label>
                  <!-- <div class="error" v-if="cardMonthError">
                    <p>{{ cardMonthError }}</p>
                  </div> -->
              <!--<input id="ExpiryDate" class="form-control" type="text" placeholder="MM / YY" maxlength="7" name="expMonth" value="01/23"></input>-->
              <label>Expiry Year
                <select v-model="card.exp_year" :class="{error: cardYearError}">
                    <option checked=""></option>
                    <option value="2020">2020</option><option value="2021">2021</option><option value="2022">2022</option><option value="2023">2023</option><option value="2024">2024</option><option value="2025">2025</option><option value="2026">2026</option><option value="2027">2027</option><option value="2028">2028</option><option value="2029">2029</option><option value="2030">2030</option><option value="2031">2031</option><option value="2032">2032</option>
                </select>
              </label>
                  <!-- <div class="error" v-if="cardYearError">
                    <p>{{ cardYearError }}</p>
                  </div> -->
              <label> CVC
                <input class="input" type="text" v-model="card.cvc" :class="{error: cardCvcError}">
              </label>
                  <!-- <div class="error" v-if="cardCvcError">
                    <p>{{ cardCvcError }}</p>
                  </div> -->
          </div>
        </div>
        <div class="section-control">
            <button @click="activetab=1">Back</button>
            <button @click="validateCard">Next</button>
            <button @click="cancel">Cancel</button>
        </div>

      </div>
      <div class="submit-container section" v-if="activetab === 3" >Submit
          <div class="section-control">
              <button @click="activetab=2">Back</button>
              <button @click="submit">Submit</button>
              <button @click="cancel">Cancel</button>
          </div>
       </div>
      <div class="success section" v-if="activetab === 4" >Submit
        <h1>Thank You for your donation!</h1>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import FloatingInput from "@/components/FloatingInput";
import YearDropdown from "@/components/YearDropdown";
export default {
    components: {
      FloatingInput,
      YearDropdown
    },
    data(){
        return {
         // input_data: "hello",
            stripeKey: 'pk_test_UWB3Uz5xAWTWkF0BznCORJgb',
            orderComplete: false,
            // activetab: 1,
            // fields
            stripeToken: null, 
            name: 'Connor Leech',
            email: 'connor@employbl.com',
            amount: '5',
            engravingText: 'This is the text to put on the bundle of sticks',
            address: {
                street: '123 Something Lane',
                city: 'San Francisco',
                state: 'CA',
                zip: '94607'
            },

            card: {
                name: '',
                number: '',
                cvc: '',
                exp_month: '',
                exp_year: ''
            },
            // card: {
            //     name: '',
            //     number: '4242424242424242',
            //     cvc: '123',
            //     exp_month: '01',
            //     exp_year: '22'
            // },

            // validation
            cardNumberError: null,
            cardCvcError: null,
            cardMonthError: null,
            cardYearError: null,
            cardCheckSending: false,
            cardCheckError: false,
            cardCheckErrorMessage: '',
            cardError: '',

            amts: [5,10,25,50],
            isActive: 5
        }
    },
    methods: {
      submit(){
        this.activetab = 4;
        setTimeout(x => this.activetab = 1, 2000);
      },
      cancel(){
        this.activetab = 1;
      },
      validateCard(){
        var valid = this.validate();
          if ( valid ){
            alert(`validation true: ${JSON.stringify(this.card, null, 3)}`);
            // this.createToken();
          } else {
            alert(`validation error: ${JSON.stringify(this.card, null, 3)}`);

          }
      },
        validate(){
          console.log(`donate validate...........`)
            this.clearCardErrors();
            let valid = true;
            if(!this.card.number){ valid = false; this.cardNumberError = "Card Number is Required"; }
            if(!this.card.cvc){ valid = false; this.cardCvcError = "CVC is Required"; }
            if(!this.card.exp_month){ valid = false; this.cardMonthError = "Month is Required"; }
            if(!this.card.exp_year){ valid = false; this.cardYearError = "Year is Required"; }
          return valid;
        },
        clearCardErrors(){
            this.cardNumberError = null;
            this.cardCvcError = null;
            this.cardMonthError = null;
            this.cardYearError = null;
        },
       async createToken() {
          var self = this;
            this.cardCheckError = false;
          //  var element = window.Stripe(this.stripeKey);
            window.Stripe.setPublishableKey(this.stripeKey);
            this.cardCheckSending = true;
            Stripe.createToken(this.card,self.stripeResponseHandler);
        },
        stripeResponseHandler(status, response) {
            // token to create a charge on our server 
            if (response.error) { // Problem!
                            this.cardError = response.error.message;
                            console.log('error in getting Stripe token: ' + JSON.stringify(response.error, null, 4))
            //
            //    // Show the errors on the form:
            //    $form.find('.payment-errors').text(response.error.message);
            //    $form.find('.submit').prop('disabled', false); // Re-enable submission
            //
            } else { // Token was created!
                this.stripeToken = response.id;
                console.log('received Stripe token: ' + JSON.stringify(response, null, 4))
                this.cardError = null;
            }

            var request = {
                name: this.name ? this.name : "anonymous",
                email: this.email,
                amount: this.amount,
                engravingText: this.engravingText,
                address: this.address,
                card: this.card,
                stripeToken: this.stripeToken
            };

                // Send to our server
         //   var url = 'http://localhost:3970/api/charge'
            var url = 'http://localhost:8086/charge'

                // var url = 'https://moonstrider.com/api/charge'
                // axios.post('url', data, {
                //         headers: {
                //             'Content-Type': 'application/json',
                //         }
                //     }
                //     )
                console.log(`posting request=${JSON.stringify(request, null, 3)}`)
                axios.post(url,request, {
                    headers: {
                        'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*', 
                        }
                })
                // axios.post(`${window.endpoint}/charge`, request)
                    .then((res) => {
                        var error = res.data.error;
                        var charged = res.data.charged;
                        if (error){
                            console.error(error);
                        } else {
                            console.log(`Order Complete: ${JSON.stringify(charged, null,3)}`)
                            this.orderComplete = true;
                            // this.$router.push({ path: `order-complete/${charged.id}` })
                        }
                    });
            }
    },
     filters: {
       money: function(value){
         return '$'+value;
       },
        currency: function(value){
        if (!value) return 0;
        value = (value*1).toFixed(0)
        return (value * 1).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
      },
        capitalize: function (value) {
          if (!value) return ''
          value = value.toString()
          return value.charAt(0).toUpperCase() + value.slice(1)
        },
        dayname: function(value){
          var daysIndex = ['Sun','Mon', 'Tue','Wed','Thu', 'Fri', 'Sat'];
          return daysIndex[+value]
        }
      },
    computed: {
  	activetab: {
    	get: function() {
    		return this.$store.state.activetab;
      },
      set: function(newValue) {
       this.$store.state.activetab = newValue;
      }
    }
    }
}
</script>

<style>
.donate2  {
  max-width: 80vw;
  margin: 20px auto;
}
/* label{
  margin: 20px;
  padding: 5px;
  font-weight: bold;
} */
.success{
  background: green;
  color: white;
}
.active{
  background: red;
}
.flex-columns{
  display: flex;
  flex-wrap: wrap;
}
.section{
  flex: 1 1 400px;
  border: 1px solid black;
  /* font-size: 1.8em; */
  background: rgba(138, 136, 136, 0.925);
  height: 76vh;
}
.section-content{
  display: flex;
  flex-direction: column;
  /* height: 400px; */
  /* border: 1px solid black; */
  padding: 20px;
}
.section-control{
  display: flex;
  justify-content: space-evenly;
}
.section-control button{
  font-size: 1.6rem;
  background: green;
  border: 1px solid black;
  border-radius: 5px;
}
.section-view{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid black;
  width: 50vw;
  padding: 30px;
  margin-left: 30px;
  background: white;
}.section-view p {
  padding: 0;
  margin: 0;
}
.donate-row{
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 5px;
  background: #ccc;
  padding: 20px 0 0 0;
}
.donate-view{
  font-size: 3rem;
  width: 100%;
  /* height: 200px; */
  margin: 30px auto;
  padding: 20px;
  color: white;
  border: 1px solid black;
  background: green;
  border-radius: 10px;
  text-align: center;
}
.donate-row button{
  width: 150px;
}
.info-container{
  /* font-size: 1.8rem; */
}
h2 { text-decoration: underline; }
.textarea:not([rows]) { max-height: 110px; min-height: 110px; }
.container { margin-bottom: 30px; }
.column > img { margin-top: 60px; }
.button-field { display: flex; justify-content: center; }
#left-line { margin-top:27px; }
.help-img{
  border-radius: 10px;
  box-shadow: 5px;
  max-width: 400px;
}
select,
optgroup,
.input {
    /* font-size: 1.8rem; */
    padding: 5px;
    display: block;
    margin: 0 0 10px 0;
}
/* optgroup{
  margin: 0;
  padding: 0;
}
optgroup option{
  background: red;
  margin: 0;
  padding: 0;
} */
select {
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;
}
.select-month select option{
  background: red;
  padding: 0;
  margin: 0;
  min-height: .4em;
}
.field{
  margin: 10px;
}
.order-complete{
    background: red;
    color: white;
    font-size: 2em;
    text-align: center;
    padding: 20px;
}
@media screen and (max-width: 1024px) { /* Specific to this particular image */
  .help {
  display: none;
  }
}
.aalinks-title{
 /* position: absolute; */
 /* top: 10px; */
 /* left: 0; */
  font-size: 40px;
  color: red;
  text-shadow: -3px 0px 6px rgba(0, 0, 0, 0.83);
}
.cover{
  background: #000;
  z-index: -2;
  height: 500vh;
}
.error {
  border: 2px solid red;
}
.error-text{color: red;}
.req{ color: red;}
</style>
