import * as api from '../api';
import * as types from './mutation-types';

export default {
  fetchRunners ({ commit }) {
    api.fetchRunners(data => {
      commit(types.SET_RUNNERS, { data });
    });
  }
};

