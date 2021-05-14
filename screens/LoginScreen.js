import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import {app} from "../firebase";
import firebase from "firebase";

export default function LoginScreen(props) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [errorMessage, setErrorMessage] = useState(null);

    const handleLogin = () => {
        firebase.auth(app).signInWithEmailAndPassword(email, password)
            .then(() => props.navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            }))
            .catch(error => setErrorMessage(error.message))
    };

        return (
            <View style={styles.container}>
                <Text>Log in</Text>
                {errorMessage &&
                <Text style={{ color: 'red' }}>
                    {errorMessage}
                </Text>}
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder={"email"}
                    onChangeText={email => setEmail(email)}
                    value={email}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder={"password"}
                    onChangeText={password => setPassword(password)}
                    value={password}
                />
                <View style={{paddingVertical:20}}>
                <Button title="Log in" onPress={handleLogin} />
                </View>
                <View>
                    <Text> Sign up </Text>
                <Button
                    title="Sign up"
                    onPress={() => props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'Signup' }],
                    })}
                />
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    }
});