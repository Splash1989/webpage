<template>
<div>
    <div class="hamburgerpos">
      <input type="checkbox" id="hamburg">
      <label for="hamburg" class="hamburg" @click="animateNavContent">
         <span class="line"></span>
         <span class="line"></span>
         <span class="line"></span>
      </label>
    </div>
   <div class="topnav" :class="{active: isToggle}">
     <div class="row">
       <div id="myLinks">
          <a href="#about">about me</a>
          <a href="#memory">memory</a>
          <a @click="$router.push('/impressum')" href="#impressum">impressum</a>
       </div>
    </div>
   </div>
   <Technology></Technology>
</div>
</template>

<script>

import Technology from './Technology.vue'

export default {
data () {
    return {
      isToggle: false
    }
  },

  components: {
    Technology
  },

  methods: {
    animateNavContent() {
        this.isToggle = !this.isToggle;
    }
  }
}
</script>

<style>
.topnav.active {
  transform: translate(-50%);
  opacity: 1;
  pointer-events: all;
  margin-top: 10px;
}
.topnav {
  overflow: hidden;
  position: absolute;
  opacity: 0;
  right: 0;
  pointer-events: none;
  transition: 1s ease-in;
  margin-top: 10px;
}
.navparent {
    position: relative;
}
.hamburgerpos {
    position: absolute;
    margin-right: 20px;
    right: 0px;
    z-index: 10;
    margin-top: 10px;
}
.hamburg {
    position: absolute;
}
.mobile-container {
  max-width: 480px;
  margin: auto;
  background-color: #555;
  height: 500px;
  color: white;
  border-radius: 10px;
}

.topnav a {
  float: left;
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
  
  font-size: 20px;
  transition: all 0.5s;
}

.topnav a.icon {
  float: right;
}

.topnav a:hover {
  float: left;
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
  transform: scale(1.3);
  transition: all 0.5s;
}


label.hamburg { 
   display: block;
   width: 75px; 
   height: 47px; 
   position: relative; 
   margin-left: auto; margin-right: auto;
   border-radius: 4px; 
   opacity: 0.7;
}

input#hamburg {display:none}

.line { 
   position: absolute; 
   left:10px;
   height: 4px; 
   width: 55px; 
   background: #ddd; 
   border-radius: 2px;
   display: block; 
   transition: 1.5s; 
   transform-origin: center; 
}

.line:nth-child(1) { top: 12px; }
.line:nth-child(2) { top: 24px; }
.line:nth-child(3) { top: 36px; }

#hamburg:checked + .hamburg .line:nth-child(1){
   transform: translateY(12px) rotate(-45deg);
}

#hamburg:checked + .hamburg .line:nth-child(2){
   opacity:0;
}

#hamburg:checked + .hamburg .line:nth-child(3){
   transform: translateY(-12px) rotate(45deg);
}
</style>

