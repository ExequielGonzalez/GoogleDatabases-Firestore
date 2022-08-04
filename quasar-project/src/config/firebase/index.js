import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBiVXfdVFwv4NJ6aY0rCYs8m47-Nf8B_sE',
  authDomain: 'todo-list-ef0df.firebaseapp.com',
  databaseURL: 'https://todo-list-ef0df-default-rtdb.firebaseio.com',
  projectId: 'todo-list-ef0df',
  storageBucket: 'todo-list-ef0df.appspot.com',
  messagingSenderId: '923260947076',
  appId: '1:923260947076:web:40ee92ea4a48ddc2bc90d1',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const realtimeDB = getDatabase(firebaseApp);
// const firestoreDB = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);
// const functions = getFunctions(firebaseApp);

// firebase.auth().languageCode = 'es'

export { firebaseApp, realtimeDB };
