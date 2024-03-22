import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeIcon from '../composants/atoms/icons/HomeIcon';
import SpectacleIcon from './atoms/icons/SpectaclesIcon';
import TheatreIcon from './atoms/icons/MasquesTheatre';
import LoginIcon from './atoms/icons/LoginIcon';
import HomeScreen from '../composants/home';
import AccountScreen from '../composants/compte';
import React from 'react';


function SettingsScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'white',
      headerLeft: () => (
        <Image
          source={require('../assets/image.png')}
          style={styles.logo}
        />
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
    component={SettingsScreen}
    options={{
      tabBarIcon: ({ color, size }) => <SpectacleIcon color={color} size={size} />,
    }}
  />
  <Tab.Screen
    name="Théâtres"
    component={SettingsScreen}
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