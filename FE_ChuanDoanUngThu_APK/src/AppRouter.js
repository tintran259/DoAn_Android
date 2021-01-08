import React, { useEffect } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux'

import SplashScreen from './Router/Splash/SplashScreen'
import StackAuth from './Router/Stack/StackLogin_Register'
import TabApp from './Router/Tab/TabApp'

const Stack = createStackNavigator();

export default function AppRouter() {
   const isSplash = useSelector(state => state.App.isSplash);
   const token = useSelector(state => state.User.ACCESS_TOKEN);

   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{ headerShown: false }} >
            {
               isSplash ?
                  <Stack.Screen name="Splash" component={SplashScreen} /> :
                  token !== null ?
                     <Stack.Screen name="Tab" component={TabApp} /> :
                     <Stack.Screen name="StackAuth" component={StackAuth} />
            }
         </Stack.Navigator>
      </NavigationContainer>
   )
}