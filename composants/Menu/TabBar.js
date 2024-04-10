import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeIcon from '../../assets/icons/HomeIcon';
import SpectacleIcon from '../../assets/icons/SpectaclesIcon';
import TheatreIcon from '../../assets/icons/MasquesTheatre';
import LoginIcon from '../../assets/icons/LoginIcon';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import TheaterScreen from '../screens/TheaterScreen';
import ShowScreen from '../screens/ShowScreen';
import React from 'react';


function SettingsScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'white',
      headerLeft: () => (
        <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require('../../images/image.png')} />
        </View>  
      ),
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text></Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
   <Tab.Navigator
screenOptions={{
  tabBarActiveTintColor: '#F43A3A',
  tabBarInactiveTintColor: 'white',
  tabBarStyle: {
    backgroundColor: '#100F0F',
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
    component={ShowScreen}
    options={{
      tabBarIcon: ({ color, size }) => <SpectacleIcon color={color} size={size} />,
    }}
  />
  <Tab.Screen
    name="Théâtres"
    component={TheaterScreen}
    options={{
      tabBarIcon: ({ color, size }) => <TheatreIcon color={color} size={size} />,
    }}
  />
  <Tab.Screen
    name="Compte"
    component={AccountScreen}
    options={{
      tabBarIcon: ({ color, size }) => <LoginIcon color={color} size={size} />,
    }}
  />
</Tab.Navigator>
  );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#140A0A',
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 10,
  }
});