import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { StylesNewFeed } from '../Assets/Style/NewFeedScreen'
import { ListNewFeed } from '../Components/NewFeedScreen'
import { useNavigation } from '@react-navigation/native'
export default function NewsScreen() {

   const navigation = useNavigation()

   const handleNewFeedDetail = () => {
      navigation.navigate('NewFeedDetail')
   }
   return (
      <View style={StylesNewFeed.container}>
         <View style={StylesNewFeed.header}>
            <Text style={StylesNewFeed.titleHeader}>Tin tức</Text>
         </View>
         <ScrollView style={StylesNewFeed.body}>
            <ListNewFeed handleNewFeedDetail={handleNewFeedDetail} />
            <ListNewFeed />
            <ListNewFeed />
         </ScrollView>
      </View>
   )
}