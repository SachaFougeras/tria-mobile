import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Card } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ShowDetailsScreen = ({ route }) => {
  const { showId } = route.params;
  const navigation = useNavigation();
  const [show, setShow] = useState(null);
  const goToCommentScreen = () => {
    navigation.navigate('CommentScreen', { showId: showId });
  };
  const goToAllComments = () => {
    navigation.navigate('Tous les commentaires', { showId: showId });
  };

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.triaonline.live/api/show/${showId}`);
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
        <Text style={styles.itemDescription}>Description: {show.description}</Text>
        <Text style={styles.price}> Prix: {show.price}€</Text> 
        <View style={styles.button}>
        <Button title="Noter"style={styles.buttonDescription}  onPress={goToCommentScreen} color="#FF3131" /> 
        </View>
        <View style={styles.button}>
        <Button style={styles.buttonDescription} title="Voir tous les commentaires" onPress={goToAllComments} /> 
        </View>
        
      </>
    )}
  </View>
  
</View>
);
}
const styles = StyleSheet.create({
 
  price: {
    fontSize: 14,
    color: 'black',
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
    
    marginTop: 20, // Add this line
    margin: 35,
    alignSelf: 'stretch',
    width: 300 ,
  },
  buttonDescription: {
    flex: 1,
    marginBottom: 5,
    backgroundColor: '#FF3131',
  },

  buttonNoter: {
    flex: 1,
    marginBottom: 5,
    backgroundColor: '#FF3131',
  },
  itemTitle: {
    marginBottom: 10, // Add 
    fontSize: 24, // Make the title bigger
    fontWeight: 'bold',
    color: 'black', // Change this to make the title black
    textAlign: 'center', // Add this line
    justifyContent: 'center', // Add this line
  },
  itemDescription: {
    marginBottom: 10, // Add 
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