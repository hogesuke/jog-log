<template>
  <div id="app">
    <side-bar id="sidebar"></side-bar>
    <router-view id="page-container" :v-if="loaded"></router-view>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import SideBar from './components/SideBar';

  export default {
    name: 'app',
    components: {
      SideBar
    },
    data () {
      return {
        loaded: false
      };
    },
    created: async function () {
      const runners = await this.fetchRunners();
      runners.forEach(async a => {
        await this.fetchRunnerLogs(a.id);
        this.loaded = true;
      });
    },
    methods: {
      ...mapActions([
        'fetchRunners',
        'fetchRunnerLogs'
      ])
    }
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
