import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

// ... rest of your code

const LoginPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('magicstarlord@gmail.com');
  const [password, setPassword] = useState('A$a45zey&$uio0ù6*5698*');
  const [first_name, setPrenom] = useState('azertyuiop');
  const [name, setNom] = useState('azertyuiop');
  const [successMessage, setSuccessMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState(null);


  const handleResetPassword = async () => {
    // TODO: Send a request to your server to reset the password
    console.log(`Reset password for ${email}`);
  };

  const handleSubmit = async () => {
    if (!email.includes('@')) {
      alert('Veuillez entrer une adresse e-mail valide.');
      return;
    }
    if (password.length < 12) {
      alert('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }
  
    try {
      const response = await fetch('https://api.triaonline.live/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
          first_name: first_name,
        }),
      });
      const responseData = await response.json();
  
      if (responseData.status_code == 200) {
        // Store the authentication token, first name and last name
        const token = responseData.token;
        AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('first_name', responseData.first_name);
        AsyncStorage.setItem('name', responseData.name);
        AsyncStorage.setItem('userId', responseData.user_id); // Add this line
      
        navigation.reset({
          index: 0,
          routes: [{ name: 'Trìa' }],
        });
        console.log(responseData);
        alert(`Bon Spectacle🎭`);
      } else {
        console.log(responseData);
        alert('Email ou mot de passe incorrect !');
      }
    } catch (error) {
      console.error(error);
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Trìa', 
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 35, // Augmentez la taille du titre ici
      },
      headerLeft: () => (
        <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require('../../images/LogoTria.png')} />
        </View> 
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../images/LogoTria.png')} />
      <Text style={styles.title}>Se connecter</Text>
      <Text>Email:</Text>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      </View>
      <Text>Mot de passe:</Text>
      <View style={styles.inputContainer}>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <TextInput
      style={styles.input}
      secureTextEntry={!showPassword}
      value={password}
      onChangeText={setPassword}
      placeholder="Mot de passe"
    />
    <TouchableOpacity 
      style={{ height: 35, justifyContent: 'center' }}
      onPress={() => setShowPassword(!showPassword)}
    >
      <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color="black" />
    </TouchableOpacity>
  </View>
</View>
<TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>CONNEXION</Text>
        </TouchableOpacity>
        <View style={styles.row}>
  <Text style={styles.text}>Pas encore de compte ?</Text> 
  <Text style={styles.link} onPress={() => navigation.navigate('Inscription')}>Inscrivez-vous</Text>
</View>
        </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 24,
    color:'white',
  },
  text: {
    color: 'white',
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 10,
    
   alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 10,
    backgroundColor: 'rgba(238, 238, 238, 1)',
  },
  input: {
    flex: 1,
    height: 45,
  },
  button: {
    marginTop: 65,
    backgroundColor: '#FF3131',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderRadius: 20,
    width: '100%', // Ajoutez cette ligne
    alignSelf: 'center', // Ajoutez cette ligne
  },
  buttonText: {
    color: 'white',
    fontSize: 18,  
    fontWeight: 'bold', // Ajoutez cette ligne
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