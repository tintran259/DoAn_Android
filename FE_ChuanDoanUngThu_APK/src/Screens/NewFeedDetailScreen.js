import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

//Style+ Icon
import { StylesNewFeed } from '../Assets/Style/NewFeedScreen'
import IconAntd from 'react-native-vector-icons/AntDesign'

//Data + Contants
import { URL_SEVER } from '../Contants'


export default function NewFeedDetail() {
   const itemNewFeed = useSelector(state => state.NewFeed.itemNewFeed)
   const navigation = useNavigation()

   //Navigation
   const handleBack = () => {
      navigation.goBack()
   }


   console.log("itemNewFeed:", itemNewFeed);
   return (
      <View style={StylesNewFeed.container}>
         <View style={StylesNewFeed.headerDetail}>
            <TouchableOpacity style={StylesNewFeed.btnBack} onPress={handleBack}>
               <IconAntd style={StylesNewFeed.iconBack} name="arrowleft" />
            </TouchableOpacity>
         </View>
         <ScrollView style={StylesNewFeed.bodyDetail}>
            <Text style={StylesNewFeed.title}>{itemNewFeed && itemNewFeed.title}</Text>
            <View style={StylesNewFeed.headerBodyDetail}>
               <View style={StylesNewFeed.ViewCon}>
                  <Image style={StylesNewFeed.avatar} source={{ uri: `http://${URL_SEVER}:433/${itemNewFeed.image}` }} />
                  <View style={StylesNewFeed.headerText}>
                     <Text style={StylesNewFeed.titleNAME}>{itemNewFeed && itemNewFeed.author}</Text>
                     <Text style={StylesNewFeed.titledate}>{itemNewFeed && itemNewFeed.post_date}</Text>
                  </View>
               </View>
               <View style={StylesNewFeed.ViewTypeDetail}>
                  <Text style={[StylesNewFeed.textType, { width: "100%" }]}>{itemNewFeed && itemNewFeed.type}</Text>
               </View>
            </View>
            <View style={StylesNewFeed.contentNewFeed}>
               <Text style={StylesNewFeed.textContentNewFeed} >
                  {itemNewFeed && itemNewFeed.content}
               </Text>
               <Image resizeMode="cover" style={StylesNewFeed.imageNewFeedDetail} source={{ uri: `http://${URL_SEVER}:433/${itemNewFeed.image}` }} />
            </View>
         </ScrollView>
      </View>
   )
}