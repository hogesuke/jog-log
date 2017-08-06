<template>
  <div>
    <el-table :data="normalizedLogs">
      <el-table-column
        label="日付" type="expand">
        <template scope="props">
          <el-table
            :data="props.row.logs"
            :show-header="true">
            <el-table-column
              label="名前"
              prop="runner.name">
            </el-table-column>
            <el-table-column
              label="走行距離"
              prop="mileage">
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
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
      <el-table-column
        label="参加者">
        <template scope="props">
          <el-tag v-for="runner in props.row.runners" type="gray" class="runner-tag">{{ runner.name }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex';

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
      findRunner (id) {
        return this.$store.getters.findRunner(id);
      },
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
          const row = { date: a[0].date, totalMileage: 0, runnerCount: 0, runners: [], logs: [] };
          a.forEach(log => {
            log.runner = this.findRunner(log.runnerId);
            row.runners.push(log.runner);
            row.logs.push(log);
            row.totalMileage += log.mileage;
            row.runnerCount++;
          });
          return row;
        });
      },
      ...mapState([
        'logs',
        'runners'
      ])
    }
  };
</script>

<style scoped>
  .runner-tag:not(:first-child) {
    margin-left: 5px;
  }
</style>
