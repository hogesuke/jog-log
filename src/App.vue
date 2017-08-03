<template>
  <div id="app">
    <side-bar id="sidebar"></side-bar>
    <router-view id="page-container"></router-view>
  </div>
</template>

<script>
  import SideBar from './components/SideBar';

  export default {
    components: {
      SideBar
    },
    name: 'app'
  };
</script>

<style lang="scss">
#app {
  display: flex;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  #sidebar {
    width: 250px;
  }

  #page-container {
    max-width: 1200px;
    min-width: 900px;
    padding: 15px 15px 15px 20px;
  }
}
</style>
