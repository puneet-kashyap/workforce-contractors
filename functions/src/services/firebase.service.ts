import functions = require('firebase-functions');
import admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
const timeStamp = admin.firestore.Timestamp;

export default {
  db,
  timeStamp
};
