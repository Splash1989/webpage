<template>
  <div id="test">
    <div id="impressum">
      <Navbar></Navbar>
      <div>Impressum</div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  name: "Impressum",
  components: {
    Navbar,
  },
};
</script>


<style>
#impressum {
  background-color: red;
  width: 100%;
  height: 100%;
}
</style>