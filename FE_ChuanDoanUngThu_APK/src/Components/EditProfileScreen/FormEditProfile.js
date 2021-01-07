import React from 'react';
import { View, Text, Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { StylesEditProfile } from '../../Assets/Style/EditProfileStyle'
import IconEntypo from 'react-native-vector-icons/Entypo'


export default function FormEditProfile({ handleOpenGender }) {


   return (
      <View style={StylesEditProfile.formEdit}>
         <View style={StylesEditProfile.changeAvatar}>
            <Image style={StylesEditProfile.avatar} source={{ uri: "https://img.over-blog-kiwi.com/2/41/15/86/20181231/ob_1ad1e0_anh-girl-xinh-bikini-goi-cam-4.jpg" }} />
            <Text style={StylesEditProfile.nameAvatar}> Ảnh đại diện </Text>
            <TouchableOpacity style={StylesEditProfile.btnChange}>
               <Text style={StylesEditProfile.textChange}> Thay đổi </Text>
            </TouchableOpacity>
         </View>
         <View style={StylesEditProfile.space}></View>
         <View style={StylesEditProfile.formInputItem}>
            <View style={StylesEditProfile.itemForm}>
               <Text style={StylesEditProfile.titleItem}>Họ và tên</Text>
               <TextInput
                  placeholder="Họ và tên ..."
                  style={StylesEditProfile.inputEdit}
               />
            </View>
            <View style={StylesEditProfile.itemForm}>
               <Text style={StylesEditProfile.titleItem}>Địa chỉ</Text>
               <TextInput
                  placeholder="Địa chỉ ..."
                  style={StylesEditProfile.inputEdit}
               />
            </View>
            <View style={StylesEditProfile.itemForm}>
               <Text style={StylesEditProfile.titleItem}>Giới tính</Text>
               <View style={StylesEditProfile.inputEdit}>
                  <Text style={StylesEditProfile.textLabel}>Nam</Text>
               </View>
               <View style={StylesEditProfile.btnDropdownView}>
                  <TouchableOpacity style={StylesEditProfile.btnDropdown} onPress={handleOpenGender}>
                     <IconEntypo name="chevron-down" size={20} style={StylesEditProfile.iconDown} />
                  </TouchableOpacity>
               </View>
            </View>
            <View style={StylesEditProfile.itemForm}>
               <Text style={StylesEditProfile.titleItem}>Ngày sinh</Text>
               <View style={StylesEditProfile.inputEdit}>
                  <Text style={StylesEditProfile.textLabel}>02/12/1999</Text>
               </View>
               <View style={StylesEditProfile.btnDropdownView}>
                  <TouchableOpacity style={StylesEditProfile.btnDropdown}>
                     <IconEntypo name="chevron-down" size={20} style={StylesEditProfile.iconDown} />
                  </TouchableOpacity>
               </View>
            </View>
            <View style={StylesEditProfile.itemForm}>
               <Text style={StylesEditProfile.titleItem}>Số điện thoại</Text>
               <TextInput
                  placeholder="Số điện thoại ..."
                  keyboardType={'numeric'}
                  style={StylesEditProfile.inputEdit}
               />
            </View>
         </View>
      </View>
   )
}