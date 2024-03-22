import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeIcon from '../composants/atoms/icons/HomeIcon';
import SpectacleIcon from './atoms/icons/SpectaclesIcon';
import TheatreIcon from './atoms/icons/MasquesTheatre';
import LoginIcon from './atoms/icons/LoginIcon';
import React from 'react';
function HomeScreen({ navigation }) {
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerStyle: {
          backgroundColor: '#F43A3A', // Changez la couleur ici
        },
        headerLeft: () => (
          <Image
            source={require('../assets/image.png')}
            style={{ width: 50, height: 50, marginLeft: 10 }}
          />
        ),
      });
    }, [navigation]);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }

  export default HomeScreen;
  