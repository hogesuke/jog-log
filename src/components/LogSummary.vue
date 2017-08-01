<template>
  <div>
    <el-table :data="summary">
      <el-table-column type="expand">
        <template scope="props">
          <el-table
            :data="props.row.logs"
            :show-header="true">
            <el-table-column
              label="date"
              prop="date">
            </el-table-column>
            <el-table-column
              label="mileage"
              prop="mileage">
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column
        label="name"
        prop="name">
      </el-table-column>
      <el-table-column
        label="total mileage"
        prop="totalMileage">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    data () {
      return {};
    },
    methods: {
      totalMileage (runnerId) {
        const logs = this.runnerLogs[runnerId];
        if (logs) {
          return logs.reduce((sum, a) => sum + a.mileage, 0);
        } else {
          return 0;
        }
      }
    },
    computed: {
      summary () {
        // TODO: サーバサイドでtotalMileageをセットしたい
        return this.runners.map(a => {
          a.totalMileage = this.totalMileage(a.id);
          a.logs = this.runnerLogs[a.id];
          return a;
        });
      },
      ...mapState([
        'runners',
        'runnerLogs'
      ])
    }
  };
</script>

<style scoped>
</style>
