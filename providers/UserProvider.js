import React, {createContext, useState, useEffect} from "react";
import {app} from "../firebase";
import firebase from "firebase";

export const UserContext = createContext({user: null});

export default function UserProvider(props) {
    const [state, setState] = useState({user: null});

    useEffect(()=>{
        firebase.auth(app).onAuthStateChanged(userAuth=>{
            setState({user: userAuth});
            console.log("USERAUTH", userAuth)
                });
            }, []);

    return(
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    )
}