import React from 'react'
import { View, Text, Image } from 'react-native'
import { StylesProfile } from '../../Assets/Style/ProfileStyle'


export default function InforProfileUser() {
   return (
      <>
         <View style={StylesProfile.ViewAvatar}>
            <Image style={StylesProfile.avatarUser} resizeMode="cover" source={require("../../Assets/Image/avatar.jpg")} />
         </View>
         <View style={StylesProfile.bodyProfile}>
            <View style={StylesProfile.textInfor}>
               <Text style={StylesProfile.title}>Fullname :</Text>
               <Text style={StylesProfile.labeText}>Nguyen Thanh Hao</Text>
            </View>
            <View style={StylesProfile.textInfor}>
               <Text style={StylesProfile.title}>Gender :</Text>
               <Text style={StylesProfile.labeText}>Male</Text>
            </View>
            <View style={StylesProfile.textInfor}>
               <Text style={StylesProfile.title}>Date :</Text>
               <Text style={StylesProfile.labeText}>08/03/2020</Text>
            </View>
            <View style={StylesProfile.textInfor}>
               <Text style={StylesProfile.title}>Address :</Text>
               <Text style={StylesProfile.labeText}>Nguyen Thanh Hao</Text>
            </View>
            <View style={StylesProfile.textInfor}>
               <Text style={StylesProfile.title}>Phone number :</Text>
               <Text style={StylesProfile.labeText}>0123123123</Text>
            </View>
         </View>
      </>
   )
}