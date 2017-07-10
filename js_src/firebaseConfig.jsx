import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBGufEidAGOUL087XJBzYV_NKfjJ-mRq8M",
    authDomain: "onlyissues.firebaseapp.com",
    databaseURL: "https://onlyissues.firebaseio.com",
    projectId: "onlyissues",
    storageBucket: "onlyissues.appspot.com",
    messagingSenderId: "990747122782"
};

var fbapp = firebase.initializeApp(config);

export var fbapp;
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
