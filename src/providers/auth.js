import { createContext, useContext, useEffect, useState } from "react";
import authApp from '../firebase.js'

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const value = {
        currentUser,
        register,
        login,
        logout
    }

    useEffect(() => {
        const unsubscribe = authApp.auth().onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    function register(email, password) {
        return authApp.auth().createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return authApp.auth().signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return authApp.auth().signOut();
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading ? children : "Loading"}
        </AuthContext.Provider>
    );
}

export default AuthProvider;