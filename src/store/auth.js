import firebase from 'firebase';
import store from '.';

// https://firebase.google.com/docs/auth/web/manage-users
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.commit('.mutations/USER_DETAILS', user);
  } else {
    store.commit('.mutations/LOGOUT');
  }
});
