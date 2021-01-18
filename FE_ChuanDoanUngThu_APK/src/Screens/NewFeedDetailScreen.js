import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StylesNewFeed } from '../Assets/Style/NewFeedScreen'
import IconAntd from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
export default function NewFeedDetail() {
   const navigation = useNavigation()
   const handleBack = () => {
      navigation.goBack()
   }
   return (
      <View style={StylesNewFeed.container}>
         <View style={StylesNewFeed.headerDetail}>
            <TouchableOpacity style={StylesNewFeed.btnBack} onPress={handleBack}>
               <IconAntd style={StylesNewFeed.iconBack} name="arrowleft" />
            </TouchableOpacity>
         </View>
         <View style={StylesNewFeed.bodyDetail}>
            <View style={StylesNewFeed.headerBodyDetail}>
               <Image style={StylesNewFeed.avatar} source={{ uri: "https://bankimooncentre.org/wp-content/uploads/2020/06/cnn-logo-square.png" }} />
               <View style={StylesNewFeed.headerText}>
                  <Text style={StylesNewFeed.titleNAME}>Nguyễn Thanh Hào</Text>
                  <Text style={StylesNewFeed.titledate}>20-10-1999</Text>
               </View>
            </View>
            <View style={StylesNewFeed.contentNewFeed}>
               <Text style={StylesNewFeed.textContentNewFeed} >
                  In publishing and graphic design,
                  Lorem ipsum is a placeholder text commonly used to demonstrate the visual
                  form of a document or a typeface without
                  relying on meaningful content. Lorem ipsum may
                  be used before final copy is available, but it
                  may also be used to temporarily replace copy in
                  a process called greeking, which allows designers
                  to consider form without the meaning of the text influencin
               </Text>
               <Image resizeMode="cover" style={StylesNewFeed.imageNewFeedDetail} source={{ uri: "https://etimg.etb2bimg.com/thumb/msid-72818662,width-1200,resizemode-4/.jpg" }} />
            </View>
         </View>
      </View>
   )
}