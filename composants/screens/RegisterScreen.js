import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const [name, setNom] = useState('sacha');
  const [first_name, setPrenom] = useState('fougeras');
  const [email, setEmail] = useState('fougerassacha@gmail.com');
  const [password, setPassword] = useState('A$azertyuio06*5698');
  const [password_confirmation, setPasswordConfirmation] = useState('A$azertyuio06*5698');
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://139.59.189.145/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          first_name: first_name,
          email: email,
          password: password,
          password_confirmation: password_confirmation,
        }),
      });
  
      const responseData = await response.json();
  
      if (responseData.status_code  == 200) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Votre compte est crée avec succés!' }],
        });
        console.log(responseData);
        alert(`'Vous vous êtes bien inscris !'`);
      }
      else if (responseData.status_code == 400 && responseData.message == 'Email already exists') {
        alert('Cette adresse e-mail existe déjà.');}
      else {
        alert('Certains champs sont incorrect !');
        }
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={require('../../images/image.png')} />
</View> 
      <View style={styles.card}>
      <Text>Nom:</Text>
      <TextInput
  style={styles.input}
  placeholder="Poquelain"
  onChangeText={text => setNom(text)}
  value={name}
  keyboardType="name"
  autoCapitalize="none"
/>
      <Text>Prenom:</Text>
      <TextInput
        style={styles.input}
        placeholder="Jean-Baptiste"
        onChangeText={text => setPrenom(text)}
        value={first_name}
        keyboardType="name"
        autoCapitalize="none"
      />
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="tria@gmail.com"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text>Mot de passe:</Text>
      <TextInput
        style={styles.input}
        placeholder="Mot de passe contenant 12 caractères"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry />
        <Text>Mot de passe à confirmer:</Text>
      <TextInput
        style={styles.input}
        placeholder="Mot de passe de confirmation"
        onChangeText={text => setPasswordConfirmation(text)}
        value={password_confirmation}
        secureTextEntry />
              <Button title="S'inscrire" onPress={handleSubmit} color="#FF3131" />
        </View>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    width: '100%',
  },
  button: {
    margin: 10,
    alignSelf: 'stretch',
    width: 300 ,
  },
  imageContainer: {
    
    alignItems: 'center',
  },
    image: {
      marginBottom: 20,
    width: 100,
    height: 100,
    
  },
  link: {
    color: '#FF3131',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
export default Register;