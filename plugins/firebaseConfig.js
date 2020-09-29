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
