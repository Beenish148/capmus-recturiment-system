
import { Button } from 'native-base';
import React from 'react';

import * as Animatable from 'react-native-animatable';

import { View, Text , Image , StyleSheet , ScrollView,TouchableOpacity } from 'react-native';

function  HomeScreen ({navigation}) {
    return(
        <ScrollView>
        <View>
            <View>
                <Animatable.Text
                animation = 'bounceInDown' direction="alternate"
                
                style={styles.welcomtext} >
                Welcome to Campus Recruirtment System
                </Animatable.Text>
            </View>
         <View>
         <Image
              source={require('../images/Admin-icon.png')}
              resizeMode ='stretch'
              style={styles.image}
              />  
               <TouchableOpacity
                 onPress={()=> navigation.navigate('Admin')}
               style={styles.button}>
                 <Text style={styles.btntext}>Admin</Text>
            </TouchableOpacity>
            
             </View> 

              <View>
         <Image
              source={require('../images/company.png')}
              resizeMode ='stretch'
              style={styles.image}
              />
               <TouchableOpacity
                onPress={()=> navigation.navigate('Company-Login')}
               style={styles.button}>
               <Text style={styles.btntext}>Company</Text>
            </TouchableOpacity>
            
             </View>    
          
             <View>
         <Image
              source={require('../images/pro.png')}
              resizeMode ='stretch'
              style={styles.image}
              />
                <TouchableOpacity
                 onPress={()=> navigation.navigate('Student-Login')}
                 style={styles.button}>
                <Text style={styles.btntext}>Student</Text>
            </TouchableOpacity>
             
             </View> 

        </View>
        </ScrollView>



    )
    
}
export default HomeScreen;


const styles = StyleSheet.create({
    image:{
        justifyContent :'center',
        alignItems :'center' , 
        marginLeft : 80 ,
        width: 200,
        height: 200 , 
        marginTop: 40
      } ,
      text: {
          textAlign: 'center' ,
          fontWeight : 'bold' ,
          color : 'blue' ,
          fontSize: 20 ,
          marginTop: 2
      } , 
      welcomtext:{
        color: '#dc143c' ,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20 ,
        fontSize : 24 ,
        
      },
      button: {
        marginLeft:140,
         width: 170 ,
        padding: 10 ,
       
      },
      btntext:{
          color: 'blue' ,
          fontWeight: 'bold' ,
          fontSize:20 , 
      }
})
