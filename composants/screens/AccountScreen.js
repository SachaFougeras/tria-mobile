import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, navigation, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountScreen = () => {
  const [name, setNom] = useState('');
  const [first_name, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const authToken = await AsyncStorage.getItem('authToken');
  
      fetch('http://139.59.189.145/api/me{id}', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          setNom(data.name);
          setPrenom(data.first_name);
          setEmail(data.email);
        });
    };
  
    fetchUser();
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Mon Compte', 
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'white',
      headerLeft: () => (
        <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require('../../images/image.png')} />
        </View> 
      ),
    });
  }, [navigation]);

 
  const navigation = useNavigation();
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
        await AsyncStorage.setItem('authToken', responseData.token);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Votre compte est crée avec succés!' }],
        });
      } else {
        // Handle errors
        console.error(responseData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleLogout = () => {
    try {
      const handleLogout = async () => {
        try {
          const response = await fetch('http://139.59.189.145/api/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
          });
          const responseData = await response.json();
          console.log(responseData);
          navigation.reset({
            index: 0,
            routes: [{ name: 'Bienvenue sur Trìa' }],
          });
          alert('Vous avez été déconnecté avec succès !');
        } catch (error) {
          console.error(error);
        }
      };

      handleLogout();
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Prénom: {first_name}</Text>
        <Text>Nom: {name},</Text>
        <Text>Email: {email}</Text>
        <Button color="#FF3131" title="Se déconnecter" onPress={handleLogout} />
      </View>
    </View>
  );
  
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    card: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 10,
      width: '90%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
      logo: {
        width: 50,
        height: 50,
        marginLeft: 10,
      }
  
  });

export default AccountScreen;