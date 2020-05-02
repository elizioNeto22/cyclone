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

// auth
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({'prompt': 'select_account'})
const signInWithGoogle = () => auth.signInWithPopup(provider)

// firestore
const firestore = firebase.firestore()
// func que permite pegar o user object que que recebemos da auth library e armazená-lo no database
const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return // porque se ñ logado é null (falsy)

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  // Determinar se tem ou não dados no referenceObject autal.
  // Ou seja, se já foi ou não armazenado o user object(userAuth) que autenticamos  
  const snapShot = await userRef.get()

  // Se ñ há dados do user, será criado no database. 
  // (Seria melhor --e talvez será assim-- dizer ao user que ele não é cadastrado e deve fazer signUp)
  if(!snapShot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date() // para sabermos quando foi criado
    
    // o try catch é pq vamos fazer um asynchronous request à database para realmente armazenar esses dados agr
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }
  return userRef
} 

export {
  auth,
  firestore,
  signInWithGoogle,
  createUserProfileDocument
}
export default firebase