import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import Geolocation from '@react-native-community/geolocation'
import MapViewDirections from 'react-native-maps-directions';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';



export default function HospitalDetailMap() {
   const origin = { latitude: 37.3318456, longitude: -122.0296002 };
   const destination = { latitude: 37.771707, longitude: -122.4053769 };
   const GOOGLE_MAPS_APIKEY = 'AIzaSyAIXfafAF22x2XNSrLKrZuE3R-N97G6qZw';
   return (
      <View style={{ flex: 1 }}>
         <MapView style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
               latitude: 37.3318456,
               longitude: -122.0296002,
               latitudeDelta: 0.02,
               longitudeDelta: 0.04,
            }}
         >
            <Marker
               coordinate={origin}
            />
            <Marker
               coordinate={destination}
            />
            <MapViewDirections
               origin={origin}
               destination={destination}
               apikey={GOOGLE_MAPS_APIKEY}
               strokeWidth={3}
               strokeColor="hotpink"
            />
         </MapView>
      </View>
   )
}