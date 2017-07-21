import * as api from '../api';
import * as types from './mutation-types';

export const fetchRunners = ({ commit }) => {
  api.fetchRunners(data => {
    commit(types.SET_RUNNERS, { data });
  });
};

