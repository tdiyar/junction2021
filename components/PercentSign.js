import React, {useState} from 'react';

import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function PercentSign({coordinate}) {

    const percentageCalc = ()=>{
        if (coordinate.longitudeDelta + coordinate.latitudeDelta > 18){
            return "Choose a smaller region"
        }
        return 12+ Math.floor(((coordinate.latitude+coordinate.longitude + coordinate.longitudeDelta + coordinate.latitudeDelta))%70) + '%';
    }

  return (
    <View style={styles.container}>
      <Text>  {percentageCalc()}    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    
  container:{
    position: 'absolute',
    top: 80,
    width: 200,
    borderRadius: 10,
    margin: 10,
    color: '#000',
    borderColor: '#666',
    backgroundColor: '#FFF',
    borderWidth: 1,
    height: 25,
    paddingHorizontal: 10,
    fontSize: 18,
  },
});
