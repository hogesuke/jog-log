<template>
  <div>
    <table>
      <tr v-for="runner in runners">
        <td>{{ runner.name }}</td>
        <td>{{ totalDistance(runner.id) }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    data () {
      return {};
    },
    methods: {
      totalDistance (runnerId) {
        const logs = this.runnerLogs[runnerId];
        if (logs) {
          return logs.reduce((sum, a) => sum + a.distance, 0);
        } else {
          return 0;
        }
      }
    },
    computed: {
      ...mapState([
        'runners',
        'runnerLogs'
      ])
    }
  };
</script>

<style scoped>
</style>
