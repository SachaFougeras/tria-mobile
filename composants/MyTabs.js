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
        backgroundColor: '#FF3131', // Changez la couleur ici
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

function SettingsScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      
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
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
   <Tab.Navigator
screenOptions={{
  tabBarActiveTintColor: 'black',
  tabBarInactiveTintColor: 'white',
  tabBarStyle: {
    backgroundColor: '#FF3131',
  },
}}
>
  <Tab.Screen
    name="Accueil"
    component={HomeScreen}
    options={{
      tabBarIcon: ({ color, size }) => <HomeIcon color={color} size={size} />,
    }}
  />
  <Tab.Screen
    name="Spectacles"
    component={SettingsScreen}
    options={{
      tabBarIcon: ({ color, size }) => <SpectacleIcon color={color} size={size} />,
    }}
  />
  <Tab.Screen
    name="Théâtres"
    component={HomeScreen}
    options={{
      tabBarIcon: ({ color, size }) => <TheatreIcon color={color} size={size} />,
    }}
  />
  <Tab.Screen
    name="Compte"
    component={SettingsScreen}
    options={{
      tabBarIcon: ({ color, size }) => <LoginIcon color={color} size={size} />,
    }}
  />
</Tab.Navigator>
    </NavigationContainer>
  );
}