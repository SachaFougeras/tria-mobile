import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('fougerassacha@gmail.com');
  const [password, setPassword] = useState('A$azertyuio06*5698');
  const [first_name, setPrenom] = useState('azertyuiop');
  const [name, setNom] = useState('azertyuiop');
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://139.59.189.145/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const responseData = await response.json();
  
      if (responseData.status_code == 200) {
        // Store the authentication token
        const token = responseData.token;
        AsyncStorage.setItem('token', token);
  
        navigation.reset({
          index: 0,
          routes: [{ name: 'Trìa' }],
        });
        console.log(responseData);
        alert('Vous vous êtes bien authentifié !');
      } else {
        console.log(responseData);
        alert('Email ou mot de passe incorrect !');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {successMessage && <Text>{successMessage}</Text>}
<View style={styles.imageContainer}>
  <Text style={styles.title}>Trìa</Text>

</View> 
      <View style={styles.card}>
        <Text style={styles.title}>Connectez vous</Text>
        <Text>Email:</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} autoCapitalize="none" />
        <Text>Mot de passe:</Text>
        <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
        <View style={styles.button}>
          <Button title="Connexion" onPress={handleSubmit} color="#FF3131"  />
        </View>
        <Text style={styles.link} onPress={() => navigation.navigate('Inscription')}>
  Créer un compte
</Text>

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

export default LoginPage;