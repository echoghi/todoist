import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const config = {
    apiKey: process.env.REACT_APP_FIREBASEKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
};

class Firebase {
    constructor() {
        firebase.initializeApp(config);
        this.db = firebase.database();
        this.firestore = firebase.firestore();
    }
}

export default new Firebase();
