import api from '../api';
import * as types from './mutation-types';

// TODO ふつうactionにもTypesを定義するもの？あとで調べる
export default {
  async fetchRunners ({ commit }) {
    return api.fetchRunners().then(data => {
      commit(types.SET_RUNNERS, { data });
      return data;
    });
  },
  async fetchRunnerLogs ({ commit }, runnerId) {
    return api.fetchRunnerLogs(runnerId).then(data => {
      commit(types.SET_RUNNER_LOGS, { data, runnerId });
      return data;
    });
  },
  async fetchLogs ({ commit }) {
    return api.fetchLogs().then(data => {
      commit(types.SET_LOGS, { data });
      return data;
    });
  }
};

