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
