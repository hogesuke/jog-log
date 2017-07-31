<template>
  <log-summary></log-summary>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import LogSummary from '../components/LogSummary';

  export default {
    components: {
      LogSummary
    },
    data () {
      return {
      };
    },
    created: async function () {
      const runners = await this.fetchRunners();
      runners.forEach(a => {
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
    }
  };
</script>

<style scoped>
</style>
