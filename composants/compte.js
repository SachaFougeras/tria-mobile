import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, navigation, Button } from 'react-native';


const AccountScreen = () => {
  const [nom, setNom] = useState('azertyuiop');
  const [prenom, setPrenom] = useState('azertyuiop');
  const [email, setEmail] = useState('azertyu@erty.com');

 
  const navigation = useNavigation();
  
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
          navigation.navigate('Bienvenue sur Trìa');
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
        <Text>Prénom: {prenom}</Text>
        <Text>Nom: {nom},</Text>
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
    // ...
  });

export default AccountScreen;