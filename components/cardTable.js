import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

FontAwesome.loadFont();
SimpleLineIcons.loadFont();
Ionicons.loadFont();
const cardTable = ({navigateTo,Title,cNb,aNb,item,data}) => {
    return (
        <TouchableOpacity onPress={()=>
        
            data?  navigateTo('ReadytopackDetails',{item})
        : navigateTo('TableDetail',{item})
        }  style={{ flex:1}}>
        <View style={styles.Container}>
            <View style={{flex:1 , flexDirection:"row"}}>
                <View style={{flex:1 , justifyContent:"space-evenly",flexDirection:'column'}}>
                <Text style={styles.Title} >
               {"  "+Title}
            </Text>
            <Text style={styles.Title} >
                {' '}nb c : {cNb}
            </Text>
            <Text style={styles.Title} >
                {' '}nb a : {aNb}
            </Text>
                </View>
                {
                   item.IS_CHARGING == true ? 
                   <View style={{justifyContent:"flex-end",marginBottom:"10%",marginRight:"5%"}}>
                       <Ionicons name={"battery-charging-sharp"} size={48} color={'darkgreen'}/>
                       <Text style={{...styles.Title,color:
                "darkgreen",fontSize:25,marginTop:"-27%"
            }} >{item.CHARGING_PERCENTAGE}%</Text>
                   </View>
                     
                     :
                    <View style={{justifyContent:"flex-end",marginBottom:"10%",marginRight:"5%"}}>
                    {item.CHARGING_PERCENTAGE <= 20 ?
                   <FontAwesome name={"battery-quarter"} size={35} color={'red'} />
                 : 
                 item.CHARGING_PERCENTAGE <= 60 ?
                 <FontAwesome name={"battery-2"} size={35} color={'orangered'} />
               :
               item.CHARGING_PERCENTAGE >60  && item.CHARGING_PERCENTAGE <80 ?
               <FontAwesome name={"battery-3"} size={35} color={'orange'} />
               :
               <FontAwesome name={"battery-full"} size={35} color={'darkgreen'} />
               }
               
                <Text style={{...styles.Title,color:
                 item.CHARGING_PERCENTAGE <= 20 ? "red"
                 : 
                 item.CHARGING_PERCENTAGE <= 60 ?
                "orangered"
               : 
               item.CHARGING_PERCENTAGE >60  && item.CHARGING_PERCENTAGE <80 ?
               "orange"
               :"darkgreen"
            }} >{item.CHARGING_PERCENTAGE}%</Text>
                </View>}
            </View>
           
            <View>
        </View>
        </View>
        </TouchableOpacity>
    )
}

export default cardTable

const styles = StyleSheet.create({
    Container: {
        backgroundColor:"dimgray",
        width:"85%",
        height: 160,
        borderRadius:9,
        margin:18,
         justifyContent:"space-evenly",
         //alignItems:"center",
        borderBottomColor:"mediumspringgreen",
        borderBottomWidth:4,
        borderBottomLeftRadius:9


      },
      Title:{
          color: "white",
          fontSize:20
      }
})
