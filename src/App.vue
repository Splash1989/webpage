<template>
  <div id="app">
    <div v-if="ie > 0">

    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',

  methods: {
    checkUserAgent() {
      if (/Trident/.test(window.navigator.userAgent) || /Internet Explorer/.test(window.navigator.appName)) {
        this.ie = 1;
      }
    }
  },

  mounted() {
    this.checkUserAgent();
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 0px;
}
</style>
