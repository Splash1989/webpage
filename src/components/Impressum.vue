<template>
<div>
    <div id="impressum">
        Impressum
    </div>
    <Navbar></Navbar>
</div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
        name: "Impressum",
        components: {
            Navbar
        }
    }
</script>


<style>

#impressum {
    background-color: white;
}
</style>