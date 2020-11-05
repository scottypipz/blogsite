import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: () => import('../views/admin/Dashboard.vue'),
    beforeEnter(to, from, next) {
      try {
        next();
      } catch (e) {
        next({
          name: 'AdminLogin',
          query: { redirectFrom: to.fullPath },
        });
      }
    },
    children: [
      {
        path: '/login',
        name: 'AdminLogin',
        component: () => import('../views/writers/Login.vue'),
      },
    ],
  },
];

export default routes;
