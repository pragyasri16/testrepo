const firebase = require("firebase/app");
require("firebase/firestore");
require('firebase/firebase-storage');

require("firebase/auth");


if (!firebase.apps.length) {
    
};
firebase.initializeApp(config);

console.log("[Running From Development]")
export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();
