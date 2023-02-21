importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js'); 
importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-messaging.js');

firebase.initializeApp({ 
    apiKey: "AIzaSyA8p9tw-9Px9uuwEQjV7QIHE-j92NB2Y2o",
    authDomain: "uniathena-dev.firebaseapp.com",
    projectId: "uniathena-dev",
    storageBucket: "uniathena-dev.appspot.com",
    messagingSenderId: "1001829032507",
    appId: "1:1001829032507:web:3eee4e63826dc924d6b21e",
    measurementId: "G-JQ2JENPBSK" 
});

const messaging = firebase.messaging();