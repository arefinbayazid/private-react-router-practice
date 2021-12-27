import firebaseConfig from "./firebase.config"
import { initializeApp } from "firebase/app";

const firebaseAuthoraization = () =>{
    initializeApp(firebaseConfig)
}

export default firebaseAuthoraization;