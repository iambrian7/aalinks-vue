<template>
  <div class="hello">
  <h1>{{ msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.class {
   
    background-color: #cccccc;
    width: 100wh;
    height: 100vh;
}

</style>
