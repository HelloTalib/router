<template>
  <div id="app">

      <navbar/>

    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Layout/Navbar.vue'
export default {
  components:{
    Navbar
  }
}
</script>



<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
