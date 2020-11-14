import auth from '@/api/firebase.api';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  // Public routes
  {
    path: '/writers/authentication',
    name: 'WriterAuth',
    component: () => import('@/views/writers/Auth.vue'),
    meta: {
      withFooter: false,
    },
    beforeEnter(to, from, next) {
      try {
        if (auth.currentUser) {
          throw new Error('Already logged in');
        }
        next();
      } catch (e) {
        next({
          name: 'WriterHome',
          query: { redirectFrom: to.fullPath },
        });
      }
    },
  },

  // Private routes
  {
    path: '/writers',
    name: 'WriterHome',
    component: () => import('../views/writers/Home.vue'),
    beforeEnter(to, from, next) {
      try {
        if (!auth.currentUser) {
          throw new Error('Unauthorized');
        }
        next();
      } catch (e) {
        next({
          name: 'WriterAuth',
          query: { redirectFrom: to.fullPath },
        });
      }
    },
    children: [
      {
        path: '/articles/create',
        name: 'WriterArticleCreate',
        component: () => import('../views/writers/articles/Create.vue'),
      },
    ],
  },
];

export default routes;
