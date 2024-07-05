import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, Button, TouchableOpacity, Image } from 'react-native';
import ViewPropTypes from 'deprecated-react-native-prop-types';
import Search from '../../assets/icons/Search';
import Star from '../../assets/icons/Star';
import MasquesTheatre2 from '../../assets/icons/MasquesTheatre2';
import LoginIcon from '../../assets/icons/LoginIcon';
import SettingsScreen from '../screens/SettingsScreen';

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
        <Image style={styles.logo} source={require('../../assets/images/LogoTria.png')} />
        </View> 
      ),
    });
  }, [navigation]);
  

  return (
    <ScrollView style={styles.container}>
<Image style={styles.pixel} source={require('../../assets/images/PixelImage.jpg')} />
<Text style={styles.itemTitle}>Découvrez le théâtre sur petit écran</Text>
<Text style={styles.itemTitle2}><Search marginTop="35" color="white"size="30"/>Rechercher une pièce </Text>
<Text style={styles.itemTitle2}><Star marginTop="35" color="white" size="30"/>Noter le contenu que vous avez visionné</Text>
<Text style={styles.itemTitle2}><MasquesTheatre2 color="white" size="30" />Trouver un théâtre à proximité</Text>
<Text style={styles.itemTitle2}><LoginIcon color="white" size="30" />Accédez au doonées de votre compte</Text>
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
    itemTitle2: {
      fontSize: 20, // Make the title bigger
      marginTop: 50,
      fontWeight: 'bold',
      color: 'white', // Change this to make the title black
    },
    itemDescription: {
      marginTop: 50,
      fontSize: 14,
      color: 'white', // Change this to make the description black
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