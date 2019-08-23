import functions = require('firebase-functions');
import admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
const timeStamp = admin.firestore.Timestamp;

const getDocument = async (collection: string, docId: string) => {
  try {
    const doc = await db
      .collection(collection)
      .doc(docId)
      .get();
    if (doc.exists) {
      console.log('Document data:', doc.data());
      return doc.data();
    } else {
      console.log('No such document!');
      return 'No such document!';
    }
  } catch (error) {
    return `Error getting document: ${error}`;
  }
};

const updateDocument = async (
  collection: string,
  docId: string,
  updatedFields: any
) => {
  try {
    await db
      .collection(collection)
      .doc(docId)
      .update(updatedFields);
    console.log('Document successfully updated!');
    return 'Document successfully updated!';
  } catch (error) {
    console.error('Error updating document: ', error);
    return `Error updating document: ${error}`;
  }
};

const deleteDocument = async (collection: string, docId: string) => {
  try {
    await db
      .collection(collection)
      .doc(docId)
      .delete();
    console.log(`Document ${docId} successfully deleted!`);
    return {
      status: 'Deleted',
      message: `Document ${docId} successfully deleted!`
    };
  } catch (error) {
    console.error('Error removing document: ', error);
    return { error: `Error removing document: ${error}` };
  }
};

const getAllDocuments = async (collection: string) => {
  try {
    const snapshot = await db.collection(collection).get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }
    const dataList: any = [];
    snapshot.forEach(doc => {
      dataList.push(doc.data());
    });
    return dataList;
  } catch (err) {
    console.error('Error getting documents', err);
    return;
  }
};

export default {
  db,
  timeStamp,
  getDocument,
  updateDocument,
  deleteDocument,
  getAllDocuments
};
