// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSh44h6UDUt8t2LtQdoWewUeTfToP2W4c",
    authDomain: "bachelorproef2022-9b7e3.firebaseapp.com",
    projectId: "bachelorproef2022-9b7e3",
    storageBucket: "bachelorproef2022-9b7e3.appspot.com",
    messagingSenderId: "830145782695",
    appId: "1:830145782695:web:f47f27b164ba7acfdccc82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);