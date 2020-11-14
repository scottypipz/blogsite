import store from '@/store/modules/writer';
import firebase from 'firebase/app';

const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

const handleGithubLogin = () => {
  store.dispatch('oauthLogin', githubAuthProvider);
};

const handleGoogleLogin = () => {
  store.dispatch('oauthLogin', googleAuthProvider);
};

const handleFacebookLogin = () => {
  store.dispatch('oauthLogin', facebookAuthProvider);
};

export default {
  handleFacebookLogin,
  handleGithubLogin,
  handleGoogleLogin,
};
