import { createStore } from 'vuex';
import adminStore from './modules/admin';
import writerStore from './modules/writer';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    adminStore,
    writerStore,
  },
});
