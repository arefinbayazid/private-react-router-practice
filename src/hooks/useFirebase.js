import firebaseAuthoraization from "../Firebase/firebase.init"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseAuthoraization();
const useFirebase = () =>{
    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignInBtn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => setUser(result.user))
        .catch(err =>{
            console.log(err)
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, result => {
            if (result) {
                setUser(result)
            }
        });
    }, [])
    
    // sign out
    const signOutUser = () =>{
        signOut(auth)
        .then(() => {
            // Sign-out successful.
            setUser({})
        })
        .catch((error) => {
            // An error happened.
            console.log(error)
        });
    }

    return{
        googleSignInBtn,
        signOutUser,
        user
    }
}

export default useFirebase;