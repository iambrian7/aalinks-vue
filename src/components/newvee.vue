<template>
        <div class="new-vee">
      <h2>Responsive Form</h2>
      
          <h1>Test form for vee-validation</h1>
          <form>
                <div class="form-group row no-gutters">
                    <div v-bind:class="{'col-6': true, 'has-error': errors.has('firstName')}">
                        <input id="firstName" name="firstName" type="text" class="form-control" placeholder="First Name" v-model="firstName" v-validate="'required|min:2'">
                        <span class="form-control-feedback" v-if="errors.has('firstName')">{{errors.first('firstName')}}</span>
                        <span v-if="errors.has('firstName')">{{errors.first('firstName')}}</span>
                    </div>
                    <div v-bind:class="{'col-6': true, 'has-danger': errors.has('lastName')}">
                        <input id="lastName" name="lastName" type="text" class="form-control" placeholder="Last Name" v-model="lastName" v-validate="'required|min:2'">
                        <span class="form-control-feedback" v-if="errors.has('lastName')">{{errors.first('lastName')}}</span>
                    </div>
                </div>
                <div v-bind:class="{'form-group': true, 'has-danger': errors.has('email')}">
                    <input id="email" name="email" type="email" class="form-control" placeholder="Your email address" v-model="email" v-validate="'required|email'">
                    <span class="form-control-feedback" v-if="errors.has('email')">{{errors.first('email')}}</span>
                </div>
                <div v-bind:class="{'form-group': true, 'has-danger': errors.has('password')}">
                    <input id="password" name="password" type="password" class="form-control" placeholder="Choose a password" v-model="password" v-validate="'required|min:8|max:32'">
                    <span class="form-control-feedback" v-if="errors.has('password')">{{errors.first('password')}}</span>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" type="button" v-on:click="signUp">Sign Up</button>
                </div>
            </form>
      </div>
        </div>
      </template>
      
      <script>
      export default {
        name: 'new-vee',
        data () {
          return {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
          }
        },
        methods: {
              signUp: function(e) {
                  console.log("signed up..................................")
              }
          }
      }
      </script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style>
      .new-vee form {
          background: #aaa;
          padding: 20px;
          margin: 5px 20px;
      }
      </style>
      