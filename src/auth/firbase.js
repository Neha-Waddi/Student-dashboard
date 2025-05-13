import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBoHSJpFvooZnD-TNEVw4sV03j-3h1ZQVU",
  authDomain: "student-dashboard-a8331.firebaseapp.com",
  projectId: "student-dashboard-a8331",
  storageBucket: "student-dashboard-a8331.firebasestorage.app",
  messagingSenderId: "559043052114",
  appId: "1:559043052114:web:a7dee4fb6ffab9e84f158b",
  measurementId: "G-BDMZ92425G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}
