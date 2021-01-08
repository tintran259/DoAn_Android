import React, { useState } from 'react';
import { View, Text, Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { StylesEditProfile } from '../../Assets/Style/EditProfileStyle'
import IconEntypo from 'react-native-vector-icons/Entypo'
import DateTimePicker from '@react-native-community/datetimepicker'
import { getDateByTimeZoneDay } from '../../Contants'
export default function FormEditProfile({
   handleOpenGender,
   userProfile,
   setUseProfile
}) {
   const [date] = useState(new Date());
   const [show, setShow] = useState(false);

   const onChange = (event, selectedDate) => {
      let dateShow = getDateByTimeZoneDay(selectedDate, null);
      setShow(Platform.OS === 'ios');
      setUseProfile({ ...userProfile, birthday: dateShow });
   };

   const showDatepicker = () => {
      setShow(true);
   };
   return (
      <View style={StylesEditProfile.formEdit}>
         {
            show && (
               <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={"date"}
                  display="spinner"
                  onChange={onChange}
               />
            )
         }
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
                  value={userProfile.fullname}
                  onChangeText={text => setUseProfile({ ...userProfile, fullname: text })}
                  placeholder="Họ và tên ..."
                  style={StylesEditProfile.inputEdit}
               />
            </View>
            <View style={StylesEditProfile.itemForm}>
               <Text style={StylesEditProfile.titleItem}>Địa chỉ</Text>
               <TextInput
                  value={userProfile.address}
                  onChangeText={text => setUseProfile({ ...userProfile, address: text })}
                  placeholder="Địa chỉ ..."
                  style={StylesEditProfile.inputEdit}
               />
            </View>
            <View style={StylesEditProfile.itemForm}>
               <Text style={StylesEditProfile.titleItem}>Giới tính</Text>
               <View style={StylesEditProfile.inputEdit}>
                  {
                     userProfile.gender === "1" ?
                        <Text style={StylesEditProfile.textLabel}>Nam</Text>
                        :
                        <Text style={StylesEditProfile.textLabel}>Nữ</Text>
                  }
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
                  <Text style={StylesEditProfile.textLabel}>{userProfile.birthday}</Text>
               </View>
               <View style={StylesEditProfile.btnDropdownView}>
                  <TouchableOpacity style={StylesEditProfile.btnDropdown} onPress={showDatepicker}>
                     <IconEntypo name="chevron-down" size={20} style={StylesEditProfile.iconDown} />
                  </TouchableOpacity>
               </View>
            </View>
            <View style={StylesEditProfile.itemForm}>
               <Text style={StylesEditProfile.titleItem}>Số điện thoại</Text>
               <TextInput
                  value={userProfile.phone}
                  onChangeText={text => setUseProfile({ ...userProfile, phone: text })}
                  placeholder="Số điện thoại ..."
                  keyboardType={'numeric'}
                  style={StylesEditProfile.inputEdit}
               />
            </View>
            <View style={StylesEditProfile.itemForm}>
               <Text style={StylesEditProfile.titleItem}>Họ và tên người giám hộ</Text>
               <TextInput
                  value={userProfile.nameGuardian}
                  onChangeText={text => setUseProfile({ ...userProfile, nameGuardian: text })}
                  placeholder="Số điện thoại ..."
                  style={StylesEditProfile.inputEdit}
               />
            </View>
            <View style={StylesEditProfile.itemForm}>
               <Text style={StylesEditProfile.titleItem}>Số điện thoại người giám hộ</Text>
               <TextInput
                  value={userProfile.phoneGuardian}
                  onChangeText={text => setUseProfile({ ...userProfile, phoneGuardian: text })}
                  placeholder="Số điện thoại ..."
                  keyboardType={'numeric'}
                  style={StylesEditProfile.inputEdit}
               />
            </View>
         </View>
      </View>
   )
}