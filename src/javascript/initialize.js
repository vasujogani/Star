// initialize.js
// Initialize Firebase app for use with Firebase SDK and API functions, primarily data storage in the Realtime Database

// Initialize Firebase
var config = {
      apiKey: "AIzaSyBxupWBF6M4dVv15fZ1Oxf_EDi4FJ5iAzQ",
      authDomain: "star-5c536.firebaseapp.com",
      databaseURL: "https://star-5c536.firebaseio.com",
      projectId: "star-5c536",
      storageBucket: "star-5c536.appspot.com",
      messagingSenderId: "139695047939"
};
firebase.initializeApp(config);
var database = firebase.database();
