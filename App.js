import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './composants/login';
import Register from './composants/register';
import MyTabs from './composants/MyTabs';
import LoginPage2 from './composants/loginPostRegister';
 

const Stack = createStackNavigator();


export default function App() {
  return (
  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bienvenue sur Trìa" component={LoginPage} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Votre compte est crée avec succés!" component={LoginPage2} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
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