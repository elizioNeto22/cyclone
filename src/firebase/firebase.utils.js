import firebase  from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyB7djm8ClQzigQ2t4hA98FD67vC3D8LFzQ",
  authDomain: "cyclone-73ec9.firebaseapp.com",
  databaseURL: "https://cyclone-73ec9.firebaseio.com",
  projectId: "cyclone-73ec9",
  storageBucket: "cyclone-73ec9.appspot.com",
  messagingSenderId: "781556881413",
  appId: "1:781556881413:web:9406a37d034d5a30f3a46c",
  measurementId: "G-HECWDK6SDL"
}

firebase.initializeApp(config)

const auth = firebase.auth()
const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({'prompt': 'select_account'})

const signInWithGoogle = () => auth.signInWithPopup(provider)

export {
  auth,
  firestore,
  signInWithGoogle,
}
export default firebase