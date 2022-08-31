import { createContext, useState, useEffect } from "react";
import {createUserDocFromAuth, onAuthStateChangeListener} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect( () => (
        onAuthStateChangeListener(async (user) => {
            if (user) {
                await createUserDocFromAuth(user);
            }
            setCurrentUser(user);
        })
    ), []);

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>;
}
