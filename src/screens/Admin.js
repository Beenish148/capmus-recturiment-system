
import React from 'react';
import { Card , CardItem , Body, Button, Left } from 'native-base';
import * as Animatable from 'react-native-animatable';
import {

    View,
    Text,
    StyleSheet , 
    TextInput, 
    TouchableOpacity,
    
  } from 'react-native';

function AdminScreen({navigation}) {
   
    return(
        <View style={styles.container}>
            <View style={styles.adminlogin}>
                <Text style={styles.admin}>Admin Login</Text>
            </View>
              <View style={styles.form}>
         
                <TextInput  placeholder="User Name" style={styles.textInput}
                />
                 <TextInput  placeholder="Password" style={styles.textInput}
                 secureTextEntry={true}
               />
               <Button style={styles.button}>
                   <Text style={styles.textbtn}>
                    Login
                   </Text>
               </Button>   
        </View>
        <View>
            <Text style={styles.account}>Create your Account </Text>
           <Button 
            onPress={()=> navigation.navigate('Adminsignup')}
           style={styles.signbtn}
            
           >
               <Text style={styles.signuptext}>
                   Sign up
               </Text>
           </Button>
        </View>
        </View>
    )
    
}
export default AdminScreen ;

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
          marginLeft:30

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
          marginLeft: 20
      },
      account:{
          marginLeft: 20 ,
          marginTop: 15 ,
          fontSize: 16
           
      }

})