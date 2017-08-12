<template>
  <div>
    <div class="tools">
      <el-button icon="plus" @click="handleOpenFormClick">ログの追加</el-button>
    </div>

    <el-dialog title="ログの追加" :visible.sync="dialogFormVisible">
      <el-form class="log-form" label-width="120px">
        <el-form-item label="ランナー">
          <el-select multiple v-model="form.runner">
            <el-option
              v-for="runner in runners"
              :key="runner.id"
              :label="runner.name"
              :value="runner.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日付">
          <el-date-picker type="date" placeholder="Pick a date" v-model="form.date"></el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">キャンセル</el-button>
        <el-button type="primary" @click="handleConfirmClick">追加</el-button>
      </span>
    </el-dialog>

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
          <el-tag
            v-for="runner in props.row.runners"
            :key="runner.id"
            type="primary"
            class="runner-tag">{{ runner.name }}
          </el-tag>
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
        form: {
          runner: [],
          date: null
        },
        dialogFormVisible: false
      };
    },
    created: function () {
      this.fetchLogs();
    },
    methods: {
      findRunner (id) {
        return this.$store.getters.findRunner(id);
      },
      handleOpenFormClick () {
        this.dialogFormVisible = true;
      },
      handleConfirmClick () {
        this.dialogFormVisible = false;
        // TODO: 登録処理
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

  .tools {
    margin-bottom: 10px;
  }

  .log-form {

  }
</style>
