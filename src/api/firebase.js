import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import settings from './settings';

const firebaseApp = firebase.initializeApp(settings);

export const db = firebaseApp.database();

export default firebaseApp;

