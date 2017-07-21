import * as types from './mutation-types';

export default {
  [types.SET_RUNNERS] (state, { data }) {
    state.runners = data;
  }
};

