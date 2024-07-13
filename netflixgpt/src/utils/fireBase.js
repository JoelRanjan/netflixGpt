// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyjBmatMRkCugG4IGWYTDvs8e2NeA5Y4I",
  authDomain: "netflixgpt-828ab.firebaseapp.com",
  projectId: "netflixgpt-828ab",
  storageBucket: "netflixgpt-828ab.appspot.com",
  messagingSenderId: "660250906947",
  appId: "1:660250906947:web:c3ea3db80bcc6270499ff6",
  measurementId: "G-ZRTVV2B67T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
