<template>
  <div class="navigation">
    <nav>
    <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/meetings">Meetings</router-link></li>
     <li><router-link to="/addmeeting">New Meetings</router-link></li>
      <li><router-link to="/meetinglist">Meeting List</router-link></li>
    </ul>
    </nav>
    </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      msg: 'Navigation'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
nav {background: white; border: 1px solid black; color: black;}
ul {
  list-style: none;
}
nav {
  display: flex;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
}

nav ul {
  display: flex;
}
nav ul:first-child {
  flex: 3;
}

nav ul:last-child {
  flex: 2;
}
nav ul li {
  flex: 1;
  color: black;
  text-align: center;
}
@media screen and (max-width: 767px) {
  nav {
    flex-direction: column;
  }
  
}
</style>

