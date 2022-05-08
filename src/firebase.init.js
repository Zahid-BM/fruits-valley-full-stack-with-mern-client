// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD65NLUL__iqvXEOvi8DByuXaSFvRmjmIc",
    authDomain: "fruits-warehouse-f1061.firebaseapp.com",
    projectId: "fruits-warehouse-f1061",
    storageBucket: "fruits-warehouse-f1061.appspot.com",
    messagingSenderId: "1080202526759",
    appId: "1:1080202526759:web:9a1a9843390d3a29a04e02"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default auth;