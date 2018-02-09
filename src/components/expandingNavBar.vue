<template>
<div class="expanding-nav">
    <link href='https://fonts.googleapis.com/css?family=Monda|Ultra' rel='stylesheet' type='text/css'>

    <div id="nav_wrap">
        <h1 id="logo">LOGO</h1>
        <nav role='navigation'>
            <a href="#" id="home">Home</a>
            <a href="#" id="about">About</a>
            <a href="#" id="clients">Clients</a>
            <a href="#" id="contact">Contact Us</a>
        </nav>  
        <div id="social">
            <div class="icon-facebook-sign"></div>
            <div class="icon-twitter-sign"></div>
        </div><!--/social-->
    </div><!--/nav_wrap-->
    
<section id="homesec" class="">
    <div id="mainlogo">
    LOGO<br />
    <div id="mainsocial">
        <div class="icon-facebook-sign"></div>
        <div class="icon-twitter-sign"></div>  
    </div>
    </div>
</section><!--/home-->
    
<section id="aboutsec" class="bodysec">
<div id="copy">
    <h1>About</h1>
    <img src="http://placekitten.com/400/400" class="right">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi adipisci voluptas mollitia veritatis nesciunt soluta non minus eum quis odit iusto velit. Mollitia asperiores nam veniam aut eaque libero enim esse sunt. Id explicabo obcaecati minus animi at doloremque ratione atque sunt. Alias officiis quaerat eveniet reiciendis minima sequi accusamus ad mollitia optio totam fuga dolorem quasi facere ipsam blanditiis perspiciatis voluptatum. Temporibus quia eligendi in voluptate asperiores voluptatibus delectus consectetur eum necessitatibus perferendis aut hic vitae vel provident magni ipsa maxime. Hic harum a odit possimus laboriosam nihil qui? Inventore odio ad voluptatem explicabo accusamus omnis eum magnam saepe?Lorem ipsum dolor sit amet, consectetur adipisicing elit!<p></div>
</section>
            
<section id="clientsec" class="bodysec">
<div id="copy">
    <h1>Clients</h1>
    <div class="center large"><div class="icon-quote-left"></div> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi adipisci voluptas. <div class="icon-quote-right"></div></div>
    <div id="iconrow">
        <span class="icon-stack">
        <i class="icon-circle icon-stack-base"></i>
        <i class="icon-lightbulb icon-light"></i>
        </span>
                        <span class="icon-stack">
        <i class="icon-circle icon-stack-base"></i>
        <i class="icon-calendar icon-light"></i>
        </span>
                    
        <span class="icon-stack">
        <i class="icon-circle icon-stack-base"></i>
        <i class="icon-cogs icon-light"></i>
        </span>
    </div>
</div>

</section>
            
<section id="contactsec">
<div id="copy">
    <h1>Contact Us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quasi optio deserunt consectetur aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis porro accusantium aut ipsa eligendi quos perferendis veniam debitis rerum corporis nihil odit minus ullam deleniti dolorum! Nam itaque ipsum reiciendis. voluptate!</p>
</div>

</section>
</div>
</template>

<script>

    /*
A quick mock-up I made after seeing the nav bar at this site: http://snipcart.com/
*/


var $window   = $(window),
    height    = $window.height(),
    width     = $window.width(),
    navheight = $('#nav_wrap').height();

function sticky(){
  var scrollTop = $window.scrollTop();
  if (scrollTop > (height - navheight)) {
    $('#nav_wrap').addClass('sticky');
    $('nav').addClass('nav_animate');
    setTimeout(function(){
      $('#logo').css({
        'left': 3 + '%', 
        'transition':'.5s'
      });     
      $('#social').css({
        'right': 5 + '%', 
        'transition':'.5s'
      });
    }, 200);
    
  } else {
    $('#nav_wrap').removeClass('sticky');
    $('nav').removeClass('nav_animate');
    setTimeout(function(){
      $('#logo').css({
        'left':-150, 
        'transition':'.5s'
      });     
      $('#social').css({
        'right':-150, 
        'transition':'.5s'
      });
    }, 200);
  }
} 

$window.on('scroll', sticky);  

//Navigational Menu
$('nav a').click(function(a){
  var menuPlace = $(this).index();
  a.preventDefault();
  $('html, body').animate({
    scrollTop : $('section').eq(menuPlace).offset().top - $('nav').height()
  }, 700);
});



export default {
name: 'expanding-nav',
data () {
    return {
    msg: 'Navigation'
    }
}
}
</script>
      
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
  -mox-box-sizing: border-box;
}

html, body {
  height: 100%;
}

h1 {
  font-size: 100px;  
  margin: 20px 0;
  color: #505050;
}

body {
  font-family: helvetica, arial, sans-serif;
}

section {
  height: 100%;
  min-height: 250px;
}

.bodysec {
  min-height: 700px;
}
 
#homesec {
  background:
 url(http://farm8.staticflickr.com/7129/6962272018_69a32924f9_h.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin-bottom: 80px;
}
 
#nav_wrap {
  background: white;
  width: 100%;
  height: 65px;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  z-index: 100;
  opacity: .9;
  box-shadow: 0px 1px 4px #343434;
}

nav { 
  font-family: 'Monda';
  width: 100%;
  margin: 0 auto;
  transition: .5s;
}

.nav_animate {
  width: 70%;
  transition: .5s;
}

nav a {
  display: inline-block;
  font-size: 21px;
  text-decoration: none;
  color: #505050;
  width: 25%;
  text-align: center;
  line-height: 65px;
  text-transform: uppercase;
}

nav a:nth-child(1) {
  border-top: 5px solid #80BB80;
}
nav a:nth-child(2) {
  border-top: 5px solid #9B5E5E;
}
nav a:nth-child(3) {
  border-top: 5px solid #5656B3;
}
nav a:nth-child(4) {
  border-top: 5px solid #aaa;
}

nav a:hover {
  border-top: 5px solid #4a4a4a;
  transition: .4s;
}

#test {
  z-index: 99;
  background: white;
  position: fixed;
  top: 0;
}

.sticky {
  position: fixed !important;
  top: 0;
}

#logo, #social {
  position: absolute;
  color: black;
  z-index: 100;
  transition: 1s;
  line-height: 80px;
}

#logo {
  left: -150px;
  font-size: 25px;
  background: #4a4a4a;
  height: 65px;
  line-height: 65px;
  padding: 0 10px;
  margin: 0;
  color: #fff;
  cursor: pointer;
  font-weight: bolder;
}

#social {
  top: -7px;
  right: -150px;
  font-size: 35px;
  z-index: 100; 
  color: #4a4a4a;
}

#mainlogo {
  font-size: 150px;
  color: white;
  border: 10px solid white;
  display: inline-block;
  padding: 35px;
  position: absolute;
  height: 225px;
  line-height: 100px;
  top: 50%;
  margin-top: -180px;
  left: 50%;
  width: 600px;
  text-align: center;
  margin-left: -300px;
  text-shadow: 1px 2px 1px #000;
  box-shadow: 1px 2px 1px #000;
}

#mainsocial {
  font-size: 35px;
  line-height: 80px;
}

.right {
  position: relative;
  float: right;
}

img.right {
  margin: 0 0 0 40px;
  border-radius: 200px;
}

#copy {
  padding: 20px 80px;
  font-size: 24px;
  text-align: justify;
}

#iconrow {
  font-size: 130px;
  text-align: justify;
  margin-top: 50px;
  color: #505050;
}

#iconrow::after {
  content:'';
  display: inline-block;
  width: 100%;
}

.center {
  text-align: center;
}

.large {
  font-size: 45px;
}

hoverblk {
  transition: .3;
}

.hoverblk:hover {
  color: #5656B3;
  transition: .3s;
}
</style>
      
      