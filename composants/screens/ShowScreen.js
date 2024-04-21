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
  
    fetchData();
  }, [search]);

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
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      paddingLeft: 10,
      marginBottom: 10,
      marginLeft: 20, // Add this line
      marginRight: 10, // Add this line
    },
    searchInput: {
      marginLeft: 10,
      flex: 1,
    },
    itemContainer: {
      marginBottom: 16,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
    },
    button: {
      margin: 10,
      alignSelf: 'stretch',
      width: 300 ,
    },
    
    itemTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
    },
    itemDescription: {
      fontSize: 14,
      color: 'black',
    },
    logo: {
      width: 50,
      height: 50,
      marginLeft: 10,
    }
  });
export default ShowScreen;