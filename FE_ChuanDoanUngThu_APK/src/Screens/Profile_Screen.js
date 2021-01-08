import React, { useState } from 'react'
import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native'
import { StylesProfile } from '../Assets/Style/ProfileStyle'
import IconEntyno from 'react-native-vector-icons/Entypo'
import IconAntd from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
export default function ProfileScreen() {
   const navigation = useNavigation()
   const dataUser = useSelector(state => state.User.dataUser);
   console.log("dataUser Profile:", dataUser);
   const [isShowModal, setIsShowModal] = useState(true)
   const handleHideModal = () => {
      setIsShowModal(false)
   }
   const moveEditProfile = () => {
      navigation.navigate('EditProfile')
   }
   const moveChangePassword = () => {
      setIsShowModal(true)
      // navigation.navigate('ChangePass')
   }
   const checkPasswordToChange = () => {

   }


   return (
      <ScrollView style={StylesProfile.container}>
         <StatusBar barStyle="light-content" translucent={true} backgroundColor="#E33B3B" />
         <View style={StylesProfile.header}>
            <Text style={StylesProfile.titleHeader}>Trang cá nhân</Text>
         </View>
         <View style={StylesProfile.body}>
            <TouchableOpacity style={StylesProfile.itemInfor} onPress={moveEditProfile}>
               <View style={StylesProfile.ViewAvatar}>
                  <Image style={StylesProfile.avatarUser} source={{ uri: "https://lh3.googleusercontent.com/proxy/QdxzU8bMRhl1ksOzKQ4Pj1WHzJvfBDVk13KcI7kHZO56X-c3Igh9VISdsPSRM1dIGdVA0H5fz0cYoJAPo1LN8WlJKNYP_fSffEqfZ5wyPBq0hK4EtFp0jHsXFTCIC3bXDmgHiw" }} />
               </View>
               <View style={StylesProfile.viewName}>
                  <Text style={StylesProfile.textLabel}>{dataUser && dataUser.fullname}</Text>
                  <Text style={StylesProfile.textSetting}>Thông tin tài khoản, cài đặt</Text>
               </View>
               <IconAntd name="right" size={15} />
            </TouchableOpacity>
            <TouchableOpacity style={StylesProfile.item}>
               <Image style={StylesProfile.icon} source={require('../Assets/Image/history.png')} />
               <Text style={StylesProfile.titleText}>Lịch sử hoạt động</Text>
               <IconAntd name="right" size={13} style={StylesProfile.iconRight} />
            </TouchableOpacity>
            <TouchableOpacity style={StylesProfile.item}>
               <Image style={StylesProfile.icon} source={require('../Assets/Image/card.png')} />
               <Text style={StylesProfile.titleText}>Thông tin thanh toán</Text>
               <IconAntd name="right" size={13} style={StylesProfile.iconRight} />
            </TouchableOpacity>


         </View>
         <View style={StylesProfile.space}></View>
         <View style={StylesProfile.accoutSetting}>
            <Text style={StylesProfile.titleaccout} >Thông tin tài khoản</Text>
            <TouchableOpacity style={StylesProfile.item} onPress={moveChangePassword}>
               <Image style={StylesProfile.icon} source={require('../Assets/Image/padlock.png')} />
               <Text style={StylesProfile.titleText}>Thay đổi mật khẩu</Text>
               <IconAntd name="right" size={13} style={StylesProfile.iconRight} />
            </TouchableOpacity>
         </View>
         <View style={StylesProfile.space}></View>
         <View style={StylesProfile.accoutSetting}>
            <Text style={StylesProfile.titleaccout} >Về chúng tôi</Text>
            <TouchableOpacity style={StylesProfile.item}>
               <Image style={StylesProfile.icon} source={require('../Assets/Image/headphones.png')} />
               <View style={StylesProfile.hotline}>
                  <Text style={StylesProfile.titleText}>HOTLINE:</Text>
                  <Text style={StylesProfile.phoneHotline}>0392340756</Text>
               </View>
               <IconAntd name="right" size={13} style={StylesProfile.iconRight} />
            </TouchableOpacity>
            <TouchableOpacity style={StylesProfile.item}>
               <Image style={StylesProfile.icon} source={require('../Assets/Image/comment.png')} />
               <Text style={StylesProfile.titleText}>Phản hồi</Text>
               <IconAntd name="right" size={13} style={StylesProfile.iconRight} />
            </TouchableOpacity>
         </View>
         <View style={StylesProfile.space}></View>
         <View style={StylesProfile.ViewLogout}>
            <TouchableOpacity style={StylesProfile.item}>
               <Image style={StylesProfile.icon} source={require('../Assets/Image/log-out.png')} />
               <Text style={StylesProfile.titleText}>Đăng xuất</Text>
               {/* <IconAntd name="right" size={13} style={StylesProfile.iconRight} /> */}
            </TouchableOpacity>
         </View>
         <Modal
            isVisible={isShowModal}
            onBackdropPress={handleHideModal}
            style={{ alignItems: "center" }}
         >
            <View style={StylesProfile.Modal}>
               <Text style={StylesProfile.titleModal}>Mời bạn nhập mật khẩu hiện tại </Text>
               <TextInput
                  secureTextEntry={true}
                  style={StylesProfile.inputModal}
               />
               <View style={StylesProfile.footerModal}>
                  <TouchableOpacity style={StylesProfile.btn} onPress={handleHideModal}>
                     <Text>Thoát</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={StylesProfile.btn} onPress={checkPasswordToChange}>
                     <Text style={StylesProfile.textBtnOk}>OK</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </Modal>
      </ScrollView>
   )
}