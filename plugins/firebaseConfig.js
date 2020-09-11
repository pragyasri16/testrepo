const firebase = require("firebase/app");
require("firebase/firestore"); //if using firebase database
require ("firebase/storage");
//require("firebase/messseging");
require("firebase/auth");
//your web app's Firebase configuration

if(!firebase.apps.length) {
    const config ={

    };
    firebase.initializeApp(config);
}
export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();