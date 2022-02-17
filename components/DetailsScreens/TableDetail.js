import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View ,TouchableOpacity} from 'react-native'
import BouncyCheckboxGroup from 'react-native-bouncy-checkbox-group';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/bruce';
import { useSelector,useDispatch } from 'react-redux';
import * as functions from '../../api/APIs';
import * as actions from '../../store/actions/Actions';
const TableDetail = ({route,navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.userData)
  const items = route.params.item.item
  const [text1, setText1] = useState(items?.TABLE_NAME);
  const [text2, setText2] = useState(items?.NB_OF_TYPE_C);
  const [text3, setText3] = useState(items?.NB_OF_TYPE_A);
  const [text4, setText4] = useState(items?.CHARGING_PERCENTAGE);
  const [depo, setdepo] = useState(items?.DEPO_ID);
  //console.log("my items "+JSON.stringify(items));
  const EditUserHandler = async()=> {
    let table = new Object();
    table=items;

    // table.TABLE_ID= items.TABLE_ID ; 
    table.TABLE_NAME= text1; 
    table.DEPO_ID= depo; 
    table.NB_OF_TYPE_A= text2; 
    table.NB_OF_TYPE_c= text3; 
   // console.warn(JSON.stringify(uData));
   result = await  functions.Edit_Table(table)
   dispatch(actions.addTables(result))
   if(result){
    alert(`table ${text1} has been edited`)
    navigation.goBack()
   }
  }
  const EditPercentage = async()=> {
    let table = new Object();
    table=items; 
    table.CHARGING_PERCENTAGE= text4; 
   result = await  functions.Edit_Table(table)
   dispatch(actions.addTables(result))
   if(result){
    alert(`table ${text1} has been edited`)
    navigation.goBack()
   }
  }
  const TableCharge = async(data)=> {
    let table = new Object();
    table=items;
    table.IS_CHARGING= data; 
   // console.warn(JSON.stringify(uData));
   result = await  functions.Edit_Table(table)
   dispatch(actions.addTables(result))
   if(result){
    alert( data ? `Table ${text1} is  charging` : `table ${text1} is discharhing`)
    navigation.goBack()
   }
  }
    let staticData =  [
        {
          id: 1,
          text:'c1',
          size:30,
          fillColor:"black",
          unfillColor:"grey",
          textStyle:{ fontFamily: "JosefinSans-Regular",fontSize:20,color:"white" },
          iconStyle:{ borderColor: "white" },
          style:{marginHorizontal:"10%"}
        },
        {
          id: 2,
          text:"c2",
          size:30,
          fillColor:"black",
          unfillColor:"grey",
          textStyle:{ fontFamily: "JosefinSans-Regular",fontSize:20,color:"white" },
          iconStyle:{ borderColor: "white" },
          style:{marginHorizontal:"10%"}
        },
       
      ];
    return (
        <View style={{flex:1,backgroundColor:"black"}}>

            {/* edit table component !!!!! */}
            {user.USER_TYPE_CODE == "001" ? 
             <View style={{backgroundColor:"black",flex:1 , borderBottomColor:"white",borderBottomWidth:0.5}}> 
             <TextInput
             
             placeholderTextColor={'white'}
             placeholder={items?.TABLE_NAME}
              style={styles.input}
              onChangeText={text => setText1(text)}
     />
      <TextInput
      keyboardType='number-pad'
             placeholderTextColor={'white'}
             placeholder={'number of type C phones : ' + items?.NB_OF_TYPE_C }
              style={styles.input}
              onChangeText={text => setText2(text)}
     />
      <TextInput
      keyboardType='number-pad'
             placeholderTextColor={'white'}
             placeholder={'number of type A phones : ' + items?.NB_OF_TYPE_A }
              style={styles.input}
              onChangeText={text => setText3(text)}
     />
     <View style={{marginVertical:"5%",justifyContent:"center",alignItems:"center"}}>
     <BouncyCheckboxGroup
     size={40}
   data={staticData}
   onChange={(selectedItem) => {
    setdepo(selectedItem.id);
   }}
 />
 <AwesomeButtonRick
 style={{marginTop:"4%"}}
     width={150}
     height={40}
      progress
      
      onPress={(next) => { 
          
         setTimeout(() => {
           next(() => {EditUserHandler()});
         }, 1000);
       }}
     type="primary">Edit table</AwesomeButtonRick>
 </View>
             </View> 
             :
             <View style={{backgroundColor:"black",flex:1,justifyContent:"space-evenly",alignItems:"center"}}>
               <View style={{width:"100%"}}>
                <Text style={{color:"white",alignSelf:"center",fontSize:20}}>Charge Percentage : </Text>
               <TextInput 
               keyboardType='numeric'
               style={{...styles.input,textAlign:"center"}}
               placeholder={items?.CHARGING_PERCENTAGE.toString()}
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
           next(() => {EditPercentage()});
         }, 1000);
       }}
     type="primary">Edit table</AwesomeButtonRick>
               </View>
                <TouchableOpacity
                  onPress={()=>TableCharge(true)}
                disabled={items.IS_CHARGING ? true : false }  
                style={{...styles.button,
                backgroundColor:items.IS_CHARGING ? "gray" : "green"
                }}>
                   <Text style={{color:"white",fontWeight:"bold"}}>
                       IN-CHARGE
                   </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>TableCharge(false)}
                  disabled={items.IS_CHARGING ? false : true }  
                  style={{...styles.button,
                  backgroundColor:items.IS_CHARGING ? "red" : "gray"
                  }}>
                    <Text style={{color:"white",fontWeight:"bold"}}>OUT-CHARGE</Text>   
                </TouchableOpacity>
            </View>
          }
           
           
            
        </View>
    )
}

export default TableDetail

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
