import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAvoMGaoJUQja2ZpNBC_E0mQJahgv5jtTk",
  authDomain: "cyclone-id5508.firebaseapp.com",
  databaseURL: "https://cyclone-id5508.firebaseio.com",
  projectId: "cyclone-id5508",
  storageBucket: "cyclone-id5508.appspot.com",
  messagingSenderId: "300119066994",
  appId: "1:300119066994:web:75f0e31562db22048235eb",
  measurementId: "G-C134W74Q2R"
}

firebase.initializeApp(config)