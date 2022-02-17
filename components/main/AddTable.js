import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/bruce';
import { Checkbox } from 'react-native-paper';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import * as functions from '../../api/APIs';
import * as actions from '../../store/actions/Actions';
import BouncyCheckboxGroup, {
    ICheckboxButton,
  } from "react-native-bouncy-checkbox-group";
import { useDispatch } from 'react-redux';
//import { TextInput } from 'react-native-paper';
const AddTable = ({navigation}) => {
  const dispatch = useDispatch();
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [depo, setdepo] = useState("");
  const AddUserHandler = async()=> {
    var table = new Object();
    table.TABLE_ID= -1 ; 
    table.TABLE_NAME= text1; 
    table.DEPO_ID= depo; 
    table.NB_OF_TYPE_A= text2; 
    table.NB_OF_TYPE_c= text3; 
   // console.warn(JSON.stringify(uData));
   result = await  functions.Edit_Table(table)
   dispatch(actions.addTables(result))
   if(result){
    alert(`table ${text1} has been added`)
    navigation.replace('ALLapp')
   }
  // else{
  //   navigation.navigate('MyTabs');
  // }
  }
   let staticData =  [
        {
          id: 0,
          text:1,
          size:40,
          fillColor:"black",
          unfillColor:"grey",
          textStyle:{ fontFamily: "JosefinSans-Regular",fontSize:20,color:"white" },
          iconStyle:{ borderColor: "white" },
          style:{marginHorizontal:"10%"}
        },
        {
          id: 1,
          text:2,
          size:40,
          fillColor:"black",
          unfillColor:"grey",
          textStyle:{ fontFamily: "JosefinSans-Regular",fontSize:20,color:"white" },
          iconStyle:{ borderColor: "white" },
          style:{marginHorizontal:"10%"}
        },
       
      ];
   
    return (
        <View style={{backgroundColor:"dimgrey",flex:1,justifyContent:"center",marginTop:-50}}>
            <TextInput
            
            placeholderTextColor={'white'}
            placeholder='TableName'
             style={styles.input}
             onChangeText={text => setText1(text)}
    />
     <TextInput
     keyboardType='number-pad'
            placeholderTextColor={'white'}
            placeholder='number of type C phones'
             style={styles.input}
             onChangeText={text => setText2(text)}
    />
     <TextInput
     keyboardType='number-pad'
            placeholderTextColor={'white'}
            placeholder='number of type A phones'
             style={styles.input}
             onChangeText={text => setText3(text)}
    />   
    
    {/* <TouchableOpacity style={{width:200,height:50,backgroundColor:"orange",alignSelf:"center",marginTop:"10%",borderRadius:10}}>
        <Text>

        </Text>
    </TouchableOpacity> */}
    <View style={{alignItems:"center",justifyContent:"center",marginTop:"10%",width:"100%"}}>
        <View style={{marginBottom:"10%",justifyContent:"center",alignItems:"center"}}>
    <BouncyCheckboxGroup
    size={40}
  data={staticData}
  onChange={(selectedItem) => {
    setdepo(selectedItem.text)
   // console.log("SelectedItem: ", JSON.stringify(selectedItem.text));
  }}
/>
</View>
    {/* <View style={{flexDirection:"row",justifyContent:"center",alignContent:"space-between",marginBottom:"10%"}}> 
    <BouncyCheckbox
    style={{marginHorizontal:"10%"}}
  size={40}
  fillColor="black"
  unfillColor="#FFFFFF"
  text="C1"
  iconStyle={{ borderColor: "white" }}
  textStyle={{ fontFamily: "JosefinSans-Regular",fontSize:20,color:"white" }}
  onPress={(isChecked) => {}}
/>

<BouncyCheckbox
style={{marginHorizontal:"10%"}}
  size={40}
  fillColor="black"
  unfillColor="#FFFFFF"
  text="C2"
  iconStyle={{ borderColor: "white" }}
  textStyle={{ fontFamily: "JosefinSans-Regular",fontSize:20 ,color:"white" }}
  onPress={()=>setChecked(true)}
/>
</View> */}
    <AwesomeButtonRick
    width={200} 
     progress
     
     onPress={(next) => { 
         
        setTimeout(() => {
          next(() => { AddUserHandler()});
        }, 1000);
      }}
    type="primary">create table</AwesomeButtonRick>
    </View>
        </View>
    )
}

export default AddTable

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
}
})
