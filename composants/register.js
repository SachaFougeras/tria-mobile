import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const Register = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://139.59.189.145/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          nom: "nom",
          prenom: "prenom",
          email: "email@mail.fr",
          password: "password",
          password_confirmation: "password",
        }),
      });
  
      const responseData = await response.json();
  
      if (responseData.success) {
        // Inscription réussie, redirigez l'utilisateur ou affichez un message de succès
        // navigation.navigate('LoginPage');
        console.log(responseData);
      } else {
        // L'inscription a échoué, affichez un message d'erreur
        console.log(responseData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        onChangeText={text => setNom(text)}
        value={nom}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Prenom"
        onChangeText={text => setPrenom(text)}
        value={prenom}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe de confirmation"
        onChangeText={text => setPasswordConfirmation(text)}
        value={password_confirmation}
        secureTextEntry />
      <Button title="S'inscrire" onPress={handleSubmit} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
export default Register;