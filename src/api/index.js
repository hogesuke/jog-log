import axios from 'axios';

export default {
  async fetchRunners () {
    return axios.get('/api/runners')
      .then(res => res.data)
      .catch(e => {
        console.error(e);
      });
  },
  async fetchRunnerLogs (runnerId) {
    return axios.get(`/api/runners/${runnerId}/logs`)
      .then(res => res.data)
      .catch(e => {
        console.error(e);
      });
  },
  async fetchLogs () {
    return axios.get(`/api/logs`)
      .then(res => res.data)
      .catch(e => {
        console.error(e);
      });
  }
};
