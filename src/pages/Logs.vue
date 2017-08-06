<template>
  <div>
    <el-table :data="normalizedLogs">
      <el-table-column
        label="日付"
        prop="date">
      </el-table-column>
      <el-table-column
        label="合計走行距離"
        prop="totalMileage">
      </el-table-column>
      <el-table-column
        label="参加者数"
        prop="runnerCount">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    components: {
    },
    data () {
      return {
      };
    },
    created: function () {
      this.fetchLogs();
    },
    methods: {
      ...mapActions([
        'fetchLogs'
      ])
    },
    computed: {
      normalizedLogs () {
        const result = this.logs.reduce((result, a) => {
          const targetDateLogs = result.find(b => b[0].date === a.date);
          if (targetDateLogs) {
            targetDateLogs.push(a);
          } else {
            result.push([a]);
          }
          return result;
        }, []);

        return result.map(a => {
          const row = { date: a[0].date, totalMileage: 0, runnerCount: 0, logs: [] };
          a.forEach(log => {
            row.logs.push(log);
            row.totalMileage += log.mileage;
            row.runnerCount++;
          });
          return row;
        });
      },
      ...mapState(['logs'])
    }
  };
</script>

<style scoped>
</style>
