import * as types from './mutation-types';

import _ from 'lodash';

export default {
  [types.SET_RUNNERS] (state, { data }) {
    state.runners = data;
  },
  [types.SET_RUNNER_LOGS] (state, { data, runnerId }) {
    state.runnerLogs = _.assign({}, state.runnerLogs, { [runnerId]: data });
  }
};

