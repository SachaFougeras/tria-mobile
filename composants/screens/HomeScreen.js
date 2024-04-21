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
    <ScrollView style={styles.container}>
    <Text style={styles.title}>Découvrez les nouveautés</Text>
    <FlatList
  data={data}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <View style={{ alignItems: 'center' }}> 
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detail', { showId: item.id })}>
      <Text style={{ color: '#F43A3A' }}>Détail</Text>
    </TouchableOpacity>
  </View> 
    </View>
  )}
/>
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
      fontSize: 14,
      color: 'black', // Change this to make the description black
    },
    logo: {
      width: 50,
      height: 50,
      marginLeft: 10,
    }
  });
export default HomeScreen;