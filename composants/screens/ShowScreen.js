import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, Button, TouchableOpacity, Image, TextInput } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const ShowScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.triaonline.live/api/shows?search=${search}`);
        const data = await response.json();
        console.log('Fetched data:', data);
        setData(data.item);
      } catch (error) {
        console.error(error);
      }
    };
  
    console.log('Search:', search); // Log the search term
    fetchData();
  }, [search]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Spectacles', 
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
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#000" />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un spectacle..."
          onChangeText={setSearch}
          value={search}
        />
      </View>
    <Text style={styles.title}>Découvrez les nouveautés</Text>
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        console.log('Item:', item); // Log each item
        return (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>
  {item.description.length > 400 ? item.description.substring(0, 100) + '...' : item.description}
</Text>
            <View style={{ alignItems: 'center' }}> 
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detail', { showId: item.id })}>
                <Text style={styles.buttonText}>Détail</Text>
              </TouchableOpacity>
            </View> 
          </View>
        );
      }}
    />
  </ScrollView>
  );
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0B0B0B',
      
      padding: 10,
    },
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      paddingLeft: 10,
      marginLeft: 20, // Add this line
      marginRight: 10, // Add this line
    },
    searchInput: {
      marginLeft: 10,
      flex: 1,
    },
    itemContainer: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    button: {
      marginTop: 30,
      backgroundColor: '#FF3131',
      padding: 10,
      borderRadius: 5,
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
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
    },
    itemDescription: {
      fontSize: 15,
      color: 'black',
    },
    logo: {
      width: 50,
      height: 50,
      marginLeft: 10,
    }
  });
export default ShowScreen;