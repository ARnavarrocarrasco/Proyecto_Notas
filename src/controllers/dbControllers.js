// Base de datos en FireStore
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnUbOFONOKFzzyDkUWVZpzJ__51lvuNaQ",
  authDomain: "notas-e0ce9.firebaseapp.com",
  projectId: "notas-e0ce9",
  storageBucket: "notas-e0ce9.appspot.com",
  messagingSenderId: "456266578032",
  appId: "1:456266578032:web:31597ff5ecff032f5a1cb5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export const getNotesFromDB = async() => {
    const querySnapshot = await getDocs(collection(db, "NoteList"));
    const notes = querySnapshot.docs.map((doc) => {
        return {...doc.data(), id: doc.id};
    });
    return notes
}