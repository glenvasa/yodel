// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBHa3-YkIXfEMMQTfZBzubnOQzkMQnVPT4",
    authDomain: "yodel-33125.firebaseapp.com",
    projectId: "yodel-33125",
    storageBucket: "yodel-33125.appspot.com",
    messagingSenderId: "778874477328",
    appId: "1:778874477328:web:cdb993267fec1632c76395"
  };

// Initialize Firebase
// first step is necessary b/c using NextJS; checking if app already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };