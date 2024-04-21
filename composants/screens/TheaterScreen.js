import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';

const TheaterScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchTheaters = async () => {
      const response = await axios.get(`https://api.triaonline.live/api/theaters/search?search=${search}`);
      setResults(response.data.theaters);
    };

    if (search) {
      searchTheaters();
    } else {
      setResults([]);
    }
  }, [search]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        value={search}
        onChangeText={setSearch}
        placeholder="Rechercher un théâtre..."
      />
      <FlatList
        data={results}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.adress}</Text>
              <Button
                title="Voir les pièces de théâtre"
                onPress={() => navigation.navigate('TheaterPlays', { theaterId: item.id })}
              />
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
  searchBar: {
    height: 40,
    backgroundColor: 'white', // Change this line
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
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

export default TheaterScreen;