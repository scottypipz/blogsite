import { createStore } from 'vuex';
import firebase from 'firebase';
import auth from '@/api/firebase.api';
import router from '@/router';
import Cookies from 'js-cookie';

export interface AuthForm {
  email: string;
  password: string;
}

interface State {
  accessToken: string;
  isLoggedIn: boolean;
  user: object;
}

const store = createStore({
  state(): State {
    return {
      accessToken: Cookies.get('accessToken') || '',
      isLoggedIn: localStorage.getItem('blogsite/isLoggedIn') === 'true',
      user: {},
    };
  },
  mutations: {
    setIsLoggedIn(state: State, payload) {
      state.isLoggedIn = payload;
      localStorage.setItem('blogsite/isLoggedIn', payload);
    },
    setAccessToken(state: State, payload) {
      Cookies.set('accessToken', payload);
      state.accessToken = payload;
    },
    setUser(state: State, payload) {
      state.user = payload;
    },
  },
  actions: {
    async login({ commit }, form: AuthForm) {
      try {
        await auth.signInWithEmailAndPassword(form.email, form.password);
        commit('setIsLoggedIn', true);

        return router.replace({ name: 'WriterHome' });
      } catch (e) {
        commit('setIsLoggedIn', false);

        return Promise.reject(new Error('Invalid credentials.'));
      }
    },
    async oauthLogin({ commit }, provider) {
      try {
        console.log('test');
        const result = await auth.signInWithPopup(provider);
        console.log('test');
        console.log(result);
        if (result.credential) {
          const credential = result.credential as firebase.auth.OAuthCredential;
          commit('setAccessToken', credential.accessToken);
        }
        commit('setUser', result.user);
        commit('setIsLoggedIn', true);

        return router.replace({ name: 'WriterHome' });
      } catch (e) {
        commit('setIsLoggedIn', false);

        return Promise.reject(e);
      }
    },
    async register({ commit }, form: AuthForm) {
      try {
        await auth.createUserWithEmailAndPassword(form.email, form.password);
        commit('setIsLoggedIn', true);

        return router.replace({ name: 'WriterHome' });
      } catch (e) {
        const errorCode = e.code;
        const errorMessage = e.message;
        if (errorCode === 'auth/weak-password') {
          return Promise.reject(new Error('Password is weak.'));
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
