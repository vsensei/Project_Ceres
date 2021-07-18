import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB45N2EOqF54MfaYIjFwP0jZMV7ZVqmdBU',
  authDomain: 'projectceres-4d42f.firebaseapp.com',
  projectId: 'projectceres-4d42f',
  storageBucket: 'projectceres-4d42f.appspot.com',
  messagingSenderId: '565862011522',
  appId: '1:565862011522:web:486b74eff3de7c2a8b1a9b',
  measurementId: 'G-T9XB6DMLN9',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { userName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ userName, email, createdAt, ...additionalData });
    } catch (e) {
      console.log('error creating user', e.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  CollectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(CollectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
