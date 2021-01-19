import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { StylesNewFeed } from '../../Assets/Style/NewFeedScreen'
import { URL_SEVER } from '../../Contants'
import { actGetListNewFeedDetail } from '../../Store/NewFeed/action'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
export default function ListNewFeed({ item }) {
   const navigation = useNavigation()
   const dispatch = useDispatch()
   const handleNewFeedDetail = (item) => {
      dispatch(actGetListNewFeedDetail(item))
      navigation.navigate('NewFeedDetail')
   }

   return (
      <View style={StylesNewFeed.ListNewFeed}>
         <View style={StylesNewFeed.ViewAvatar}>
            <Image style={StylesNewFeed.ImageNews} onPress={() => handleNewFeedDetail(item)} source={{ uri: `http://${URL_SEVER}:433/${item.image}` }} />
         </View>
         <View style={StylesNewFeed.ViewContent}>
            <View style={StylesNewFeed.headerContent}>
               <Text numberOfLines={2} onPress={() => handleNewFeedDetail(item)} style={[StylesNewFeed.textName, { fontSize: 16, color: "#1dd1a1" }]}>{item && item.title}</Text>
               <Text numberOfLines={2} style={StylesNewFeed.textContentNewFeed} onPress={() => handleNewFeedDetail(item)}>
                  {item && item.content}
               </Text>
               <View style={StylesNewFeed.typeView}>
                  <Text style={StylesNewFeed.textDate}>{item && item.post_date}</Text>
                  <Text numberOfLines={1} style={StylesNewFeed.textType}>{item && item.type}</Text>
               </View>
            </View>
         </View>
      </View>
   )
}