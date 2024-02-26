import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
function LoginScreen({ navigation }) {
    const [nom, setNom] = React.useState('');
    const [prenom, setPrenom] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const handleLogin = () => {
      // Logique de connexion ici
      console.log(nom, prenom, password);
      // navigation.navigate('Home'); // naviguer vers l'écran d'accueil après la connexion
    };
  
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Button title="Connexion" onPress={handleLogin} />
            <Button title="Créer un compte" onPress={() => navigation.navigate('SignUp')} />
          </Card.Content>
        </Card>
      </View>
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
    export default LoginScreen;