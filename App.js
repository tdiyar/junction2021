import 'react-native-gesture-handler';
import React from 'react';

import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Screen} from 'react-native';
import Map from './components/Map.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlaceInfoPage from './components/PlaceInfoPage.js';
import CountryInfoPage from './components/CountryInfoPage.js';
import Ratings from './components/Ratings';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function Stacks(){
  return (<Stack.Navigator>
        <Stack.Screen
          name="Map"
          component={Map}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="CountryInfoPage" 
          component={CountryInfoPage}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen 
          name="PlaceInfoPage" 
          component={PlaceInfoPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>);
}
export default function App() {

  return (
    <NavigationContainer>
      
      {/* <SidePanel/> */}
      <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Map" component={Stacks} />
            <Drawer.Screen name="Ratings" component={Ratings} />
      </Drawer.Navigator>
    </NavigationContainer>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
