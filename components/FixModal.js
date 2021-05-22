import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, Dimensions, Alert, Modal, Pressable } from 'react-native';
import { Image } from 'react-native-elements';

function FixModal({modalVisible, setModalVisible}) {

    return(
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
                    <View style={styles.imageView}>
                    <Image
                        source={{uri: 'http://nirmukta.com/wp-content/uploads/2012/10/van_heusen.jpg'}}
                        style={{height: 200, width: 300, borderRadius: 10,}}
                    />
                    </View>
                    <Text style={styles.modalText}>

                        <Text style={ {fontWeight: 'bold'} }> Address: </Text> 
                        291 Daehak-ro, Eoeun-dong, Yuseong-gu, Daejeon {'\n'}
                        <Text style={ {fontWeight: 'bold'} }> Problem: </Text> 
                        Installment of a ramp is needed  {'\n'}
                        <Text style={ {fontWeight: 'bold'} }> Priority: </Text> 
                        High (2-3 disabled people use per day) 


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
    )
}

const styles = StyleSheet.create({
    imageView: {
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 0,
        margin: 5,
    },
    
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
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
        marginBottom: 15,
        textAlign: "left"
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

export default FixModal;