import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('azertyu@erty.com');
  const [password, setPassword] = useState('Azertyuio06*aazza');

  const handleSubmit = () => {
    fetch('http://139.59.189.145/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        navigation.navigate('MyTabs');
      })
      .catch((error) => {
        console.error('Error:', error);
        navigation.navigate('MyTabs');
      });
  };

  return (
    <View style={styles.container}>
<View style={styles.imageContainer}>
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