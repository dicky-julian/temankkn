import firebase from 'firebase';

var firebaseInitialize = {
    apiKey: "AIzaSyCu9IxXBJDTmXHOqDG6MV04cyQ0tuSJM5Q",
    authDomain: "hilihkutil.firebaseapp.com",
    databaseURL: "https://hilihkutil.firebaseio.com",
    projectId: "hilihkutil",
    storageBucket: "hilihkutil.appspot.com",
    messagingSenderId: "398834675962",
    appId: "1:398834675962:web:62428a4bf25624eb359943"
};

var config = firebase.initializeApp(firebaseInitialize);
export default config;