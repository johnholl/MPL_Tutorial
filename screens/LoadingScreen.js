import React, {useEffect, useContext} from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import {app} from "../firebase";
import firebase from "firebase";
import {UserContext} from "../providers/UserProvider";

export default function Loading(props) {

    let {user} = useContext(UserContext);

    useEffect(() => {
        if (user) {
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });
        } else {
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        }
        
        
    }, [user]);

        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});