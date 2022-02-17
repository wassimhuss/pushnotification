import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View ,FlatList} from 'react-native'
import data from '../../data/HomeButtons'
import Cards from '../Cards';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as functions from '../../api/APIs';
import * as actions from '../../store/actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import messaging from '@react-native-firebase/messaging';
const Allapp = ({navigation}) => {
  useEffect(() => {
    // Get the device token
    messaging()
      .getToken()
      .then(token => {
        //console.log("my tokk "+token);
        setDtoken(token);
      });

    return messaging().onTokenRefresh(token => {
     // console.log(" my tok "+ token);
      setDtoken(token);
    });
  }, []);
  const [Dtoken, setDtoken] = useState(null);
  const user = useSelector(state => state.auth.userData)
  const dispatch = useDispatch();
    const navigate =(x,item)=>{
    navigation.navigate(x,{item})
   // navigation.navigate(x)
  }
  let getMultiple = async () => {
    let username;
    let pin;
    try {
      username = await AsyncStorage.getItem('username');
      pin = await AsyncStorage.getItem('pin');
      auth(1,username,pin,Dtoken)
     // console.warn(username + "  " + pin );
    } catch (e) {
    }
  };
  const ActionAuth = data =>{
    dispatch(actions.loginUser(data));
   // multiSet(username,pin)
    navigation.replace('Login')
  }
  async function auth(ownerID,username,password,Dtoken){
    console.log('wassim bhim token useeffect'+ Dtoken);
    result = await functions.Get_Authenticate(ownerID,username,password,Dtoken);
    if (result.userData == null) {
      ActionAuth(result);
    }
  }
  useEffect(() => {
    Dtoken?
    getMultiple()
    :
    null
  }, [Dtoken]);
  
    return (
        <View style={{flex:1}}>
          {/* //hon swipe */}
             <View style={{ justifyContent:"center",alignItems:"center",backgroundColor:"black" , flex:1}}>
              <Text style={{color:"white" ,fontSize:46,marginTop:"10%"}}>Account : {user?.USERNAME}</Text>
                   </View>
        <View style={{flex:2,backgroundColor:'black'}}>      
      <FlatList
              data={data}
              renderItem={
                  ({item}) => {
                  return (
                    <Cards Title ={item.title} type={item.iconType} name={item.iconName} navigation={navigate} navtitle={item.navigation} section={item.section}/>
                  )
                }
              }
              keyExtractor={(item) => item.TABLE_ID}
              //horizontal
              numColumns={2}
              //showsHorizontalScrollIndicator={false}
            />
            </View>   
   
        </View>
    )
}

export default Allapp

const styles = StyleSheet.create({})
