import React, {useState, useRef} from 'react';

import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';


import { StyleSheet, Text, View, Dimensions, TextInput, Button } from 'react-native';
import PercentSign from './PercentSign.js'

import FixModal from './FixModal.js'
import Icon_d from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements'



export default function Map({navigation}) {
  
  const [coordinate, setCoordinate] = useState( {longitudeDelta:200, latitudeDelta:300, latitude:36.3535152, longitude:127.3420604  }); 
  const [modal, setModal] = useState(false );

  const nodes = [ 
  {id:1, title:"comthign",  coordinate:{latitude:36.3533152, longitude:127.3620604} },
  {id:5, title:"comthign",  coordinate:{latitude:36.3283152, longitude:127.3820604} },
  {id:6, title:"comthign",  coordinate:{latitude:36.3363152, longitude:127.3780604} },
  {id:7, title:"comthign",  coordinate:{latitude:36.3213152, longitude:127.3890604} },
  {id:2, title: "comthign",  coordinate:{latitude:36.3535152, longitude:127.3450604} },
  { id:3,title: "comthign",  coordinate:{latitude:36.3432152, longitude:127.1430604} },
  { id:4, title:"comthign",  coordinate:{latitude:36.3131152, longitude:127.4420614} },
  ]

  return (
    <View style={styles.container}>


      <FixModal modalVisible={modal}  setModalVisible ={setModal} />

      <MapView loadingEnabled={true} style={styles.map} 
      onRegionChangeComplete = {(e)=>{
        setCoordinate(e);
        
      } }
      onPress={() => navigation.navigate('PlaceInfoPage', { place: 'KAIST' })}      
      provider={PROVIDER_GOOGLE}
      > 

    { nodes.map ( (place)=> <Marker  onPress={() =>setModal(true)}  key={place.id} title = {place.tile} coordinate={place.coordinate} >
    <Icon_d name="wrench" size={30} color="#900"    />
    </Marker>  ) }
        
      </MapView>

      <PercentSign coordinate = { coordinate }  >  </PercentSign>
      
      <View style={{top: 15, position: 'absolute', flexDirection: 'row', alignItems: 'center', paddingLeft: 10, paddingRight: 10} }>
        <View>
          <Icon name='menu' size={30} onPress={() => navigation.openDrawer()}></Icon>
        </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    // marginTop: 30,
    // position: 'absolute',
    // top: 30,
    // width: '90%',
    flex: 1
  },
  menu: {
    position: 'absolute',
    top:40,
    left:10,
    width:'10%',
  }
});
