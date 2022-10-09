import AsyncStorage from "@react-native-async-storage/async-storage"
import { initializeApp } from "firebase/app"
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native"

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBCzSWE45bNArsIGCSNq6TtnQnrJNn98dw",
  authDomain: "job-board-app-3f0f8.firebaseapp.com",
  projectId: "job-board-app-3f0f8",
  storageBucket: "job-board-app-3f0f8.appspot.com",
  messagingSenderId: "592110194825",
  appId: "1:592110194825:web:725aa3d98ef32994a3f658",
}

const app = initializeApp(firebaseConfig)

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})

export const db = getFirestore(app)

export default app
