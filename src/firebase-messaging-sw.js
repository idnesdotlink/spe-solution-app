importScripts("https://www.gstatic.com/firebasejs/6.3.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.3.1/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "819535897292"
});

const messaging = firebase.messaging();
