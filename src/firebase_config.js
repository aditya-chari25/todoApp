import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCRXlw3oGldWbpREYWa_NwJFL3WlnEAVYY",
    authDomain: "todoapp-25e40.firebaseapp.com",
    projectId: "todoapp-25e40",
    storageBucket: "todoapp-25e40.appspot.com",
    messagingSenderId: "408784194114",
    appId: "1:408784194114:web:7f583af8da62182d16bbdb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  const db = firebaseApp.firestore();

  export {db};