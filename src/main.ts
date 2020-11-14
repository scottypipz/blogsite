import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import routerStore from './store/modules/writer';
import auth from './api/firebase.api';

let app: unknown;
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = createApp(App)
      .use(store)
      .use(router)
      .mount('#app');

    return;
  }

  if (user) {
    routerStore.commit('setIsLoggedIn', true);
  } else {
    routerStore.commit('setIsLoggedIn', false);
  }
});
