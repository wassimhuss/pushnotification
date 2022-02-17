import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
Entypo.loadFont();
SimpleLineIcons.loadFont();
const CardExtension = ({Title,type,name,navigation,navtitle,NB_OF_TYPE_A,NB_OF_TYPE_C}) => {
    return (
        <TouchableOpacity onPress={()=>navigation(navtitle)} style={{justifyContent:"center",alignItems:"center"}}>
        <View style={styles.Container}>
            <View style={{justifyContent:"space-between",alignItems:"center"}}>
            <View style={{marginTop:'5%'}}>
                <Text style={{color:"white", fontSize:20}}>
                    Type C extensions : {NB_OF_TYPE_C}
                </Text>
                </View>
                <View style={{marginTop:'20%'}}>
                <Text style={{color:"white", fontSize:20}}>
                    Type A extensions : {NB_OF_TYPE_A}
                </Text>
                </View>
            </View>
            {/* <View style={{}}>
            {type=='Entypo'? 
            <Entypo name={name} size={35} color={'mediumspringgreen'} />
        : 
          <SimpleLineIcons name={name} size={30} color={'mediumspringgreen'}/>
        }
        </View> */}
            
        </View>
        </TouchableOpacity>
    )
}

export default CardExtension

const styles = StyleSheet.create({
    Container: {
        flex: 1,
          backgroundColor:"dimgray",
          width:350,
          height: 180   ,
          borderRadius:9,
          margin:18,
          // justifyContent:"space-evenly",
           //alignItems:"center",
          borderBottomColor:"mediumspringgreen",
          borderBottomWidth:4,
          borderBottomLeftRadius:9

      },
})
