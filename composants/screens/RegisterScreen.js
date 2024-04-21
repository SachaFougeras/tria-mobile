import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Register = () => {
  const [name, setNom] = useState('sacha');
  const [first_name, setPrenom] = useState('fougeras');
  const [email, setEmail] = useState('fougerassacha@gmail.com');
  const [password, setPassword] = useState('A$azertyuio06*5698');
  const [password_confirmation, setPasswordConfirmation] = useState('A$azertyuio06*5698');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://api.triaonline.live/api/register', {
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
             <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16, position: 'relative' }}>
  <TextInput
    style={{ flex: 1, height: 35, borderColor: 'gray', borderWidth: 1, paddingLeft: 8, paddingRight: 40 }}
    secureTextEntry={!showPassword}
    value={password}
    onChangeText={setPassword}
    placeholder="Password"
  />
  <TouchableOpacity 
    style={{ position: 'absolute', right: 10, height: 35, justifyContent: 'center' }}
    onPress={() => setShowPassword(!showPassword)}
  >
    <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color="black" />
  </TouchableOpacity>
</View>
  <Text>Mot de passe à confirmer:</Text>
<View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16, position: 'relative' }}>

  <TextInput
    style={{ flex: 1, height: 35, borderColor: 'gray', borderWidth: 1, paddingLeft: 8, paddingRight: 40 }}
    secureTextEntry={!showPassword}
    value={password_confirmation}
    onChangeText={setPasswordConfirmation}
    placeholder="Password"
  />
  <TouchableOpacity 
    style={{ position: 'absolute', right: 10, height: 35, justifyContent: 'center' }}
    onPress={() => setShowPassword(!showPassword)}
  >
    <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color="black" />
  </TouchableOpacity>
</View>
<TouchableOpacity onPress={togglePasswordVisibility}>
    </TouchableOpacity>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
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