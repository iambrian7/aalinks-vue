<template>
  <div class="meetings">
   <div class="aaflex-container">
   <div class="aaflex-list item">
   list
   </div>
   <div class="aaflex-map item">
   map
   </div>
   </div>
    
  </div>
</template>

<script>
export default {
  name: 'meetings',
  data () {
    return {
      msg: 'Welcome to meetings'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.meetings { width: 100wh; height: 100vh; background: #ccc;
padding: 0; margin: 0;}
.aaflex-container {display: flex; align-content: flex-start; width: 100%}
.aaflex-list { flex: 0 0 300px; background: yellow;}
.aaflex-map { flex:1 0 auto; background: green;}
.item {height: 90vh;}
</style>
