import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './Router/Splash/SplashScreen'
import StackAuth from './Router/Stack/StackLogin_Register'
import TabApp from './Router/Tab/TabApp'


const Stack = createStackNavigator();

export default function AppRouter() {
   const isSplash = false;
   const isLogin = false;
   return (
      <NavigationContainer>
         <Stack.Navigator >
            {
               isSplash ?
                  <Stack.Screen name="Splash" component={SplashScreen} /> :
                  !isLogin ?
                     <Stack.Screen name="StackAuth" component={StackAuth} /> :
                     <Stack.Screen name="Tab" component={TabApp} />

            }
         </Stack.Navigator>
      </NavigationContainer>
   )
}