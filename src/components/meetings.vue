<template>
  <div class="meetings">
   <div class="aaflex-container">
   <div class="aaflex-list item">

   <ol>
            <li
             v-for="(a, index) in meetings" 
             class='acct-todo-item' 
              v-bind:data-key='a.name'
              > {{ a.name }}
               <!--<router-link to="{{a.slug"}}>{{ a.name }}</router-link>-->
               </li>
         </ol>
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
  props: ["meetings"],
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

 #accts-todo-container { display: flex; justify-content: space-around;}
        .accts-list { padding: 10px; border: 1px solid grey; flex: 1; background: #666;}
        .accts-list h3 {border-bottom: 1px solid red; margin: 5px; background: #aaa; text-align: center;}
        .acct-todo-item { padding: 5px; border: 1px solid grey; margin: 5px; background: #fff; text-align: left;}
        .accts-todo-header {padding: 5px; font-size: 2.0em; background: #ddd; display: flex;}
        #accts-todo-date {padding: 5px; font-size: 0.6em; flex: 0 0 200px; color: red;}
        .due {background:#fd9d9d;}
</style>
