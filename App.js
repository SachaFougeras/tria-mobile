import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './composants/screens/LoginScreen';
import RegisterScreen from './composants/screens/RegisterScreen';
import TabBar from './composants/Menu/TabBar';
import LoginScreen2 from './composants/screens/loginPostRegister';
import ShowDetailsScreen from './composants/screens/ShowDetailsScreen';
 

const Stack = createStackNavigator();


export default function App() {
  return (
  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bienvenue sur Trìa" component={LoginScreen} />
        <Stack.Screen name="Inscription" component={RegisterScreen} />
        <Stack.Screen name="Votre compte est crée avec succés!" component={LoginScreen2} />
        <Stack.Screen name="Trìa" component={TabBar} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={ShowDetailsScreen} /> 
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