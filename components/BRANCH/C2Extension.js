import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import data from '../../data/HomeButtons';
import CardExtension from '../CardExtension';
import { useSelector } from 'react-redux';

const C2Extension = () => {
  const Myextensions = useSelector(state => state.extensions.c2Extension)
  return (
    <View style={{backgroundColor:"dimgrey",flex:1,justifyContent:"center"}}>
           <FlatList
      style={{backgroundColor:'black'}}
              data={Myextensions}
              renderItem={
                  ({item}) => {
                  return (
                    <CardExtension Title ={item.title} type={item.iconType}
                     name={item.iconName} 
                     navtitle={item.navigation} 
                     NB_OF_TYPE_A={item.NB_OF_TYPE_A}
                     NB_OF_TYPE_C={item.NB_OF_TYPE_B}
                     />
                  )
                }
              }
              keyExtractor={(item) => item.DEPO_ID}
              //horizontal
              numColumns={1}
              //showsHorizontalScrollIndicator={false}
            />
        </View>
  );
};

export default C2Extension;

const styles = StyleSheet.create({});
