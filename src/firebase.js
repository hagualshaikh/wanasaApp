import * as firebase from 'firebase';

const Config = {
  apiKey: "AIzaSyASkrbHRMeHn40olgmJAxoNSQ__oEDAPT8",
    authDomain: "my-project-1578231198274.firebaseapp.com",
    databaseURL: "https://my-project-1578231198274.firebaseio.com",
    projectId: "my-project-1578231198274",
    storageBucket: "my-project-1578231198274.appspot.com",
    messagingSenderId: "417727273939",
    appId: "1:417727273939:web:2dfc64e4bf81a72d7bad26",
    measurementId: "G-16NTTZSJRN"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
// firebase.analytics();
//   firebase.analytics();
export default firebase;