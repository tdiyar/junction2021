import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FaIcon from 'react-native-vector-icons/FontAwesome';


function PlaceInfoPage({navigation, route}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntIcon name='arrowleft' style={styles.back} size={35} onPress={() => navigation.navigate('Map')}/>
                <View style={styles.imageContainer} onPress={() => alert('lsdfd')}>
                    <Image
                        source={{uri: 'https://www.koreatechtoday.com/wp-content/uploads/2019/12/en_spot_0_1537495127.jpg'}}
                        style={{height: 200}}
                    />
                </View>
                <View style={styles.headerText}>
                    <Text style={styles.titleText}> {route.params.place} </Text>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <FaIcon
                            name='map-marker'
                            size={20}
                            style={styles.buttonIcon}
                        />
                        <Text style={styles.buttonText}> Directions </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.separator}/>
            <View style={styles.content}>
                <Text style={styles.contentTitle}> Overview </Text>    
                <Text> Address: 291 Daehak-ro, Eoeun-dong, Yuseong-gu, Daejeon </Text>
                <Text> Open hours: 09:00-18:00 Mon-Fri </Text>
                <Text> Phone: 042-350-2114 </Text>    
            </View>
            <View style={styles.separator}/>
        </View>
    );
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

export default PlaceInfoPage;