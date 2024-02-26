import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeIcon from '../composants/icons/home.svg'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}



function SettingsScreen() {
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
  tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'red',
    style: {
      backgroundColor: 'green',
    },
  }}
>
  <Tab.Screen name="Accueil" component={HomeScreen}     options={{
      tabBarIcon: ({ color, size }) => <HomeIcon color={color} size={size} />,
    }}
  />
  <Tab.Screen name="Spectacles" component={SettingsScreen} />
  <Tab.Screen name="Théâtres" component={HomeScreen} />
  <Tab.Screen name="Settings" component={SettingsScreen} />
</Tab.Navigator>
    </NavigationContainer>
  );
}