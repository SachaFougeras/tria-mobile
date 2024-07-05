import React, { useState, useLayoutEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
const RegisterScreen = () => {
  const [nom, setNom] = useState('azertyuiop');
  const [prenom, setPrenom] = useState('azertyuiop');
  const [phone, setTel] = useState('0782671870');
  const [email, setEmail] = useState('sacha@gmail.com');
  const [birth_date, setDateOfBirth] = useState(new Date());
  const [password, setPassword] = useState('Azertyuio06*aazza');
  const [password_confirmation, setPasswordConfirmation] = useState('Azertyuio06*aazza');
  const [showPassword, setShowPassword] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [consent, setConsent] = useState(false);
   const navigation = useNavigation();

   const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowDatePicker(false);
    setDateOfBirth(currentDate);
  };
  const handleSubmit = async () => {
    // Validation
    if (!email.includes('@')) {
      alert('Veuillez entrer une adresse e-mail valide.');
      return;
    }
    if (password.length < 12) {
      alert('Le mot de passe doit contenir au moins 12 caractères.');
      return;
    }
    if (password !== password_confirmation) {
      alert('Le mot de passe et la confirmation du mot de passe doivent être identiques.');
      return;
    }
  
    try {
      const formattedDate = birth_date.toISOString().split('T')[0];
      const response = await fetch('https://api.triaonline.live/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: nom,
          first_name: prenom,
          email: email,
          birth_date: formattedDate,
          phone: phone,
          password: password,
          password_confirmation: password_confirmation,
        }),
        
      });
      
      const responseData = await response.json();
  
      if (responseData.status_code  == 200) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Votre compte est crée avec succés!' }],
        });
        console.log(responseData);
        alert(`'Vous vous êtes bien inscris !'`);
      }
      else {
        alert('Certains champs sont incorrect !');
        }
      } catch (error) {
        console.error(error);
      }
    };
    useLayoutEffect(() => {
      navigation.setOptions({
        title: 'Inscription', 
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
      });
    }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/LogoTria.png')}
        />
      </View> 
      <View style={styles.card}>
      <Text style={styles.text}>Nom:</Text>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        onChangeText={text => setNom(text)}
        value={nom}
        keyboardType="default"
        autoCapitalize="none"
      />
     </View>
      <Text style={styles.text}>Prenom:</Text>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Prenom"
        onChangeText={text => setPrenom(text)}
        value={prenom}
        keyboardType="default"
        autoCapitalize="none"
      />
      </View>

      <Text style={styles.text}>Telephone:</Text>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Numéro de téléphone"
        onChangeText={text => setTel(text)}
        value={phone}
        keyboardType="phone-pad"
        autoCapitalize="none" />
        </View>
        <Text style={styles.text}>Date de naissance</Text>
        <View style={styles.inputContainer}>
          
        <TextInput
          style={styles.input}
          placeholder="Date de naissance"
          value={birth_date.toISOString().split('T')[0]}
          editable={true}
        />
        
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
  <Icon name="calendar" size={24} color="black" /> 
</TouchableOpacity>
      </View>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={birth_date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
      <Text style={styles.text}>Email:</Text>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      </View>
      <Text style={styles.text}>Mot de passe:</Text>
      <View style={styles.inputContainer}>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <TextInput
      style={styles.input}
      secureTextEntry={!showPassword}
      value={password}
      onChangeText={setPassword}
      placeholder="12 caractères, un chiffe, une majuscule et un caractère spécial."
    />
    <TouchableOpacity 
      style={{ height: 35, justifyContent: 'center' }}
      onPress={() => setShowPassword(!showPassword)}
    >
      <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color="black" />
    </TouchableOpacity>
  </View>
</View>
  <Text style={styles.text}>Mot de passe à confirmer:</Text>
  <View style={styles.inputContainer}>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <TextInput
      style={styles.input}
      secureTextEntry={!showPassword}
      value={password}
      onChangeText={setPasswordConfirmation}
      placeholder="Password"
    />
    <TouchableOpacity 
      style={{ height: 35, justifyContent: 'center' }}
      onPress={() => setShowPassword(!showPassword)}
    >
      <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color="black" />
    </TouchableOpacity>
    
  </View>
</View>
<View style={{ flexDirection: 'row', alignItems: 'center' }}>

  <Switch
    value={consent}
    onValueChange={(newValue) => setConsent(newValue)}
  />
 <Text style={styles.itemDescription}>J'accepte les règles et conditions d'utilisation.</Text>
</View>
  
<TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>INSCRIPTION</Text>
        </TouchableOpacity>
        </View>

        </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 7,
    paddingLeft: 8,
    borderRadius: 10,
    backgroundColor: 'rgba(238, 238, 238, 1)',
  },
  input: {
    flex: 1,
    height: 45,
  },
  imageContainer: {
    
    alignItems: 'center',
  },
  button: {
    marginTop: 5,
    backgroundColor: '#FF3131',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderRadius: 20,
    width: '100%', // Ajoutez cette ligne
    alignSelf: 'center', // Ajoutez cette ligne
  },
  buttonText: {
    color: 'white',
    fontSize: 18,  
    fontWeight: 'bold', // Ajoutez cette ligne
},
    image: {
      marginBottom: 20,
    width: 100,
    height: 100,
    
  },

  itemDescription: {
   
    marginLeft: 10,
    fontSize: 15,
    color: 'white', // Change this to make the description black
  },
  link: {
    color: '#FF3131',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
export default RegisterScreen;