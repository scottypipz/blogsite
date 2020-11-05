import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  // Public routes
  {
    path: '/writers',
    name: 'WriterIndex',
    component: () => import('@/views/writers/Index.vue'),
  },
  {
    path: '/writers/login',
    name: 'WriterLogin',
    component: () => import('@/views/writers/Login.vue'),
  },
  {
    path: '/writers/register',
    name: 'WriterRegister',
    component: () => import('@/views/writers/Register.vue'),
  },

  // Private routes
  // {
  //   path: '/writers/:username',
  //   name: 'WriterHome',
  //   component: () => import('../views/writers/Home.vue'),
  //   beforeEnter(to, from, next) {
  //     try {
  //       next();
  //     } catch (e) {
  //       next({
  //         name: 'WriterLogin',
  //         query: { redirectFrom: to.fullPath },
  //       });
  //     }
  //   },
  //   children: [
  //     {
  //       path: '/articles/create',
  //       name: 'WriterArticleCreate',
  //       component: () => import('../views/writers/articles/Create.vue'),
  //     },
  //   ],
  // },
];

export default routes;
