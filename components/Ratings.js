import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Button} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements'

export default function Ratings({navigation}) {
    var percent = "54%";
    return (
        <View style={{ flex: 1,}}>
            <Text style={{ top:'15%', left:'10%'}}>{"South Korea:" + percent + " #1"}</Text>
            <View style={styles.menu}>
              <Icon name='menu' style = {{margin: 10, height: 45,}} onPress={() => navigation.openDrawer()}></Icon>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
  menu:{
    position: 'absolute',
    top: 40,
    left: 10,
    width: '10%'
  }
})
