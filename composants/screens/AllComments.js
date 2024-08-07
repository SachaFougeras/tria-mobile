import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import StarRating from 'react-native-star-rating';

const AllComments = ({ route }) => {
  const { showId } = route.params;
  const [averageRating, setAverageRating] = useState(null);
  const [comments, setComments] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
     
      const averageResponse = await fetch(`https://api.triaonline.live/api/shows/${showId}/average`);
      if (!averageResponse.ok) {
        console.error('Response status:', averageResponse.status);
        console.error('Response text:', await averageResponse.text());
        throw new Error('Failed to fetch data');
      }
      const averageData = await averageResponse.json();
      setAverageRating(averageData.average_rating);

      // Fetch comments
      const commentsResponse = await fetch(`https://api.triaonline.live/api/show/${showId}/comments`);
      if (!commentsResponse.ok) {
        console.error('Response status:', commentsResponse.status);
        console.error('Response text:', await commentsResponse.text());
        throw new Error('Failed to fetch data');
      }
      const commentsData = await commentsResponse.json();
      setComments(commentsData.comments);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [showId]);

  return (
    <ScrollView style={styles.container}>
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
      {comments.map((comment, index) => (
        <View key={index} style={styles.commentContainer}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={comment.note}
            fullStarColor="#FFCE21"
          />
          <Text style={styles.commentContent}>{comment.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  commentContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  commentNote: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  commentContent: {
    fontSize: 16,
    color: 'black',
  },
});

export default AllComments;