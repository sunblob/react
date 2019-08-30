import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAxYjo4PU_ugBKwLoSoLZ1FeBkqL-nxt2I",
    authDomain: "react-project-92cb0.firebaseapp.com",
    databaseURL: "https://react-project-92cb0.firebaseio.com",
    projectId: "react-project-92cb0",
    storageBucket: "",
    messagingSenderId: "580953327895",
    appId: "1:580953327895:web:945c31bab3b86fea"
};

firebase.initializeApp(config);  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;