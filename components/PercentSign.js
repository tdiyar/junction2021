import React, {useState} from 'react';

import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Alert, Modal, Pressable, TouchableOpacity } from 'react-native';

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
            return "?"
        }
        return 12+ Math.floor(((coordinate.latitude+coordinate.longitude + coordinate.longitudeDelta + coordinate.latitudeDelta) +4502 )%70);
    
    }

    const getColor = () => {
        let tmp = percentageCalc();
        if(tmp == '?') {
          return '#696969';
        } else if(parseInt(tmp) <= 20){
          return 'red';
        } else if(parseInt(tmp) >= 70) {
          return '#228B22';
        } else return 'orange';
    }

  return (
    <>
      <Text onPress={() => {
        setModalVisible(true);
        getAddress();
      }} style={{position: 'absolute', top: 90, left: 10, fontSize: 26, alignSelf: 'center', color: getColor(), fontWeight: 'bold'}}>  {percentageCalc()}    </Text>

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
          {
            address === undefined 
              ? (
                <Text style={styles.modalText}> No information is available for this region </Text>
              ) 
              : (
                <>
                  <Text style={styles.modalText}> <Text style={{fontWeight: 'bold'}}> Inclusivity: </Text> {percentageCalc()} </Text>
                  <Text style={styles.modalText}> <Text style={{fontWeight: 'bold'}}> Country: </Text> {address.country} </Text>
                  <Text style={styles.modalText}> <Text style={{fontWeight: 'bold'}}> Region: </Text> {address.region} </Text>
                </>
              )
          }
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Hide</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    </>
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
        marginTop: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 5,
        // textAlign: "center"
        alignSelf: 'flex-start',
      },

  container:{
    position: 'absolute',
    // top: 80,
    // left: 10,
    flexDirection: 'row',
    width: 60,
    height: 60,
    borderRadius: 30,
    color: '#000',
    borderColor: '#666',
    backgroundColor: '#FFF',
    borderWidth: 1,
    // alignItems: 'center',
    justifyContent: 'center'
  },
});
