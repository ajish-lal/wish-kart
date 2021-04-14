import { createContext, useEffect, useState } from "react";
import authApp from '../firebase.js'

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        authApp.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider value={currentUser}>
            { props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;