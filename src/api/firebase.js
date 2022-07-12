import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import settings from './settings';
import store from '../store';

const firebaseApp = firebase.initializeApp(settings);

export const db = firebaseApp.database();
export const auth = firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.commit('USER_DETAILS', user);
  } else {
    store.commit('LOGOUT');
  }
});
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebaseApp;

