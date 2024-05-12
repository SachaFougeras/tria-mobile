import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import StarRating from 'react-native-star-rating';

const ShowDetailsScreen = ({ route }) => {
  const { showId } = route.params;
  const navigation = useNavigation();
  const [show, setShow] = useState(null);
  const [averageRating, setAverageRating] = useState(null);

  const goToCommentScreen = () => {
    navigation.navigate('CommentScreen', { showId: showId });
  };
  const goToAllComments = () => {
    navigation.navigate('Tous les commentaires', { showId: showId });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.triaonline.live/api/show/${showId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const showData = data.show; // Extract show details from data
        console.log('Show details:', showData);
        setShow(showData);

        const averageResponse = await fetch(`https://api.triaonline.live/api/shows/${showId}/average`);
        if (!averageResponse.ok) {
          console.error('Response status:', averageResponse.status);
          console.error('Response text:', await averageResponse.text());
          throw new Error('Failed to fetch data');
        }
        const averageData = await averageResponse.json();
        setAverageRating(averageData.average_rating);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [showId]);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Détails du spectacle', 
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'white',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        {show && (
          <>
            <Text style={styles.itemTitle}>{show.title}</Text>
            <Text style={styles.itemDescription}>Description: {show.description}</Text>
            <Text style={styles.price}>Durée: {show.durée}</Text>
            <Text style={styles.price}>Date: {show.date}</Text>
            <Text style={styles.price}>Prix: {show.price}</Text> 
            <Text style={styles.price}>Mise en scène: {show.real}</Text>
            <Text style={styles.price}>Théâtre: {show.theater_name}</Text>

            <Card style={{ margin: 10 }}>
        <Card.Content>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={styles.title}>Note Moyenne: {averageRating}/5</Text>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={averageRating}
              fullStarColor="#FFCE21"
            />
          </View>
        </Card.Content>
      </Card>
            <View style={styles.button}>
              <Button title="Noter"style={styles.buttonDescription}  onPress={goToCommentScreen} color="#FF3131" /> 
            </View>
            <View style={styles.button}>
              <Button style={styles.buttonDescription} title="Voir les commentaires" onPress={goToAllComments} /> 
            </View>
          </>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
 
  price: {
    marginBottom: 10,
    fontSize: 14,
    color: 'black',
  },
    container: {
      flex: 1,
      backgroundColor: '#0B0B0B',
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