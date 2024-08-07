import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const TheaterScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const searchTheaters = async () => {
    const response = await fetch(`https://api.triaonline.live/api/theaters/search?search=${search}`);
    const data = await response.json();
    setResults(data.theaters);
  };

  useEffect(() => {
    searchTheaters();
  }, [search]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Théâtres', 
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
    <View style={styles.container}>
        <View style={styles.searchBar}>
      <Icon name="search" size={20} color="#000" />
      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher un spectacle..."
        onChangeText={setSearch}
        value={search}
      />
    </View>
      <FlatList
        data={results}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Text style={styles.itemAdress}>{item.adress}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Spectacles qui se joue', { theaterId: item.id })}>
          <Text style={styles.buttonText}>Voir les pièces de théâtre</Text>
        </TouchableOpacity>
            </Card.Content>
          </Card>
        )}
      />
    </View>
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
    marginBottom: 10,
    marginLeft: 20, // Add this line
    marginRight: 10, // Add this line
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  card: {
    marginBottom: 10,
    backgroundColor: 'white',
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#FFCE21',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    width:"70%",
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,  
},
  logo: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  itemDescription: {
    marginTop: 20,
    fontSize: 15,
    color: 'black',
  },
  itemAdress: {
    marginTop: 20,
    fontSize: 20,
    color: 'black',
  },
});

export default TheaterScreen;