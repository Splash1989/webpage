<template>
   <div id="startpage">
      <Navbar></Navbar>
      <!--<technology></technology>-->
   </div>
</template>

<script>
    import Navbar from './Navbar.vue'
    export default {
        name: "Startpage",
        components: {
            Navbar
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