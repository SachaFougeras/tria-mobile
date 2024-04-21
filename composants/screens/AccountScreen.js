import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const userId = await AsyncStorage.getItem('userId'); // Get the user ID
        const response = await fetch(`https://api.triaonline.live/api/me/2`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        const data = await response.json();
        console.log(data); // Log the data to the console
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, []);
  const handleLogout = async () => {
    try {
      // Remove the user's token from AsyncStorage
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userId');
  
      // Reset user data
      setUserData(null);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Bienvenue sur Trìa' }],
      });
      // Navigate to the login screen
      navigation.navigate('Bienvenue sur Trìa');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

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
  return (
    <View style={styles.container}>
      {userData && userData.user && (
        <>
          <View style={styles.itemContainer}>
            <Text style={styles.itemDescription}>Prénom: {userData.user.first_name}</Text>
            <Text style={styles.itemDescription}>Nom: {userData.user.name}</Text>
            <Text style={styles.itemDescription}>Email: {userData.user.email}</Text>
            <Button title="Déconnexion" color="#FF3131"onPress={handleLogout} />
          </View>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center', // Center children vertically
    alignItems: 'center', // Center children horizontally
  },
  itemContainer: {
    marginBottom: 16,
    backgroundColor: 'white', // Change this to make the card white
    padding: 10, // Add some padding around the content
    borderRadius: 5, // Optional: add some border radius for a card-like appearance
  },
  button: {
    margin: 10,
    alignSelf: 'stretch',
    width: 300 ,
  },
  
  itemTitle: {
    fontSize: 24, // Make the title bigger
    fontWeight: 'bold',
    color: 'black', // Change this to make the title black
  },
  itemDescription: {
    fontSize: 20,
    color: 'black', // Change this to make the description black
  marginBottom:10,
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 10,
  }
});

export default AccountScreen;