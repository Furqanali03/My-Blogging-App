// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTBxLiXKeC11OOiRlpMhigbu-8sqPk5jE",
  authDomain: "my-blogging-app-96efd.firebaseapp.com",
  projectId: "my-blogging-app-96efd",
  storageBucket: "my-blogging-app-96efd.appspot.com",
  messagingSenderId: "470560266712",
  appId: "1:470560266712:web:7656c973aaa228e5773aad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app