import Vue from 'vue';
import Router from 'vue-router';
import RunnerList from '@/components/RunnerList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RunnerList',
      component: RunnerList
    }
  ]
});
