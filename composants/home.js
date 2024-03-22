import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeIcon from '../composants/atoms/icons/HomeIcon';
import SpectacleIcon from './atoms/icons/SpectaclesIcon';
import TheatreIcon from './atoms/icons/MasquesTheatre';
import LoginIcon from './atoms/icons/LoginIcon';
import React from 'react';

import { StyleSheet, ScrollView } from 'react-native';

function HomeScreen({ navigation }) {
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
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Découvrez les nouveautés</Text>

      {/* Replace this with real data */}
      <View style={styles.play}>
      <View>
        <Text style={styles.playTitle}>Cyrano DeBergerac</Text>
        </View>
        <Text style={styles.playDescription}>Un mousquetaire au nez diforme mais au savoir incommensurable est secrètement amoureuse d'une femme se prénommant Roxanne mais qui n'a d'yeux que pour le beau Tristan. Mais Tristant quant à lui est un mousquetaire au physique attirant mais qui n'est pas doué pour la poèsie. Roxanne en revanche n'aime que les hommes de lettres qui parviennent à la séduire avec des mots. Cyrano s'engage à aider Tristan pour séduire RoxanneUn mousquetaire au nez diforme mais au savoir incommensurable est secrètement amoureuse d'une femme se prénommant Roxanne mais qui n'a d'yeux que pour le beau Tristan. Mais Tristant quant à lui est un mousquetaire au physique attirant mais qui n'est pas doué pour la poèsie. </Text>
        <Button 
        style={styles.button}
          title="Détails" 
          onPress={() => navigation.navigate('Detail', { playTitle: 'Cyrano DeBergerac' })}
        />
      </View>

      {/* Add more plays... */}
    </ScrollView>
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
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  play: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  playTitle: {
    fontSize: 20,
    color: '#000',
  },
  button: {
    backgroundColor: '#FF3131',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  playDescription: {
    fontSize: 16,
    color: '#000',
  },
});

export default HomeScreen;