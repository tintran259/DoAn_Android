import React, { useEffect } from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

//Style + Icon
import { StylesNewFeed } from '../Assets/Style/NewFeedScreen'


//Action + Components
import { ListNewFeed } from '../Components/NewFeedScreen'
import { asyncGetListNewFeed } from '../Store/NewFeed/action'



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