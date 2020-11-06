import { createStore } from 'vuex';
import auth from '@/api/firebase.api';
import router from '@/router';

export interface AuthForm {
  email: string;
  password: string;
}

interface State {
  isLoggedIn: boolean;
}

const store = createStore({
  state(): State {
    return {
      isLoggedIn: localStorage.getItem('blogsite/isLoggedIn') === 'true',
    };
  },
  mutations: {
    setIsLoggedIn(state: State, payload) {
      state.isLoggedIn = payload;
      localStorage.setItem('blogsite/isLoggedIn', payload);
    },
  },
  actions: {
    async login({ commit }, form: AuthForm) {
      try {
        await auth.signInWithEmailAndPassword(form.email, form.password);
        commit('setIsLoggedIn', true);

        return router.push({ name: 'WriterHome' });
      } catch (e) {
        commit('setIsLoggedIn', false);

        return Promise.reject(new Error('Invalid credentials.'));
      }
    },
    async register(state, form: AuthForm) {
      try {
        const response = await auth.createUserWithEmailAndPassword(form.email, form.password);

        return Promise.resolve(response);
      } catch (e) {
        const errorCode = e.code;
        const errorMessage = e.message;
        if (errorCode === 'auth/weak-password') {
          return Promise.reject(new Error('Invalid credentials.'));
        }

        return Promise.reject(new Error(errorMessage));
      }
    },
    async logout({ commit }) {
      try {
        await auth.signOut();
        commit('setIsLoggedIn', false);

        return router.push({ name: 'WriterAuth' });
      } catch (e) {
        commit('setIsLoggedIn', true);

        return Promise.reject(new Error('Unable to logout.'));
      }
    },
  },
});

export default store;
