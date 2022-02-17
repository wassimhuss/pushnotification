import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/bruce';
const ReadytopackDetails = () => {
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
      <View style={{backgroundColor:"black",flex:1,justifyContent:"space-evenly",alignItems:"center"}}>
               <View style={{width:"100%"}}>
                <Text style={{color:"white",alignSelf:"center",fontSize:20}}>number of phones  : </Text>
               <TextInput 
               keyboardType='numeric'
               style={{...styles.input,textAlign:"center"}}
              // placeholder={items?.CHARGING_PERCENTAGE.toString()}
              // value={items?.CHARGING_PERCENTAGE}
               onChangeText={text => setText4(text)}
               />
               <AwesomeButtonRick
 style={{marginTop:"4%",alignSelf:"center"}}
     width={150}
     height={40}
      progress
      
      onPress={(next) => { 
          
         setTimeout(() => {
           next(() => {});
         }, 1000);
       }}
     type="primary">Packed</AwesomeButtonRick>
               </View>
               </View>
    </View>
  )
}

export default ReadytopackDetails

const styles = StyleSheet.create({
  input:{
    marginTop:"5%",
backgroundColor:"dimgrey",
marginHorizontal:15,
height:60
,borderRadius:9,
borderWidth:2,
borderColor:"white",
fontSize:20,
fontWeight: 'bold',
color:"white",
// textAlign:"center"
textAlignVertical:"top"
},button:{
width:"40%",
height:70,
backgroundColor:"green",
borderRadius:9,
justifyContent:"center",
alignItems:"center"
}

})