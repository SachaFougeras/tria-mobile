import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';

const Average = ({ route }) => {
  const [averageRating, setAverageRating] = useState(null);
  const { showId } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.triaonline.live/api/shows/${showId}/average`);
        if (!response.ok) {
          console.error('Response status:', response.status);
          console.error('Response text:', await response.text());
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setAverageRating(data.average_rating);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [showId]);

  return (
    <Card style={{ margin: 10 }}>
      <Card.Content>
        <Text>Average Rating: {averageRating}</Text>
      </Card.Content>
    </Card>
  );
};

export default Average;
