import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

const TheaterMapScreen = () => {
  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    // Fetch theaters from API
    fetch('')
      .then(response => response.json())
      .then(data => setTheaters(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <MapView style={{ flex: 1 }}>

    </MapView>
  );
};

export default TheaterMapScreen;