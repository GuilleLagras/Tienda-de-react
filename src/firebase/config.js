// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBbUaP3d5kRM1ne4Grierloz2q-A4gYb0",
    authDomain: "tienda-react-guille.firebaseapp.com",
    projectId: "tienda-react-guille",
    storageBucket: "tienda-react-guille.appspot.com",
    messagingSenderId: "451906523092",
    appId: "1:451906523092:web:2cf610b4173bc4bc0d1041",
    measurementId: "G-B6JDL9C2TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);