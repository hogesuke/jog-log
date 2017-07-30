<template>
  <div>
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
    created: function () {
      this.fetchRunners();
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
