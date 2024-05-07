import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, Button, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.triaonline.live/api/shows');
        const data = await response.json();
        console.log('Fetched data:', data);
        setData(data.item);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Accueil', 
      headerStyle: {
        backgroundColor: '#181818',
      },
      headerTintColor: 'white',
      headerLeft: () => (
        <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require('../../images/LogoTria.png')} />
        </View> 
      ),
    });
  }, [navigation]);
  

  return (
    <ScrollView style={styles.container}>
<Image style={styles.pixel} source={require('../../images/PixelImage.jpg')} />
<Text style={styles.itemTitle}>Découvrez le théâtre sur petit écran</Text>

  </ScrollView>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    itemContainer: {
      marginBottom: 16,
      backgroundColor: 'white', // Change this to make the card white
      padding: 10, // Add some padding around the content
      borderRadius: 5, // Optional: add some border radius for a card-like appearance
    },
    button: {
      marginTop: 30,
      backgroundColor: '#FF3131',
      padding: 10,
      alignItems: 'center',
      borderRadius: 20,
      width: '30%', // Ajoutez cette ligne
      alignSelf: 'center', // Ajoutez cette ligne
    },
    buttonText: {
      color: 'white',
      fontSize: 15,  
  },
    
    itemTitle: {
      fontSize: 24, // Make the title bigger
      marginTop: 20,
      fontWeight: 'bold',
      color: 'white', // Change this to make the title black
      textAlign: 'center',
    },
    itemDescription: {
      fontSize: 14,
      color: 'black', // Change this to make the description black
    },
    logo: {
      width: 50,
      height: 50,
      marginLeft: 10,
    },
    pixel: {
      marginTop: 20,
      width: 400,
      height: 200,
    }
  });
export default HomeScreen;