import firebase from 'firebase';
import settings from './settings';

const firebaseApp = firebase.initializeApp(settings);

export const db = firebase.database();
export const PROVIDER = new firebase.auth.GoogleAuthProvider();

export default firebaseApp;

