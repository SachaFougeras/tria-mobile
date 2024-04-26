import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';

const TheaterPlays = ({ route, navigation }) => {
  const { theaterId } = route.params;
  const [theaterName, setTheaterName] = useState(''); // Ajoutez cet état
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await axios.get(`https://api.triaonline.live/api/theaters/${theaterId}/shows`);
      setShows(response.data.shows);
      setTheaterName(response.data.name); // Mettez à jour l'état avec le nom du théâtre
      console.log(response.data);
    };
  
    fetchShows();
  }, [theaterId]);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Spectacles`, // Utilisez l'état ici
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'white',
    });
  }, [navigation, theaterName]); // Ajoutez theaterName comme dépendance


  return (
    <View style={styles.container}>
<FlatList
  data={shows}
  keyExtractor={item => item.id.toString()}
  renderItem={({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detail', { showId: item.id })}>
          <Text style={styles.buttonText}>Détail</Text>
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
    backgroundColor: 'black',
    padding: 10,
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
  itemDescription: {
    fontSize: 14,
    color: 'black',
  },
});

export default TheaterPlays;