<template>
  <div class='container'>
      
      <div class='column is-12'>
        <h1 class="aalinks-title">Each gift is another link in the chain growing stronger</h1>
      </div>
        <div class='columns'>

            <div class='column is-4 help'>
              <img class="help-img" src="../../static/help.jpg" alt="help">
                <!-- <img src="https://cdn.scotch.io/2842/b7yhhuUPSGO1fEkMHD6P_sticks.jpeg" alt="A bundle of sticks"> -->
            </div>
            <div class='column is-4'>            
                <div class='field'>
                    <label>Name</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="First and Last" v-model='name'>
                        <span class="icon is-small is-left">
                          <i class="fa fa-user"></i>
                        </span>
                    </div>
                </div>
                <div class="field">
                    <label>Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="Email address" v-model='email'>
                        <span class="icon is-small is-left">
                            <i class="fa fa-envelope"></i>
                        </span>
                    </div>
                </div>
                <div class="field">
                    <label>Amount</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="Amount..." v-model='amount'>
                        <span class="icon is-small is-left">
                            <i class="fa fa-envelope"></i>
                        </span>
                    </div>
                </div>

                <hr id='left-line'>
                                
                <div class="field">
                    <label for="card_number">Card Number</label>
                    <input id="card_number" v-model="card.number" type="text" :class="['is-danger' ? cardNumberError : '', 'input']" placeholder='4242424242424242'>
                    <span class="help is-danger" v-show="cardNumberError">
                        {{ cardNumberError }}
                    </span>
                </div>

                <div class="field">
                    <label for="cvc">CVC</label>
                    <input id="cvc" v-model="card.cvc" type="text" class="input" placeholder='123'>
                    <span class="help is-danger" v-show="cardCvcError">
                        {{ cardCvcError }}
                    </span>
                </div>

                <div class="field">
                    <label for="exp_month">Expiry Month</label>
                    
                    <input id="exp_month" v-model="card.exp_month" type="text" :class="['is-danger' ? cardMonthError : '', 'input']" placeholder="MM">
                    <span class="help is-danger" v-show="cardMonthError">
                        {{ cardMonthError }}
                    </span>
                </div>

                <div class="field">
                    <label for="exp_month">Expiry Year</label>
                    <input id="exp_year" v-model="card.exp_year" type="text" :class="['is-danger' ? cardYearError : '', 'input']" placeholder="YY">
                    <span class="help is-danger" v-show="cardYearError">
                        {{ cardYearError }}
                    </span>
                </div>
                    
                <div class="help is-danger" v-if="cardCheckError">
                    <span>{{ cardCheckErrorMessage }}</span>
                </div> 
            </div>
            <div class='column is-4'>         
                <label>Special Note</label>
                <textarea class="textarea" placeholder="What would you like the note to say?" v-model='engravingText'></textarea>
                
                <hr>
                
                <div class="field">
                    <label>Address</label>
                    <input type='text' class='input' v-model='address.street' placeholder='123 Fake St #303'>
                </div>
                <div class="field">
                    <label>City</label>
                    <input type='text' class='input' v-model='address.city' placeholder='San Francisco'>
                </div>
                <div class="field">
                <label>State</label>
                    <input type='text' class='input' v-model='address.state' placeholder='CA'>
                </div>
                <div class="field">
                    <label>Zip</label>
                    <input type='text' class='input' v-model='address.zip' placeholder='94607'>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class='column is-12'>
                <button type="submit" class="button is-primary is-large is-pulled-right" @click.prevent="validate" :disabled="cardCheckSending">
                    <span v-if="cardCheckSending">
                        <i class="fa fa-btn fa-spinner fa-spin"></i> 
                        Ordering...
                    </span>
                    <span v-else>
                        Place Order
                    </span>
                </button>
                <div class="column order-complete" v-if="orderComplete">
                    thanks for your order!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            stripeKey: 'pk_test_UWB3Uz5xAWTWkF0BznCORJgb',
            orderComplete: false,
            // fields
            name: 'Connor Leech',
            email: 'connor@employbl.com',
            amount: '',
            engravingText: 'This is the text to put on the bundle of sticks',
            address: {
                street: '123 Something Lane',
                city: 'San Francisco',
                state: 'CA',
                zip: '94607'
            },

            card: {
                number: '4242424242424242',
                cvc: '123',
                exp_month: '01',
                exp_year: '22'
            },

            // validation
            cardNumberError: null,
            cardCvcError: null,
            cardMonthError: null,
            cardYearError: null,
            cardCheckSending: false,
            cardCheckError: false,
            cardCheckErrorMessage: ''
        }
    },
    methods: {
        validate(){
            console.log(`donate validate...........`)
            this.clearCardErrors();
            let valid = true;
            if(!this.card.number){ valid = false; this.cardNumberError = "Card Number is Required"; }
            if(!this.card.cvc){ valid = false; this.cardCvcError = "CVC is Required"; }
            if(!this.card.exp_month){ valid = false; this.cardMonthError = "Month is Required"; }
            if(!this.card.exp_year){ valid = false; this.cardYearError = "Year is Required"; }
            if(valid){
                this.createToken();
            }
        },
        clearCardErrors(){
            this.cardNumberError = null;
            this.cardCvcError = null;
            this.cardMonthError = null;
            this.cardYearError = null;
        },
        createToken() {
            this.cardCheckError = false;
            window.Stripe.setPublishableKey(this.stripeKey);
            window.Stripe.createToken(this.card, $.proxy(this.stripeResponseHandler, this));
            this.cardCheckSending = true;
        },
        stripeResponseHandler(status, response) {
            this.cardCheckSending = false;
            if (response.error) {
                this.cardCheckErrorMessage = response.error.message;
                this.cardCheckError = true;

                console.error(response.error);
            } else {
                // this.tokenRetrieved = true;
                // this.$emit('paymentEntered', response.id);

                // token to create a charge on our server 
                var token_from_stripe = response.id;

                var request = {
                    name: this.name,
                    email: this.email,
                    amount: this.amount,
                    engravingText: this.engravingText,
                    address: this.address,
                    card: this.card,
                    stripeToken: token_from_stripe
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
                    .then((x) => {
                        var error = x.data.error;
                        var charged = x.data.charged;
                        if (error){
                            console.error(error);
                        } else {
                            console.log(`Order Complete: ${JSON.stringify(charged, null,3)}`)
                            this.orderComplete = true;
                            // this.$router.push({ path: `order-complete/${charged.id}` })
                        }
                    });
            }
        }
    }
}
</script>

<style>
h2 { text-decoration: underline; }
.textarea:not([rows]) { max-height: 110px; min-height: 110px; }
.container { margin-bottom: 30px; }
.column > img { margin-top: 60px; }
.button-field { display: flex; justify-content: center; }
#left-line { margin-top:27px; }
.help-img{
  border-radius: 10px;
  box-shadow: 5px;
}
.input {
    font-size: 1.8em;
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
</style>
