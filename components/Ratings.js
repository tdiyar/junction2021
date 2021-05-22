import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Button, ScrollView} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
import country_list from './Countries';
import { DataTable } from 'react-native-paper';


export default function Ratings({navigation}) {
    var percent = "54%";
    const table = country_list.map((entry) => 
      <DataTable.Row>
        <DataTable.Cell>{entry.number}</DataTable.Cell>
        <DataTable.Cell>{entry.name}</DataTable.Cell>
        <DataTable.Cell>{entry.index}</DataTable.Cell>
      </DataTable.Row>
    );
    return (
        <View style={{ flex: 1,}}>
          <ScrollView style={{top:55}}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>#</DataTable.Title>
                <DataTable.Title>country</DataTable.Title>
                <DataTable.Title>index</DataTable.Title>
              </DataTable.Header>
              {table}
            </DataTable>
          </ScrollView>
        <View style={styles.menu}>
              <Icon name='menu' style = {{margin: 10, height: 45,}} size={30} onPress={() => navigation.openDrawer()}></Icon>
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
