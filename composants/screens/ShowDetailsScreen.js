import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShowDetailsScreen = ({ route }) => {
  const [item, setItem] = useState(null);
  console.log(`Fetching data for item with id: ${route.params.id}`); // Log the id // Log the data

  return (
    <View style={styles.container}>
      {item && (
        <>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.description}>{item?.description}</Text>
          <Text style={styles.price}>{item?.price}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
});

export default ShowDetailsScreen;