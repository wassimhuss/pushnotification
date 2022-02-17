import { FlatList, StyleSheet, Text, View, RefreshControl,ScrollView} from 'react-native';
import React, { useState } from 'react';
import data from '../../data/HomeButtons';
import Cards3 from '../cardTable'
import { useSelector ,useDispatch} from 'react-redux';
import * as functions from '../../api/APIs';
import * as actions from '../../store/actions/Actions';
const C2Tables = ({navigation,route}) => {
  const data = route.params.data
  const c2Tables = useSelector(state => state.Tables.c2Tables)
  const c2TablesReady = useSelector(state => state.Tables.c2TablesREADY)
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate =(x,item)=>{
    navigation.navigate(x,{item})
   // navigation.navigate(x)
  }
  const dispatch = useDispatch();
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

  return (
    <View style={{backgroundColor:"dimgrey",flex:1,justifyContent:"center"}}>
    <FlatList
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
       style={{backgroundColor:'black'}}
       data={ data ? c2TablesReady: c2Tables}
       renderItem={
           ({item}) => {
           return (
             <Cards3 Title ={item.TABLE_NAME} type={item.iconType} name={item.iconName}  navtitle={item.navigation} navigateTo={navigate} cNb={item.NB_OF_TYPE_C}
             aNb={item.NB_OF_TYPE_A} 
             item={item}
             data={data}
             />
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

export default C2Tables;

const styles = StyleSheet.create({});
