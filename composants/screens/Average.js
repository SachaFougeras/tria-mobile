import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const Average = ({ route }) => {
  const [averageRating, setAverageRating] = useState(null);
  const { showId } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://139.59.189.145/api/shows/${showId}/average`);
        if (!response.ok) {
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
    <View>
        <Text>Average Rating: {averageRating}</Text>
    </View>
  );
};

export default Average;
