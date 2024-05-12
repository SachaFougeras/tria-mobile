import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userId');
      navigation.navigate('Connexion');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
console.log('User ID retrieved: ', userId);
        const token = await AsyncStorage.getItem('token');
        if (!userId) {
          console.error('User ID not found');
          return;
        }
        const response = await fetch(`https://api.triaonline.live/api/me/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error('Error fetching user: ', error);
      }
    };
    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        {user && (
          <View>
            <Text style={styles.title}>Détails du compte</Text>
            <Text>Nom: {user.name}</Text>
            <Text>Prénom: {user.first_name}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Téléphone: {user.phone}</Text>
            <Text>Date de naissance: {user.birth_date}</Text>
            <Button title="MODIFIER" onPress={handleLogout} />
            <Button title="DECONNEXION" onPress={handleLogout} />
          </View>
        )}
      </View>
    </View>
  );
};
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