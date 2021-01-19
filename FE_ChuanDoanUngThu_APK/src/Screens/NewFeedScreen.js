import React, { useEffect } from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { StylesNewFeed } from '../Assets/Style/NewFeedScreen'
import { ListNewFeed } from '../Components/NewFeedScreen'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetListNewFeed } from '../Store/NewFeed/action'
import { State } from 'react-native-gesture-handler'



export default function NewsScreen() {
   useEffect(() => {
      dispatch(asyncGetListNewFeed())
   }, [])
   const dispatch = useDispatch()
   const listNewFeed = useSelector(state => state.NewFeed.listNewFeed);

   return (
      <View style={StylesNewFeed.container}>
         <View style={StylesNewFeed.header}>
            <Text style={StylesNewFeed.titleHeader}>Tin tức</Text>
         </View>
         <ScrollView style={StylesNewFeed.body}>
            <FlatList
               data={listNewFeed}
               keyExtractor={item => item.id.toString()}
               // contentContainerStyle={{ paddingBottom: 20 }}
               renderItem={({ item }) => {
                  return (
                     <ListNewFeed item={item} />
                  )
               }}
            />
         </ScrollView>
      </View>
   )
}