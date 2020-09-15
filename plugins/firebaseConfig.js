// const firebase = require("firebase/app");
// require("firebase/firestore"); //if using firebase database
// require ("firebase/storage");
// //require("firebase/messseging");
// require("firebase/auth");
// //your web app's Firebase configuration

// if(!firebase.apps.length) {
//     const config ={

//     };
//     firebase.initializeApp(config);
// }
// export const db = firebase.firestore();
// export const storage = firebase.storage();
// export const auth = firebase.auth();

// const firebase = require("firebase/app");
// require("firebase/firestore");
// require('firebase/firebase-storage');
// require("firebase/auth");


if (!firebase.apps.length) {
    
};
firebase.initializeApp(config);

console.log("[Running From Development]")
export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();

const firebase = require('firebase/app')
require('firebase/firestore')
require('firebase/storage')
require('firebase/auth')

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyAE8AFSACJjjDNDlLn6R4DExpF9H5H2W8U',
    authDomain: 'job-hiring-69693.firebaseapp.com',
    databaseURL: 'https://job-hiring-69693.firebaseio.com',
    projectId: 'job-hiring-69693',
    storageBucket: 'job-hiring-69693.appspot.com',
    messagingSenderId: '956510220822',
    appId: '1:956510220822:web:c31420ea6260ed40eb7b37',
  }
  firebase.initializeApp(config)
}

export const db = firebase.firestore()
export const storage = firebase.storage()
export const auth = firebase.auth()
