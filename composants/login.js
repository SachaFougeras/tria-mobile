import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('azertyu@erty.com');
  const [password, setPassword] = useState('Azertyuio06*aazza');
  const [prenom, setPrenom] = useState('azertyuiop');
  const [nom, setNom] = useState('azertyuiop');
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
    })
    const responseData = await response.json();
  
    if (responseData.status_code  == 200) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'MyTabs' }],
      });
      console.log(responseData);
      setSuccessMessage('Vous vous êtes bien authentifié !');
      alert(`Bonjour ${prenom} ${nom}, vous vous êtes bien authentifié !`);
    }
    else {
      // L'inscription a échoué, affichez un message d'erreur
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
  <Image
    style={styles.image}
    source={require('../assets/image.png')}
  />
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
    justifyContent: 'flex-start',
    padding: 16,
  },
  card: {
    flex: 0.75,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
  },
  title: {
    fontSize: 40,
    marginBottom: 24,
    color: 'white',
  },
  input: {
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
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