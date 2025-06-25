// Import the functions you need from the SDKs you need
import { Platform } from "react-native";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "diet-planner-76575.firebaseapp.com",
  projectId: "diet-planner-76575",
  storageBucket: "diet-planner-76575.firebasestorage.app",
  messagingSenderId: "1093321652217",
  appId: "1:1093321652217:web:ac1b36ee5d4e1241b36f28",
  measurementId: "G-9LBTQ62V31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =
  Platform.OS === "web"
    ? getAuth(app)
    : initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });






// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // ✅ Make sure this URL ends with `.appspot.com`, not `.app`
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: "diet-planner-76575.firebaseapp.com",
//   projectId: "diet-planner-76575",
//   storageBucket: "diet-planner-76575.appspot.com",
//   messagingSenderId: "1093321652217",
//   appId: "1:1093321652217:web:ac1b36ee5d4e1241b36f28",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
