import axios from 'axios';

export function fetchRunners (callback) {
  axios.get('/static/plan.json')
    .then((res) => callback(res.data))
    .catch(e => {
      console.error(e);
    });
}
