import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [item, setUserData] = useState(null);

  // Fonction pour récupérer les données utilisateur après connexion
  const fetchUserData = async () => {
    try {
      // Effectuez une requête à votre API pour récupérer les données utilisateur
      const response = await fetch('http://139.59.189.145/api/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Assurez-vous de remplacer 'userToken' par le jeton JWT de l'utilisateur
          'Content-Type': 'application/json',
        },
      });

      // Vérifiez si la réponse est réussie
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données utilisateur');
      }

      // Parsez la réponse JSON
      const item = await response.json();

      // Mettez à jour l'état avec les données utilisateur récupérées
      setUserData(item);
    } catch (error) {
      console.error('Erreur lors de la récupération des données utilisateur :', error);
    }
  };

  useEffect(() => {
    // Appelez fetchUserData lorsque le composant est monté pour récupérer les données utilisateur
    fetchUserData();
  }, []); // Utilisez une dépendance vide pour que cela ne soit exécuté qu'une seule fois après le montage initial

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {item && (
        // Affichez les données utilisateur si elles existent
        <>
          <Text>Nom: {item.name}</Text>
          <Text>Email: {item.email}</Text>
          {/* Ajoutez d'autres champs ici selon les données de votre utilisateur */}
        </>
      
      )}
    </View>
  );
};

export default App;
