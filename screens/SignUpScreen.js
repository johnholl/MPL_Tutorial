import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import {app} from "../firebase";
import firebase from "firebase";

export default function SignUpScreen(props) {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [errorMessage, setErrorMessage] = useState(null);

    const handleSignUp = () => {
        firebase.auth(app).createUserWithEmailAndPassword(email, password)
            .then(() => {
                const user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName: name
                });

                props.navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });})
            .catch(error => {setErrorMessage(error.message)})
    };

        return (
            <View style={styles.container}>
                <Text>Sign Up</Text>
                {errorMessage &&
                <Text style={{ color: 'red' }}>
                    {errorMessage}
                </Text>}
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder={"name"}
                    onChangeText={name => setName(name)}
                    value={name}
                />
                <TextInput
                    placeholder={"email"}
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={em => setEmail(em)}
                    value={email}
                />
                <TextInput
                    secureTextEntry
                    placeholder={"password"}
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={pwd => setPassword(pwd)}
                    value={password}
                />
                <View style={{paddingVertical:40}}>
                <Button title={"Sign up"} onPress={handleSignUp}/>
                </View>
                <View>
                    <Text>Already signed up?</Text>
                <Button
                    title="Login"
                    onPress={() => props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'Login' }],
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