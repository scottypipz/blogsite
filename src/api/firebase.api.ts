import firebase from 'firebase/app';
import 'firebase/auth';

// firebase init - add your own config here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDcenbLyuy_ODyuq72o9HlY70DdWdJ-sYk',
  authDomain: 'blogsite-2ad37.firebaseapp.com',
  databaseURL: 'https://blogsite-2ad37.firebaseio.com',
  projectId: 'blogsite-2ad37',
  storageBucket: 'blogsite-2ad37.appspot.com',
  messagingSenderId: '889116126398',
  appId: '1:889116126398:web:82dccbc73390ff3307c2ef',
  measurementId: 'G-506M3FS512',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
auth.useDeviceLanguage();

export default auth;
