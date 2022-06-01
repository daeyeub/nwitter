import firebase from "firebase/app";
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCZmmdr9FAl5iHtzi_hTw0D3jKr9SK0zwE",
    authDomain: "nwitter-9f18e.firebaseapp.com",
    projectId: "nwitter-9f18e",
    storageBucket: "nwitter-9f18e.appspot.com",
    messagingSenderId: "746525855612",
    appId: "1:746525855612:web:5bd3af9466496212d45ef9"
};

export default firebase.initializeApp(firebaseConfig)