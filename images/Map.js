import React ,{useEffect, useState} from 'react';
import { View, Image, StyleSheet, Dimensions,TouchableWithoutFeedback } from 'react-native';
import MapView , {Marker}from 'react-native-maps';
import * as Location from 'expo-location'
// import {Datapraticiens} from "./dataPraticiens3";
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';


function Map() {
  const baseUrl = 'https://pba-back.shenron.dev/';

  const fetchUser = async (offset = 0) => {
    
    const configurationObject = {
      method: 'get',
      url: 'https://www.psycho-bio-acupressure.com/wp-json/cn-api/v1/entry?per_page=100&&visibility=public&&page=3',
    };
    const response = await axios(configurationObject);
    setData(response.data);
    console.log('Data from API:', response.data);
  };
  
  useEffect(() => {
    fetchUser();
  }, []); 

const [data, setData] = useState();


    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null); 
    const navigation = useNavigation(); 
    const [mapRegion, setMapregion] = useState({
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.2,
      longitudeDelta: 0.2,
    });

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            console.log('error')
            return;
          }

          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
          setMapregion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta:0.2,
            longitudeDelta:0.2,
        })
              })();
      }, []);
    
      let text = 'Waiting..';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
      }

const userLocation = async () => {

  setMapregion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta:0.2,
      longitudeDelta:0.2,
  })
}


return (
  <View  style={styles.containerTarif}>
   
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Liste des praticiens')}>
      <Ionicons name="arrow-back"       
        style={styles.backButton}
        size={50} color="black" />
    </TouchableWithoutFeedback>

    <MapView
  style={styles.mapping}
  region={mapRegion.latitude ? mapRegion : undefined}
>

{ data && data.map(Datapraticien => {
  console.log('Practitioner:', Datapraticien);
  const hasLocation = Array.isArray(Datapraticien.adr) 
    && Datapraticien.adr.length > 0 
    && 'latitude' in Datapraticien.adr[0] 
    && 'longitude' in Datapraticien.adr[0];

  if (!hasLocation) {
    return null; // Ne rend rien si l'adresse ou les coordonnées ne sont pas disponibles
  }

  return (
    <Marker 
      key={Datapraticien.id}
      coordinate={{
        latitude: parseFloat(Datapraticien.adr[0].latitude), 
        longitude: parseFloat(Datapraticien.adr[0].longitude)
      }}
      pinColor={'royalblue'}
      tracksViewChanges={false}
      onPress={() =>navigation.navigate('ShowPraticiens', {
        item:Datapraticien,
        mapRegion:mapRegion
      })}
    >
      <Image
        style={styles.imgPraticiens}
        source={require('../../assets/images/locationpin.png')}
      />
    </Marker>
  );
})}
    </MapView> 
  </View>
);
};

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  backButton:{
    position:"absolute",
    top:"10%",
    left:10,
    zIndex:1000
  },
    mapping:{
        width:ScreenWidth,
        height:ScreenHeight
    },
    imgPraticiens:{
      width:20,
      height:20
    },
    imgLocation:{
      width:30,
      height:30,
      zIndex: 100000, elevation: 100000    }
    });
    
export default Map;