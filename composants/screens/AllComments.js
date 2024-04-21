import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import StarRating from 'react-native-star-rating';

const AllComments = ({ route }) => {
  const { showId } = route.params;
  const apiRoute = `https://api.triaonline.live/api/show/${showId}/comments`;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(apiRoute);
        const data = await response.json();
        setComments(data.comments);
      } catch (error) {
        console.error('Error fetching comments: ', error);
      }
    };

    fetchComments();
  }, [apiRoute]);

  return (
    <ScrollView style={styles.container}>
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
    backgroundColor: 'black',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
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
