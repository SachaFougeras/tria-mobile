import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Add this line
import StarRating from 'react-native-star-rating';
import HomeScreen from '../screens/HomeScreen';

const CommentScreen = ({ route }) => {
  const navigation = useNavigation();
  const { showId } = route.params;
  const [note, setNote] = useState('');
const [content, setComment] = useState('');
const confirmCommentSubmission = () => {
  Alert.alert(
    'Confirmation',
    'Vous êtes sur le point d\'ajouter un commentaire constructif. Voulez-vous continuer ?',
    [
      {
        text: 'annuler',
        style: 'cancel',
      },
      {
        text: 'oui',
        onPress: submitComment,
      },
    ],
    { cancelable: false },
  );
};
const confirmCancelSubmission = () => {
  Alert.alert(
    'Confirmation',
    'Vous êtes sur le point d\'annuler votre commentaire constructif. Voulez-vous continuer ?',
    [
      {
        text: 'annuler',
        style: 'cancel',
      },
      {
        text: 'oui',
        onPress: () => navigation.navigate('Trìa'), // Redirect to 'Trìa' when the user confirms the cancellation
      },
    ],
    { cancelable: false },
  );
};

  const submitComment = async () => {
    try {
      const token = await AsyncStorage.getItem('token'); // Get the user token from storage
  
      const response = await fetch('https://api.triaonline.live/api/create/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add this line
        },
        body: JSON.stringify({
          show_id: showId,
          note: note, // Change this line
          content: content,
        }),
      });

      const data = await response.json();
      console.log('Commentaire ajouté avec succés:', data);
      navigation.navigate('Trìa'); // Redirect to home
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRITIQUE</Text>
      <StarRating
      fullStarColor="#FFCE21" // Set the color of the stars to yellow
  disabled={false}
  maxStars={5}
  rating={note}
  selectedStar={(rating) => setNote(rating)}
/>
      <TextInput
        style={styles.input}
        placeholder="Commentaires"
        onChangeText={text => setComment(text)} // Update the state when the text changes
        value={content}
        multiline
      />
      <Button title="Publier" onPress={confirmCommentSubmission}/>
      <View style={styles.cancelButton}>
      <Button title="Annuler" color="red" onPress={confirmCancelSubmission} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center', // Add this line
  },
  cancelButton: {
    marginTop: 10,
  },
  starRating: {
    color: 'yellow',
  },
  input: {
    marginTop: 30,
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default CommentScreen;