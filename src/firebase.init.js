// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMjdQS6zLQKO1qXM18kKJHXZLZfE2tXHY",
    authDomain: "ema-john-simple-2033d.firebaseapp.com",
    projectId: "ema-john-simple-2033d",
    storageBucket: "ema-john-simple-2033d.appspot.com",
    messagingSenderId: "375937931269",
    appId: "1:375937931269:web:c2039972c390aa4591a46c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;