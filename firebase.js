const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyCqpH7_ixCaQZM3P2fnHSlUeKUCXgNkhUk",
    authDomain: "express-firebase-fd39c.firebaseapp.com",
    projectId: "express-firebase-fd39c",
    storageBucket: "express-firebase-fd39c.appspot.com",
    messagingSenderId: "711553963398",
    appId: "1:711553963398:web:f9a1ac33cebd1544754807"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.firestore();

    // console.log(auth)

module.exports = auth;