import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Button} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }

  
// function NotificationsScreen({ navigation }) {
//     return (
      
//     );
//   }

export default function Ratings({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>South KOREA NUMBERRRRR 1</Text>
            <Button onPress={() => navigation.openDrawer()} title="SideBar" />
        </View>
    );
}
