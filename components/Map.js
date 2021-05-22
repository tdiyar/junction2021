import React from 'react';

import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Map() {

  const nod = [ {"name":null,"wheelchair":"no","wheelchair_description":null,"wheelchair_toilet":"unknown","node_type":{"id":13,"identifier":"subway_entrance"},lat:36.3533152, lon:127.3420604,"id":626355502,"category":{"id":1,"identifier":"public_transfer"},"street":null,"housenumber":null,"city":null,"postcode":null,"website":null,"phone":null},
  {"name":null,"wheelchair":"no","wheelchair_description":null,"wheelchair_toilet":"unknown","node_type":{"id":13,"identifier":"subway_entrance"},lat:36.3531737,lon:127.3415303,"id":626355505,"category":{"id":1,"identifier":"public_transfer"},"street":null,"housenumber":null,"city":null,"postcode":null,"website":null,"phone":null},{"name":null,"wheelchair":"no","wheelchair_description":null,"wheelchair_toilet":"unknown","node_type":{"id":13,"identifier":"subway_entrance"},"lat":36.3536677,"lon":127.342159,"id":626355506,"category":{"id":1,"identifier":"public_transfer"},"street":null,"housenumber":null,"city":null,"postcode":null,"website":null,"phone":null},{"name":null,"wheelchair":"no","wheelchair_description":null,"wheelchair_toilet":"unknown","node_type":{"id":13,"identifier":"subway_entrance"},"lat":36.3534617,"lon":127.3411759,"id":626355507,"category":{"id":1,"identifier":"public_transfer"},"street":null,"housenumber":null,"city":null,"postcode":null,"website":null,"phone":null},{"name":null,"wheelchair":"no","wheelchair_description":null,"wheelchair_toilet":"unknown","node_type":{"id":13,"identifier":"subway_entrance"},"lat":36.3539358,"lon":127.3418508,"id":626355514,"category":{"id":1,"identifier":"public_transfer"},"street":null,"housenumber":null,"city":null,"postcode":null,"website":null,"phone":null},{"name":null,"wheelchair":"no","wheelchair_description":null,"wheelchair_toilet":"unknown","node_type":{"id":13,"identifier":"subway_entrance"},"lat":36.3539034,"lon":127.3411317,"id":626355518,"category":{"id":1,"identifier":"public_transfer"},"street":null,"housenumber":null,"city":null,"postcode":null,"website":null,"phone":null},{"name":"유성온천","wheelchair":"yes","wheelchair_description":null,"wheelchair_toilet":"unknown","node_type":{"id":12,"identifier":"station"},"lat":36.3537976,"lon":127.3416577,"id":355173695,"category":{"id":1,"identifier":"public_transfer"},"street":null,"housenumber":null,"city":null,"postcode":null,"website":null,"phone":null}];

  const nodes = [ {id:1, title:"comthign",  coordinate:{latitude:36.3533152, longitude:127.3420604} },
  {id:2, title: "comthign",  coordinate:{latitude:36.3535152, longitude:127.3420604} },
  { id:3,title: "comthign",  coordinate:{latitude:36.3532152, longitude:127.3430604} },
  { id:4, title:"comthign",  coordinate:{latitude:36.3531152, longitude:127.3420614} },
    ]


  return (
      <MapView style={styles.map} onPress={() => alert('you tapped the map!!')}>
        { nodes.map ( (place)=> <Marker key={place.id} title = {place.tile} coordinate={place.coordinate} />  ) }
      </MapView>
  );
}

const styles = StyleSheet.create({
  
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
