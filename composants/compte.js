import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, navigation } from 'react-native';

const AccountScreen = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [nom, setNom] = useState('azertyuiop');
  const [prenom, setPrenom] = useState('azertyuiop');
  const [email, setEmail] = useState('azertyu@erty.com');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://139.59.189.145/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          nom: nom,
          prenom: prenom,
          email: email,
        }),
      });
  
      const responseData = await response.json();

    } catch (error) {
      console.error(error);
    }
  };


  return (
    <View style={styles.container}>
      <Text>Prénom: {prenom}</Text>
      <Text>Nom: {nom},</Text>
      <Text>Email: {email}</Text>
      {/* Add more fields as necessary */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default AccountScreen;