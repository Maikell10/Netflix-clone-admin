import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyALBtrP_0Zjm4grMK5tc2d8SLaJErAzkHI",
    authDomain: "netflix-clone-jwt.firebaseapp.com",
    projectId: "netflix-clone-jwt",
    storageBucket: "netflix-clone-jwt.appspot.com",
    messagingSenderId: "36800376385",
    appId: "1:36800376385:web:397599d1fd7ade70f3a0c0",
    measurementId: "G-9Q9P2WVBFY",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
