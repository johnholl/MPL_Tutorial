import React, {useState, useContext} from 'react';
import {Text, View, ActivityIndicator, StatusBar, Button, Alert} from 'react-native'
import {UserContext} from "../providers/UserProvider";
import {app} from "../firebase";
import firebase from "firebase";

const containerStyle = {backgroundColor: 'white', padding:10, width:"50%", height:"50%"};

export default function HomeScreen(props) {
    let {user} = useContext(UserContext);
    let [errorMessage, setErrorMessage] = useState(null);

    const createSignOutAlert = () =>
        Alert.alert(
            "Sign out",
            "Are you sure?",
            [
                {
                    text: "Sign out",
                    onPress: () => firebase.auth(app).signOut().then(
                        props.navigation.reset({
                            index: 0,
                            routes: [{ name: 'Login' }],
                        })
                    ).catch(error => setErrorMessage(error))
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
            ],
            { cancelable: true }
        );

    if (user===null) {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" />
            </View>     );
    }
    return(
        <View style={{
         paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
         display: "flex", flex: 1}}>
            {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
            <Text>Hello, {user.displayName}!</Text>
            <Button onPress={createSignOutAlert} title="Log Out"/>
        </View>)
};