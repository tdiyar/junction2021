import React, {useState, useRef} from 'react';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import PercentSign from './PercentSign.js'

import axios from "axios";

export default function Map() {
  
  const [coordinate, setCoordinate] = useState( {longitudeDelta:200, latitudeDelta:300, latitude:36.3535152, longitude:127.3420604  }); 


  const nodes = [ {id:1, title:"comthign",  coordinate:{latitude:36.3533152, longitude:127.3420604} },
  {id:2, title: "comthign",  coordinate:{latitude:36.3535152, longitude:127.3420604} },
  { id:3,title: "comthign",  coordinate:{latitude:36.3532152, longitude:127.3430604} },
  { id:4, title:"comthign",  coordinate:{latitude:36.3531152, longitude:127.3420614} },
  ]

  return (
    <View style={styles.container}>

      <MapView loadingEnabled={true} style={styles.map} 
      onRegionChangeComplete = {(e)=>{
        setCoordinate(e);
        
      } }

      provider={PROVIDER_GOOGLE}
      > 

        { nodes.map ( (place)=> <Marker key={place.id} title = {place.tile} coordinate={place.coordinate} />  ) }
        
      </MapView>

      <PercentSign coordinate = { coordinate }  >  </PercentSign>
      

      <View style={styles.input}>
        <TextInput
          style={{
            borderRadius: 10,
            margin: 10,
            color: '#000',
            borderColor: '#666',
            backgroundColor: '#FFF',
            borderWidth: 1,
            height: 45,
            paddingHorizontal: 10,
            fontSize: 18,
          }}
          placeholder={'Search'}
          placeholderTextColor={'#666'}
        />
      </View>
      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  input: {
    position: 'absolute',
    top: 30,
    width: '100%'
  },
});
