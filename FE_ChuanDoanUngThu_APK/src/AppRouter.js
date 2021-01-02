import React, { useEffect } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux'

import SplashScreen from './Router/Splash/SplashScreen'
import StackAuth from './Router/Stack/StackLogin_Register'
import TabApp from './Router/Tab/TabApp'
import { actHideSplashScreen } from './Store/App/action'

const Stack = createStackNavigator();

export default function AppRouter() {
   const dispatch = useDispatch()
   const isSplash = useSelector(state => state.App.isSplash);
   useEffect(() => {
      setTimeout(() => {
         dispatch(actHideSplashScreen())
      }, 2000)
   }, [])
   const isLogin = false;
   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{ headerShown: false }} >
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