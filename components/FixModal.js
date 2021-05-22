import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, Dimensions, Alert, Modal, Pressable } from 'react-native';


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
            <Text style={styles.modalText}>
                    No information is available for this region                
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
    contentTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    content: {
        padding: 10,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 2,
        borderTopColor: '#D3D3D3',
        borderTopWidth: 2,
    },
    header: {
        paddingBottom: 10,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 2,
    },
    separator: {
        height: 20,
        width: '100%',
        backgroundColor: '#DCDCDC'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 100,
        padding: 10,
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
    },
    buttonIcon: {
        color: '#fff',
        marginRight: 10
    },
    imageContainer: {
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
    },
    container: {
        flex: 1
    },
    headerText: {
        marginTop: 10,
        width: '100%',
        alignItems: 'center'
        // `alignItems: 'center',
    },
    back: {
        position: 'absolute',
        top: 25,
        left: 10,
        zIndex: 999,
        color: 'rgba(0,0,0,0.8)'
    },
    titleText: {
        fontSize: 27,
        fontWeight: "bold"
    }
});  

export default FixModal;