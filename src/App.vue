<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
body{
  background-color: #f7f8fa;
}
.card {
    margin-bottom: 24px;
    padding: 24px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 12px #ebedf0;
}
</style>
