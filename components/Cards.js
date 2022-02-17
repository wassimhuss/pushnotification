import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity ,Dimensions} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
Entypo.loadFont();
SimpleLineIcons.loadFont();
const Cards = ({Title,type,name,navigation,navtitle}) => {
    return (
        <TouchableOpacity onPress={()=>navigation(navtitle,{navtitle})} style={{ flex:1}}>
        <View style={styles.Container}>
            <View style={{marginLeft:"10%"}}>
            {type=='Entypo'? 
            <Entypo name={name} size={35} color={'mediumspringgreen'} />
        : 
          <SimpleLineIcons name={name} size={30} color={'mediumspringgreen'}/>
        }
        </View>
            <View style={{alignItems:'center',justifyContent:"center"}}>
            <Text style={{fontSize:25,fontWeight: 'bold',color:"white"}}>{Title}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default Cards

const styles = StyleSheet.create({
    Container: {
          backgroundColor:"dimgray",
          width:"80%",
          height: 160,
          borderRadius:9,
          margin:18,
           justifyContent:"space-evenly",
           //alignItems:"center",
          borderBottomColor:"mediumspringgreen",
          borderBottomWidth:4,
          borderBottomLeftRadius:9

      },
})
