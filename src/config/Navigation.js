import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import Splach from '../screens/Splachscreen';
import AdminScreen from '../screens/Admin';
import AdminSignupScreen from '../screens/Adminsignup';
import CompanyScreen from  '../screens/Company-Login';
import CompanySignupScreen from  '../screens/Company-Signup';
import StudentLoginScreen from  '../screens/Student-Login';
import StudentSignupScreen from  '../screens/Student-Signup';
import StudentAcadmicInfo from '../screens/Academic-Details';



const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Splach}>
      <Stack.Screen name="splach" component={Splach}  options={{headerShown:false}} />  
      <Stack.Screen name="Home" component={HomeScreen}   /> 
      <Stack.Screen name="Admin" component={AdminScreen} options={{headerStyle:{backgroundColor:'#dc143c' }, headerTintColor:'white' }}  /> 
      <Stack.Screen name="Adminsignup" component={AdminSignupScreen}  options={{headerStyle:{backgroundColor:'#dc143c' }, headerTintColor:'white' }}  /> 
      <Stack.Screen name="Company-Login" component={CompanyScreen}  options={{headerStyle:{backgroundColor:'#dc143c' }, headerTintColor:'white' }}  /> 
      <Stack.Screen name="Company-Signup" component={CompanySignupScreen}  options={{headerStyle:{backgroundColor:'#dc143c' }, headerTintColor:'white' }}  />
      <Stack.Screen name="Student-Login" component={StudentLoginScreen}  options={{headerStyle:{backgroundColor:'#dc143c' }, headerTintColor:'white' }}  />
      <Stack.Screen name="Student-Signup" component={StudentSignupScreen}  options={{headerStyle:{backgroundColor:'#dc143c' }, headerTintColor:'white' }}  />
      <Stack.Screen name="Academic-Details" component={StudentAcadmicInfo}  options={{headerStyle:{backgroundColor:'#dc143c' }, headerTintColor:'white' }}  />  
  

    </Stack.Navigator>
    </NavigationContainer>
   
  );
}
export default MyStack;