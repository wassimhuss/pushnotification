import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import data from '../../data/HomeButtons'
import CardExtension from '../CardExtension'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import C1Extension from '../BRANCH/C1Extension';
import C2Extension from '../BRANCH/C2Extension';
const Tab = createMaterialTopTabNavigator();
const MyExtension = () => {
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
      <Tab.Screen name="c1" component={C1Extension} />
      <Tab.Screen name="c2" component={C2Extension} />
    </Tab.Navigator>
    )
}

export default MyExtension

const styles = StyleSheet.create({})
