
import React from 'react';
import * as Animatable from 'react-native-animatable';
import {
    View,
    Text,
    StyleSheet 
  } from 'react-native';

function Splach({navigation}) {
    setTimeout(()=>{
       navigation.replace('Home')

    },2000);
    return(
        <View style={styles.container}>
            <Text 
            animation="slideInDown"
            style ={styles.text}>
                Campus Recruirtment System
            </Text>
        
        </View>
    )
    
}


export default Splach ;

const styles = StyleSheet.create({
    container:{
        flex:1 , 
        backgroundColor: '#dc143c'
    } , 
    text:{
      textAlign: 'center'  ,
     color: 'white' ,
     fontWeight: 'bold' ,
     fontStyle : 'italic' ,
     marginTop : 300 ,
     fontSize : 25
    }  
})