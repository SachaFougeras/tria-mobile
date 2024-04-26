import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

// ... rest of your code

const WelcomScreen = () => {
    const navigation = useNavigation();

  return (
    <ImageBackground source={require('../../images/image.png')} style={styles.container}>
    <View >
      <Text style={styles.title}>Bienvenue sur</Text>
        <Text style={styles.bigtitle}>🎭Trìa</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Bienvenue sur Trìa')}>
          <Text style={styles.buttonText}>SUIVANT</Text>
        </TouchableOpacity>

    </View>
    </ImageBackground>
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
    fontSize: 44,
    marginBottom: 24,
    color:'white',
  },
  bigtitle: {
    fontSize: 60,
    marginBottom: 24,
    color:'white',
  },
  title2: {
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
    marginTop: 70,
    backgroundColor: '#FFCE21',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
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

});

export default WelcomScreen;