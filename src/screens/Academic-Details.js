
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

function StudentAcadmicInfo({navigation}) {
   
    return(
        <ScrollView>
        <View style={styles.container}>
       
              <View style={styles.form}>
                  <View style={styles.adminlogin}>
                  <Text style={styles.admin}>Secondary </Text>
                  </View>
             
              <TextInput   keyboardType={'numeric'}  placeholder="Percentage" style={styles.textInput}
                />
                <TextInput  placeholder="Board" style={styles.textInput}
                />
                 <TextInput keyboardType={'decimal-pad'}  placeholder="Year OF passing" style={styles.textInput}
                
               />
                <View style={styles.adminlogin}>
                  <Text style={styles.admin}>Higher </Text>
                  </View>
                  <TextInput   keyboardType={'numeric'}  placeholder="Percentage" style={styles.textInput}
                />
                <TextInput  placeholder="Board" style={styles.textInput}
                />
                 <TextInput keyboardType={'decimal-pad'}  placeholder="Year OF passing" style={styles.textInput}
                
               />
                <View style={styles.adminlogin}>
                  <Text style={styles.admin}>Graduation </Text>
                  </View>
                  <TextInput placeholder="Crouse Name" style={styles.textInput}
                />

                <TextInput  placeholder="Board/University" style={styles.textInput}
                />
                <TextInput   keyboardType={'numeric'}  placeholder="Percentage" style={styles.textInput}
                />
                 <TextInput keyboardType={'decimal-pad'}  placeholder="Year OF passing" style={styles.textInput}
                
               />
       
        </View>
        <View>
        <Button style={styles.button}>
                   <Text style={styles.textbtn}>
                    Sign-up
                   </Text>
               </Button>   
        
        
            <Text style={styles.account}>Do you have account ?Login</Text>
           <Button style={styles.signbtn}
            onPress={()=> navigation.navigate('Student-Login')}
           >
               <Text style={styles.signuptext}>
                   Login
               </Text>
           </Button>
        </View>
        </View>
 
        
        </ScrollView>
    )
    
}
export default StudentAcadmicInfo;

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
        marginLeft: 20 ,
        marginRight : 10,
        borderBottomRightRadius: 20 ,
        width: 100

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
          fontSize: 15
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