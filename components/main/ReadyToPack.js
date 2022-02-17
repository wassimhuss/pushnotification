import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import data from '../../data/HomeButtons'
import Cards3 from '../cardTable'
import Cards from '../Cards'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import C1Tables from '../BRANCH/C1Tables';
import C2Tables from '../BRANCH/C2Tables';
const Tab = createMaterialTopTabNavigator();
const ReadyToPack = (route) => {
  //const items = route.params.item.item
    return (
      <Tab.Navigator 
      
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: { fontSize: 22 },
        tabBarStyle: { backgroundColor: 'black',borderBottomWidth:1 },
        tabBarIndicatorStyle:{
         backgroundColor:"dimgray",
         height:3
        }
      }}
      >
      <Tab.Screen name="c1" component={C1Tables} initialParams={{ data: true }} />
      <Tab.Screen name="c2" component={C2Tables} initialParams={{ data: true }} />
      <Tab.Screen name="b2" component={C2Tables} initialParams={{ data: true }} />
    </Tab.Navigator>
    )
}

export default ReadyToPack

const styles = StyleSheet.create({})
