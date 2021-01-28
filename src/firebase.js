import firebase from 'firebase/app'
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmHe1wzQvhRdwtEdda68O_QzDrOpinypI",
    authDomain: "test-project-1-283222.firebaseapp.com",
    databaseURL: "https://test-project-1-283222.firebaseio.com",
    projectId: "test-project-1-283222",
    storageBucket: "test-project-1-283222.appspot.com",
    messagingSenderId: "246906246079",
    appId: "1:246906246079:web:be2e1785046b6665e7c70a",
    measurementId: "G-XC20B4H5DW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();