var greetings = require('./User.js')
// sayHelloInEnglish: function() {
//     return "HELLO";
//   },

// sayHelloInSpanish: function() { return "Hola"; } 
console.log(greetings.sayHelloInEnglish())
console.log(greetings.sayHelloInSpanish())

const {test,password} = {test:"hello to test value",password: "123456"}

console.log("test: " + test)

console.log("password: " + password)