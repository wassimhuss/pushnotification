import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect ,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as functions from '../../api/APIs';
const Splashscreen = ({navigation}) => {
  async function getTables(ownerID){
    result = await functions.Get_Table_By_OWNER_ID(ownerID);
    if (result == null && result == undefined) {
      //allTablesHandler(result);
      alert('please check ur net connection.')
    }else{
      isauth ? 
      navigation.replace('ALLapp') 
      : 
      navigation.replace('Login') 
    }
  }
    const isauth = useSelector(state => state.auth.isAuth)
    useEffect(() => {
      getTables(1)
      
    }, []);
    
  return (
    <View style={{flex:1, backgroundColor:"black"}}>
      <Text></Text>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({});
