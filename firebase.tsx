
import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDnlUlC1EaEXKyMRBW1ZWAde58AkOfRCLs",
  authDomain: "mpl-backend.firebaseapp.com",
  projectId: "mpl-backend",
  storageBucket: "mpl-backend.appspot.com",
  messagingSenderId: "480378682261",
  appId: "1:480378682261:web:fa2d8149414228976c149c"
};

  const app = Firebase.apps.length===0 ? Firebase.initializeApp(firebaseConfig) : Firebase.app();
  export const storage = app.storage();
  export const auth = app.auth();
  export const fstore = app.firestore();