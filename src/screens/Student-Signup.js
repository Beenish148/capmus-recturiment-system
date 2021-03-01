
import React from 'react';
import { Card , CardItem , Body, Button, Left } from 'native-base';
import * as Animatable from 'react-native-animatable';
import {

    View,
    Text,
    StyleSheet , 
    TextInput, 
    TouchableOpacity,
    ScrollView
    
  } from 'react-native';

function StudentSignupScreen({navigation}) {
   
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.adminlogin}>
                <Text style={styles.admin}>Student Registration</Text>
            </View>
              <View style={styles.form}>
              <TextInput  placeholder="Student Name" style={styles.textInput}
                />
                <TextInput  placeholder="Email" style={styles.textInput}
                />
                 <TextInput  placeholder="Password" style={styles.textInput}
                 secureTextEntry={true}
               />
                <TextInput keyboardType={'phone-pad'}  placeholder="Contact Number" style={styles.textInput}
                />
                 <TextInput  placeholder="Date Of Birth" style={styles.textInput}
                />
                
                
                
               <Button full style={styles.button}
               onPress={()=>navigation.navigate('Academic-Details')}
               >
                   <Text style={styles.textbtn}>
                    Continue
                   </Text>
               </Button>   
        </View>
 
        </View>
        </ScrollView>
    )
    
}
export default StudentSignupScreen;

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
        marginLeft: 10 ,
        marginRight : 10,
        borderRadius: 10

      },
      textbtn:{
          color: '#ffff' ,
          marginLeft:25 ,
          fontWeight: 'bold',
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
    
     

})