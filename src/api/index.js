import axios from 'axios';

export function fetchRunners (callback) {
  axios.get('/api/runners')
    .then(res => callback(res.data))
    .catch(e => {
      console.error(e);
    });
}
