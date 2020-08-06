import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBZPiav3Bs95dMBmFVbuuJ_OlmxJ62opMM",
    authDomain: "reactjs-6e87e.firebaseapp.com",
    databaseURL: "https://reactjs-6e87e.firebaseio.com",
    projectId: "reactjs-6e87e",
    storageBucket: "reactjs-6e87e.appspot.com",
    messagingSenderId: "357172295815",
    appId: "1:357172295815:web:e334e52c4b9a9383fae022"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase