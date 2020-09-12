<<<<<<< HEAD
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
=======
const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()

exports.customeClaims = functions.https.onCall(async (data, ctx) => {
  try {
    let sett = await admin.auth().setCustomUserClaims(data.uid, data.role)
  } catch (error) {
    console.log(error)
  }
})
>>>>>>> c5234dc3ff5143d0d3cfc86a81b19be139908c71
