import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserProvider from './providers/UserProvider'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import HomeScreen from './screens/HomeScreen'


const Stack = createStackNavigator();


export default function App() {

  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator
              screenOptions={{
                  headerShown: false
              }}>
              <Stack.Screen name="Loading" component={LoadingScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Signup" component={SignUpScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </>
  );
}