<template>
   <div scroll="no" id="startpage">
      <VVanta effect="birds" :options=options></VVanta>
      <Navbar></Navbar>
      <Technology></Technology>
   </div>
</template>

<script>
    import Navbar from './Navbar.vue'
    import Technology from './Technology.vue'
     import VVanta from 'vue-vanta';
    export default {
        name: "Startpage",
        components: {
            Navbar,
            Technology,
            VVanta
        },

       data () {
         return {
           options: {
               mouseControls: true,
               touchControls: true,
               minHeight: 1400,
               minWidth: 1400,
               scale: 1.00,
               scaleMobile: 1.00,
               backgroundColor: 0x70809,
               color1: 0xfff00,
               separation: 30.00
           }
         }
       }
    }
</script>


<style>
    #name, #job{
        font-size: 30px;
        text-align: center;
        color: white;
    }
    #startpage{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    #favconarea {
        display: flex;
        margin-top: 10%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        text-align: center;
        font-style: italic;
        font-family: "Baskerville Old Face";
        font-size: 20px;
        margin-left: 30px;
        width: 45%;
        height: 250px;
        background-color: #151515;
        border-radius: 10px;
        opacity: 0.9;
        -ms-user-select: None;
        -moz-user-select: None;
        -webkit-user-select: None;
    }
    #namespace {
        font-family: "Baskerville Old Face";
        -ms-user-select: None;
        -moz-user-select: None;
        -webkit-user-select: None;
    }
</style>