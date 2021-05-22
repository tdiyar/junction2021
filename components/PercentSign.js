import React, {useState} from 'react';

import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Alert, Modal, Pressable } from 'react-native';

import axios from "axios";


export default function PercentSign({coordinate}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [address, setAdress] = useState (false);

  
    const getAddress = () => {
      const options = {
        method: 'GET',
        url: 'https://trueway-geocoding.p.rapidapi.com/ReverseGeocode',
        //params: {location: '47.7879493,-22.3961974', language: 'en'},
        params: {location: coordinate.latitude + ','+ coordinate.longitude, language: 'en'},
        headers: {
          'x-rapidapi-key': '670e9558a1msh69076efea89fc8cp16477djsne996ae52d44f',
          'x-rapidapi-host': 'trueway-geocoding.p.rapidapi.com'
        }
      };
  
      axios.request(options).then(function (response) {
        //console.log(response.data);
        setAdress (response.data.results[0]);
      }).catch(function (error) {
        console.error(error);
      });    
    }
  

    const percentageCalc = ()=>{
        if (coordinate.longitudeDelta + coordinate.latitudeDelta > 18){
            return "Choose a smaller region"
        }
        return 12+ Math.floor(((coordinate.latitude+coordinate.longitude + coordinate.longitudeDelta + coordinate.latitudeDelta) +4502 )%70) + '%';
    }

  return (
    <View style={styles.container}>
      <Text onPress={() => {
          setModalVisible(true);
          getAddress();
          } } >  {percentageCalc()}    </Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
                {
                    address === undefined ? 
                    <>
                    No information is available for this region
                    </>
                    :
                    <> 
                    Friendlyness: {percentageCalc()} {"\n"}
                    Country: {address.country} {"\n"}
                    Region: {address.region} {"\n"}
                    </>
                }

                
            </Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },

  container:{
    position: 'absolute',
    top: 80,
    width: 185,
    borderRadius: 6,
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
