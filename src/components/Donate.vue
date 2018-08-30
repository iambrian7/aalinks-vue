<template>
    <div class="donate">
      <h2>{{ msg }}</h2>
    
      <form id="check-form"  action="/purchases" method="post"  @submit.prevent="tokenize">
          <label>Name: </label>  <input type="text" name="cardholder_name" v-model="name" /> <br>
          <label>Card: </label><input type="text" name="card_number" v-model="cardNumber" /><br>
          <label>Exp Date: </label><input type="text" name="expiration" v-model="expiration" /><br>
          <label>CVC: </label><input type="text" name="security_code" v-model="securityCode" /><br>
          <label>Zip: </label><input type="text" name="postal_code" v-model="postalCode" /><br>
          <input type="hidden" name="token" v-model="token" />
        </form>
        <!-- <button @click="checkout">Checkout</button> -->
    </div>
  </template>
    <!-- <script src="https://checkout.stripe.com/checkout.js"></script> -->
    <script>
      // Stripe.setPublishableKey('pk_test_UWB3Uz5xAWTWkF0BznCORJgb');
    //let stripe = Stripe(`pk_test_UWB3Uz5xAWTWkF0BznCORJgb`),
     //   elements = stripe.elements(),
      //  card = undefined;<!--  -->
      import Vue from 'vue';
// import VueStripeCheckout from 'vue-stripe-checkout';
 
// // base/global options
// // these options can be overridden 
// // by the options in the .open(options) 
// // function.
// const options = {
//   key: 'pk_test_UWB3Uz5xAWTWkF0BznCORJgb',
//   image: 'https://cdn.meme.am/images/100x100/15882140.jpg',
//   locale: 'auto',
//   currency: 'PHP',
//   billingAddress: true,
//   panelLabel: 'Subscribe {{amount}}'
// }
 
// Vue.use(VueStripeCheckout, options);

//  function ajaxJSONPost(url, jsondata, callback){
//             var xhr = new XMLHttpRequest();
//             xhr.open("POST", url, true);
//             xhr.setRequestHeader('Content-Type', 'application/json');
//             xhr.onreadystatechange = function () {
//                 if (xhr.readyState == 4 && xhr.status == 200) {
//                     callback(xhr.responseText);
//                 }
//             }
//             xhr.send(JSON.stringify(jsondata));
//         }
//         function charging() {
//             var data = {};
//             data.amount =donation.amount;
//             data.name = donation.donerName
//             data.email = "bkcgee@gmail.com"
//             // data.address = donateform.address.value
//             data.number =  donation.cardNumber
//             data.exp_month = donation.expMonth
//             data.exp_year = donation.expYear
//             data.cvc = donation.cvc
//             data.stripeToken = donation.stripeToken;
//             ajaxJSONPost('/api/charge',data, function(data){
//                 console.log("charged: " + JSON.stringify(data,null,4))
//             })
//         }


  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Donate component',
        product: {
            name: 'Moby Dick',
            description: 'I love whales',
            amount: 100000 // 100$ in cents
        },
        testStripeKey: process.env.stripekey || `pk_test_UWB3Uz5xAWTWkF0BznCORJgb`,
        name: '',
        cardNumber: '',
        expiration: '',
        securityCode: '',
        postalCode: '',
        token: '',
      }
    },
    computed: {
    stripeData: function() {
      return {
        name: this.name,
        number: this.cardNumber,
        cvc: this.securityCode,
        exp: this.expiration,
        address_zip: this.postalCode,
      };
    },
  },
  methods: {
    // checkout() {
    //   // this.$checkout.close() 
    //   // is also available.
    //   this.$checkout.open({
    //     name: 'Shut up and take my money!',
    //     currency: 'USD',
    //     amount: 99999,
    //     token: (token) => {
    //       // Send the token to your server
    //       // for payment or subscription handling,
    //       // or do whatever you want with it
    //       // I don't really care. 
    //     } 
    //   });
    // },
      tokenize: function(event) {
        Stripe.card.createToken(this.stripeData, function(status, response) {
          if (!response.error) {
            this.token = response.id;
            this.$nextTick(function() {
             // $.rails.handleRemote($(this.$el));
             console.log(`got token: ${this.token}`)
            });
          } else {
            // handle errors
          }
        });
      },
    },
    mounted: function(){
      // card = elements.create('card');
      // card.mount(this.$refs.card);
      window.Stripe.setPublishableKey('pk_test_UWB3Uz5xAWTWkF0BznCORJgb');
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>

  
  
  </style>
  