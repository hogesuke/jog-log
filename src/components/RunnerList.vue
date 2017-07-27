<template>
  <div class="hello">
    <ul>
      <li v-for="runner in runners">{{ runner.name }}</li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    data () {
      return {
      };
    },
    mounted: () => {
//      debugger;
//      this.fetchRunners();
      debugger;
      this.$store.dispatch('fetchRunners');
    },
    methods: {
      ...mapActions([
        'fetchRunners'
      ])
    },
    computed: {
      ...mapState([
        'runners'
      ])
    }
  };
</script>

<style scoped>
</style>
