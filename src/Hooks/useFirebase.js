import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import initializeAuthentication from "../Components/Register/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        signOut(auth).then(res => {
            setUser({});
        })
            .catch(error => {

            })
    }

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser(user);
    //         }
    //         else {
    //             setUser({});
    //         }
    //     })
    // }, [])

    return { user, setUser, googleSignIn, auth, logOut };

}


export default useFirebase;