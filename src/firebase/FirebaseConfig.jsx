import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBo7juPI8LUJ7YyOiTgX96KfV07-1d4t7U",
  authDomain: "homegenie-8c8f6.firebaseapp.com",
  projectId: "homegenie-8c8f6",
  storageBucket: "homegenie-8c8f6.firebasestorage.app",
  messagingSenderId: "900743315191",
  appId: "1:900743315191:web:edcb01b496071179951df2",
  measurementId: "G-1SH83RRXCH"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }