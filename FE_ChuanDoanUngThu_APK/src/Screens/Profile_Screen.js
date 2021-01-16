import React, { useState } from 'react'
import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native'
import { StylesProfile } from '../Assets/Style/ProfileStyle'
import IconEntyno from 'react-native-vector-icons/Entypo'
import IconAntd from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../Store/User/action'
import Communications from 'react-native-communications';

export default function ProfileScreen() {
   const dispatch = useDispatch()
   const navigation = useNavigation()
   const dataUser = useSelector(state => state.User.dataUser);
   console.log("dataUser Profile:", dataUser);

   const moveEditProfile = () => {
      navigation.navigate('EditProfile')
   }
   const moveChangePassword = () => {
      navigation.navigate('ChangePass')
   }
   const handleLogout = () => {
      dispatch(logout())
   }
   const callHotLine = () => {
      Communications.phonecall('0392340756', true)
   }
   const handleFeedback = () => {
      Communications.text('0392340756')
   }

   return (
      <ScrollView style={StylesProfile.container}>
         <View style={StylesProfile.header}>
            <Text style={StylesProfile.titleHeader}>Trang cá nhân</Text>
         </View>
         <View style={StylesProfile.body}>
            <TouchableOpacity style={StylesProfile.itemInfor} onPress={moveEditProfile}>
               <View style={StylesProfile.ViewAvatar}>
                  <Image style={StylesProfile.avatarUser} source={{ uri: "https://paramountsprx.com/wp-content/uploads/2017/09/MAN_AVATAR.png" }} />
               </View>
               <View style={StylesProfile.viewName}>
                  <Text style={StylesProfile.textLabel}>{dataUser && dataUser.fullname}</Text>
                  <Text style={StylesProfile.textSetting}>Thông tin tài khoản, cài đặt</Text>
               </View>
               <IconAntd name="right" size={15} />
            </TouchableOpacity>
            <TouchableOpacity style={StylesProfile.item}>
               <Image style={StylesProfile.icon} source={require('../Assets/Image/history1.png')} />
               <Text style={StylesProfile.titleText}>Lịch sử hoạt động</Text>
               <IconAntd name="right" size={13} style={StylesProfile.iconRight} />
            </TouchableOpacity>
            <TouchableOpacity style={StylesProfile.item}>
               <Image style={StylesProfile.icon} source={require('../Assets/Image/card1.png')} />
               <Text style={StylesProfile.titleText}>Thông tin thanh toán</Text>
               <IconAntd name="right" size={13} style={StylesProfile.iconRight} />
            </TouchableOpacity>


         </View>
         <View style={StylesProfile.space}></View>
         <View style={StylesProfile.accoutSetting}>
            <Text style={StylesProfile.titleaccout} >Thông tin tài khoản</Text>
            <TouchableOpacity style={StylesProfile.item} onPress={moveChangePassword}>
               <Image style={StylesProfile.icon} source={require('../Assets/Image/padlock1.png')} />
               <Text style={StylesProfile.titleText}>Thay đổi mật khẩu</Text>
               <IconAntd name="right" size={13} style={StylesProfile.iconRight} />
            </TouchableOpacity>
         </View>
         <View style={StylesProfile.space}></View>
         <View style={StylesProfile.accoutSetting}>
            <Text style={StylesProfile.titleaccout} >Về chúng tôi</Text>
            <TouchableOpacity style={StylesProfile.item} onPress={callHotLine}>
               <Image style={StylesProfile.icon} source={require('../Assets/Image/headphones1.png')} />
               <View style={StylesProfile.hotline}>
                  <Text style={StylesProfile.titleText}>HOTLINE:</Text>
                  <Text style={StylesProfile.phoneHotline}>0392340756</Text>
               </View>
               <IconAntd name="right" size={13} style={StylesProfile.iconRight} />
            </TouchableOpacity>
            <TouchableOpacity style={StylesProfile.item} onPress={handleFeedback}>
               <Image style={StylesProfile.icon} source={require('../Assets/Image/message.png')} />
               <Text style={StylesProfile.titleText}>Phản hồi</Text>
               <IconAntd name="right" size={13} style={StylesProfile.iconRight} />
            </TouchableOpacity>
         </View>
         <View style={StylesProfile.space}></View>
         <View style={StylesProfile.ViewLogout}>
            <TouchableOpacity style={StylesProfile.item} onPress={handleLogout}>
               <Image style={StylesProfile.icon} source={require('../Assets/Image/log-out.png')} />
               <Text style={StylesProfile.titleText}>Đăng xuất</Text>
               {/* <IconAntd name="right" size={13} style={StylesProfile.iconRight} /> */}
            </TouchableOpacity>
         </View>
      </ScrollView>
   )
}