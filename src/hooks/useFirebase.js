import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState("");
    const auth = getAuth();
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            }).catch(err => setError(err.message))
    };

    const createUserUsingEmailAndPassword = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                result.user["displayName"] = name;
                setUser(result.user);
                setDisplayName(result.user.displayName);
            }).catch(err => setError(err.message))
    };

    const signInUsingEmailAndPassword = (name, email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {

                setUser(result.user);

            }).catch(err => setError(err.message))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }
    return {
        user,
        displayName,
        signInUsingGoogle,
        logOut,
        error,
        createUserUsingEmailAndPassword,
        signInUsingEmailAndPassword
    }
}


export default useFirebase;




































/* import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";



initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
            }).catch(err => {
                console.log(err);
            })
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((error) => {
                // An error happened.
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);

    return {
        user,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase; */