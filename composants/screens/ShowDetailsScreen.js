import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShowDetailsScreen = ({ route }) => {
  const { showId } = route.params;
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`http://139.59.189.145/api/show/${showId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const showData = data.show; // Extract show details from data
        console.log('Show details:', showData);
        setShow(showData);
      } catch (error) {
        console.error('Error fetching show details: ', error);
      }
    };

    fetchShowDetails();
  }, [showId]);


 return (
  <View style={styles.container}>
  <View style={styles.itemContainer}>
    {show && (
      <>
        <Text style={styles.itemTitle}>{show.title}</Text>
        <Text style={styles.itemDescription}>{show.description}</Text>
        <Text style={styles.price}>{show.price}</Text>
        
        {/* ... */}
      </>
    )}
  </View>
</View>
);
}
const styles = StyleSheet.create({
 
  price: {
    fontSize: 16,
    color: 'green',
  },
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'flex-start', // Change this line
    },
   
    itemContainer: {
      marginTop: 50, // Add this line
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
    fontSize: 24, // Make the title bigger
    fontWeight: 'bold',
    color: 'black', // Change this to make the title black
    textAlign: 'center', // Add this line
    justifyContent: 'center', // Add this line
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

export default ShowDetailsScreen;