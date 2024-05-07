import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './composants/screens/LoginScreen';
import RegisterScreen from './composants/screens/RegisterScreen';
import TabBar from './composants/Menu/TabBar';
import LoginScreen2 from './composants/screens/loginPostRegister';
import ShowDetailsScreen from './composants/screens/ShowDetailsScreen';
import CommentScreen from './composants/screens/CommentScreen';
import AllComments from './composants/screens/AllComments';
import TheaterScreen from './composants/screens/TheaterScreen';
import TheaterPlaysScreen from './composants/screens/TheaterPlaysScreen';
import Average from './composants/screens/Average';
import WelcomeScreen from './composants/screens/WelcomScreen';
import AccountScreen from './composants/screens/AccountScreen';
 

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bienvenue" options={{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name="Bienvenue sur Trìa" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="Inscription" component={RegisterScreen} />
        <Stack.Screen name="Votre compte est crée avec succés!" component={LoginScreen2} />
        <Stack.Screen name="Trìa" component={TabBar} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={ShowDetailsScreen} /> 
        <Stack.Screen name="CommentScreen" component={CommentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Account Screen" component={AccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Tous les commentaires" component={AllComments} />
        <Stack.Screen name="Spectacles qui se joue" component={TheaterPlaysScreen} />
        <Stack.Screen name="Average" component={Average} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'black',
  },
  card: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});