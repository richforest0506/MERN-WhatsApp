
//mongodb change stream
// if there is a change in mondgodb's selected collection,
// that will fire off chain stream, that will fire off pusher,
//  which will fire off an axios, fetching on frontend

const firebaseConfig = {
    apiKey: "AIzaSyCHiJYDJWe41tpFQNuYLCEn0Bgvqpvo_UM",
    authDomain: "whatsapp-mern-viktor.firebaseapp.com",
    databaseURL: "https://whatsapp-mern-viktor.firebaseio.com",
    projectId: "whatsapp-mern-viktor",
    storageBucket: "whatsapp-mern-viktor.appspot.com",
    messagingSenderId: "177767563730",
    appId: "1:177767563730:web:3c44348e5080973ce6c80b"
};