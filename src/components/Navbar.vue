<template>
<div class="">
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
          <a href="#news">About me</a>
          <a href="#contact">Play Memory</a>
          <a href="#about">Impressum</a>
       </div>
    </div>
   </div>
</div>
</template>

<script>
export default {

data () {
    return {
      isToggle: false
    }
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
  transform: translate(10%);
  opacity: 1;
}
.topnav {
  overflow: hidden;
  position: absolute;
  opacity: 0;
  transition: opacity 0.5s, transform 0.5s;
}
.navparent {
    position: relative;
}
.hamburgerpos {
    position: absolute;
    margin-right: 20px;
    right: 0px;
    z-index: 10;
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
  font-size: 17px;
}

.topnav a.icon {
  float: right;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
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
   background: white; 
   border-radius: 2px;
   display: block; 
   transition: 0.5s; 
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

