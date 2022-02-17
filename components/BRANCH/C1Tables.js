import { FlatList, StyleSheet, Text, View, RefreshControl,ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import data from '../../data/HomeButtons';
import Cards3 from '../cardTable'
import { useSelector,useDispatch } from 'react-redux';
import * as functions from '../../api/APIs';
import * as actions from '../../store/actions/Actions';
 //import {ScrollView} from 'react-native-gesture-handler';
const C1Tables = ({navigation,route}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const data = route.params.data
  //console.warn(data)
  const dispatch = useDispatch();
  const c1Tables = useSelector(state => state.Tables.c1Tables)
  const c1TablesReady = useSelector(state => state.Tables.c1TablesREADY)
  //console.log("my tables " + JSON.stringify(c1Tables));
  const navigate =(x,item)=>{
    navigation.navigate(x,{item})
   // navigation.navigate(x)
  }
  const allTablesHandler = TABLES =>{
    dispatch(actions.getTables(TABLES));
  }
  async function getTables(ownerID){
    result = await functions.Get_Table_By_OWNER_ID(ownerID);
    if (result !== null && result !== undefined) {
      allTablesHandler(result);
    }
  }

  const onRefresh = React.useCallback(() => {
    
    setRefreshing(true);
    getTables(1).then(()=>{setRefreshing(false)})
    // hon bet3ayet lal fucntion li bada t3abbeh el redux data men api
  }, []);


  useEffect(() => {
    getTables(1)
    //getExtensions(1)
}, []);
  return (
    <View
    style={{backgroundColor:"dimgrey",flex:1}}
   
    >
    <FlatList
     refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
       style={{backgroundColor:'black'}}
       data={ data? c1TablesReady : c1Tables}
       renderItem={
           ({item}) => {
           return (
             <Cards3 Title ={item.TABLE_NAME} type={item.iconType} name={item.iconName}  navtitle={item.navigation} navigateTo={navigate} cNb={item.NB_OF_TYPE_C}
             aNb={item.NB_OF_TYPE_A} item={item} data={data}/>
           )
         }
       }
       keyExtractor={(item) => item.TABLE_ID}
       //horizontal
       numColumns={2}
       //showsHorizontalScrollIndicator={false}
     />
 </View>
  );
};

export default C1Tables;

const styles = StyleSheet.create({});
