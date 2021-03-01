
import React from 'react';
import { useState } from 'react/cjs/react.development';
import {  Button, Left } from 'native-base';
import * as Animatable from 'react-native-animatable';
import database from '@react-native-firebase/database';

import auth from "@react-native-firebase/auth";

import {

    View,
    Text,
    StyleSheet , 
    TextInput, 
    TouchableOpacity,
    
  } from 'react-native';

function AdminSignupScreen({navigation}) {
  
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
    
  const signup = async function () {

     let users = {
      name ,
      email,
      password,
     
     }
    database().ref('/').Child('users').push(users)
  }
   
   
   


    return(
        <View style={styles.container}>
            <View style={styles.adminlogin}>
                <Text style={styles.admin}>Admin Registration</Text>
            </View>
              <View style={styles.form}>
              <TextInput value={name} onChangeText={(text)=>setName(text)}  placeholder="Name" style={styles.textInput}
                />
                <TextInput value={email} onChangeText={(text)=>setEmail(text)} placeholder="Email" style={styles.textInput}
                />
                 <TextInput value={password}onChangeText={(text)=>setPassword(text)}  placeholder="Password" style={styles.textInput}
                 secureTextEntry={true}
               />
               
               <Button style={styles.button}
                 onPress={signup}
               >
                   
                   <Text style={styles.textbtn}>
                    Sign-up
                   </Text>
               </Button>   
        </View>
        <View>
            <Text style={styles.account}>Do you have account ?Login</Text>
           <Button style={styles.signbtn}
            onPress={()=> navigation.navigate('Admin')}
           >
               <Text style={styles.signuptext}>
                   Login
               </Text>
           </Button>
        </View>
        </View>
    )
    
}
export default AdminSignupScreen ;

const styles = StyleSheet.create({
    container:{
        flex:1 , 
        backgroundColor: '#fff'
    } , 
    text:{
      textAlign: 'center'  ,
     color: 'white' ,
     fontWeight: 'bold' ,
     fontStyle : 'italic' ,
     marginTop : 300 ,
     fontSize : 25
    }   ,
    textInput:{
        marginTop : 20,
        borderColor : '#000' ,
        borderBottomWidth : 1,
        marginLeft:50 ,
        marginRight : 50 ,
        marginBottom : 4,
    },
    form: {
        marginTop: 100 ,
        
    } ,
    button:{
        backgroundColor: '#dc143c' ,
        marginTop :50 ,
        marginLeft: 50 ,
        width : 100 ,
        borderBottomRightRadius: 20

      },
      textbtn:{
          color: '#ffff' ,
          marginLeft:25

      },
      adminlogin:{
        backgroundColor: '#dc143c' ,
         marginLeft: 20 ,
         marginRight: 20 ,
         marginTop : 30   ,
         height: 50
         

      } ,
      admin:{
          color: '#fff' ,
          textAlign : 'center' ,
          fontWeight: 'bold' ,
          marginTop: 10 ,
          fontSize: 20
      },
      signbtn:{
        backgroundColor: '#018b7b' ,
        marginTop :-20 ,
        marginLeft: 230 ,
        width : 100 ,
        borderBottomRightRadius: 20 ,
        
      },
      signuptext:{
          color: '#fff' ,
          marginLeft: 28
      },
      account:{
          marginLeft: 20 ,
          marginTop: 15 ,
          fontSize: 16
           
      }

})