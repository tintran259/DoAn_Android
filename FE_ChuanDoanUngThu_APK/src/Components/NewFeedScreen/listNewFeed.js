import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { StylesNewFeed } from '../../Assets/Style/NewFeedScreen'

export default function ListNewFeed({ handleNewFeedDetail }) {
   return (
      <View style={StylesNewFeed.ListNewFeed}>
         <View style={StylesNewFeed.ViewAvatar}>
            <Image style={StylesNewFeed.avatar} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/1200px-CNN_International_logo.svg.png" }} />
         </View>
         <View style={StylesNewFeed.ViewContent}>
            <View style={StylesNewFeed.headerContent}>
               <View>
                  <Text style={StylesNewFeed.textName}>Nguyễn Thanh Hào</Text>
                  <Text style={StylesNewFeed.textDate}>21-12-2020</Text>
               </View>
               <View>
                  <Text style={StylesNewFeed.timeText}>12 min</Text>
               </View>
            </View>
            <View style={StylesNewFeed.contentNewFeed}>
               <Text numberOfLines={5} style={StylesNewFeed.textContentNewFeed} onPress={handleNewFeedDetail}>
                  In publishing and graphic design,
                  Lorem ipsum is a placeholder text commonly used to demonstrate the visual
                  form of a document or a typeface without
                  relying on meaningful content. Lorem ipsum may
                  be used before final copy is available, but it
                  may also be used to temporarily replace copy in
                  a process called greeking, which allows designers
                  to consider form without the meaning of the text influencin
                     </Text>
               <Image style={StylesNewFeed.imageNewFeed} source={{ uri: "https://etimg.etb2bimg.com/thumb/msid-72818662,width-1200,resizemode-4/.jpg" }} />
            </View>
         </View>
      </View>
   )
}