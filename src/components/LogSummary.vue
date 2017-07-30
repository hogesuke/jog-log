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
    created: async function () {
      const hoge = await this.fetchRunners();
      hoge.forEach(a => {
        this.fetchRunnerLogs(a.id);
      });
    },
    methods: {
      ...mapActions([
        'fetchRunners',
        'fetchRunnerLogs'
      ])
    },
    computed: {
      ...mapState([
        'runners',
        'logs'
      ])
    }
  };
</script>

<style scoped>
</style>
