import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';

const TheaterPlays = ({ route, navigation }) => {
  const { theaterId } = route.params;
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await axios.get(`https://api.triaonline.live/api/theaters/${theaterId}/shows`);
      setShows(response.data.shows);
    };

    fetchShows();
  }, [theaterId]);

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
          <Text style={{ color: '#F43A3A' }}>Détail</Text>
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
  itemDescription: {
    fontSize: 14,
    color: 'black',
  },
});

export default TheaterPlays;