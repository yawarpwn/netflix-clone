// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAqxKBhLTzkpIyQmMUk9NVl3rf92gVXuVg',
  authDomain: 'netflix-clone-jk.firebaseapp.com',
  projectId: 'netflix-clone-jk',
  storageBucket: 'netflix-clone-jk.appspot.com',
  messagingSenderId: '284498328074',
  appId: '1:284498328074:web:e22ad8db50e1317abb3df3',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
