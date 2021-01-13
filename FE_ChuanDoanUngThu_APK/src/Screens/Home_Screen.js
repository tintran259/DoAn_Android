import React, { useEffect } from 'react'
import { LogBox, View, Text, StatusBar, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import { StylesHomeScreen } from '../Assets/Style/HomeStyle'
import { useNavigation } from '@react-navigation/native'
import IconAntd from 'react-native-vector-icons/AntDesign'
import IconFontisto from 'react-native-vector-icons/Fontisto'
import Swiper from "react-native-web-swiper";
import { useSelector, useDispatch } from 'react-redux'
import { asyncGetUserById } from '../Store/User/action'
import { ListDoctor } from '../Components/HomeScreen'
import Modal from 'react-native-modal'
import { useState } from 'react'



export default function HomeScreen() {
   LogBox.ignoreAllLogs();

   const dispatch = useDispatch()
   const navigation = useNavigation()
   const userId = useSelector(state => state.User.ACCESS_TOKEN);
   const dataUser = useSelector(state => state.User.dataUser);
   const EditUserSuccessed = useSelector(state => state.User.isEditUser)
   const [isShowLocation, setIsShowLocation] = useState(false)
   const [locationSelected, setLocationSelected] = useState('Hồ Chí Minh')
   const listDoctor = [
      {
         name: "Nguyễn Thanh Hào",
         option: "Đa Khoa",
         image: "https://lh3.googleusercontent.com/proxy/e6c3Ly3ZcAc3P3sw6eHJ3m5nAW-HyiWn0NfiSPmnru5Y2kYjtxUTWt0w9msVIY4psV3pVSg0We3hBxJTKeNCYFE0eRT66Kpl3GMH7K-3Xw-k8sf3"
      },
      {
         name: "Trần Như Tín",
         option: "Đa Khoa",
         image: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2012/06/bs-nguyen-hong-nhung.jpg"

      },
      {
         name: "Nguyễn Khánh Duy",
         option: "Khoa Sản",
         image: "https://lh3.googleusercontent.com/proxy/JHj5cSqwgwtNHs80ujWYcQiWBjolH4-nl6WUvx8i4bC9opX2wTgEMNyXQWzo3bbDla08GFe9ymkF74AT-zhcxdv86saHtq5Y2QDcFJl2tqfnu7F_NxLHCw"

      },
      {
         name: "Nguyễn Quốc Anh",
         option: "Khoa Sản",
         image: "https://benhvienthucuc.vn/wp-content/uploads/2016/03/bs-vu-quoc-dong.jpg"
      },
      {
         name: "Long",
         option: "Khoa Sản",
         image: "https://benhvienthucuc.vn/wp-content/uploads/2019/04/nguyen-van-doanh.jpg"
      }
   ]
   const location = [
      { location: "Hồ Chí Minh" },
      { location: "Hà Nội" },
      { location: "Đà Lạt" },
      { location: "Huế" },
      { location: "Biên Hòa" },
      { location: "Vinh" }
   ]
   useEffect(() => {
      dispatch(asyncGetUserById({ userId }))
   }, [])
   const handleShowLocation = () => {
      setIsShowLocation(true)
   }
   const handleHideLocation = () => {
      setIsShowLocation(false)
   }
   const moveProfileScreen = () => {
      navigation.navigate('StackProfile')
   }
   const moveHistoryScreen = () => {
      navigation.navigate('History')
   }
   const moveCVScreen = () => {
      navigation.navigate('CVhealthy')
   }
   const handleSelectLocation = (inforLocation) => {
      setLocationSelected(inforLocation)
      setIsShowLocation(false)
   }
   return (
      <ScrollView style={StylesHomeScreen.body}>
         <View style={StylesHomeScreen.notification}>
            <TouchableOpacity style={StylesHomeScreen.btnLocation} onPress={handleShowLocation}>
               <Image style={StylesHomeScreen.iamgeLocation} source={require("../Assets/Image/location.png")} />
               <Text style={StylesHomeScreen.nameLocation}>{locationSelected}</Text>
               <IconAntd name="right" color="#fff" style={{ position: "absolute", right: "4%" }} />
            </TouchableOpacity>
            <TouchableOpacity style={StylesHomeScreen.btnIcon}>
               <IconFontisto name="bell" style={StylesHomeScreen.iconBell} />
            </TouchableOpacity>
         </View>
         <View style={StylesHomeScreen.header}>
            <View style={StylesHomeScreen.ViewUser}>
               <View style={StylesHomeScreen.avatarUser}>
                  <Image style={StylesHomeScreen.avatarImage} source={{ uri: "https://thethao99.com/wp-content/uploads/2020/05/gai-xinh-372.jpg" }} />
               </View>
               <View style={StylesHomeScreen.inforUser}>
                  <Text style={StylesHomeScreen.textName}>{dataUser && dataUser.fullname}</Text>
                  <Text style={StylesHomeScreen.textAddress}>{dataUser && dataUser.address}</Text>
               </View>
               <View style={StylesHomeScreen.viewBtn}>
                  <TouchableOpacity style={StylesHomeScreen.btnProfile} onPress={moveProfileScreen}>
                     <IconAntd name="right" color="#2d3436" size={20} />
                  </TouchableOpacity>
               </View>
            </View>
         </View>
         <View style={StylesHomeScreen.bodyContent}>
            <View style={StylesHomeScreen.Control}>
               <View style={StylesHomeScreen.card1}>
                  <View style={StylesHomeScreen.ViewCard}>
                     <TouchableOpacity style={StylesHomeScreen.card} onPress={moveCVScreen}>
                        <Image style={StylesHomeScreen.iconPharmacy} source={require('../Assets/Image/pharmacy.png')} />
                        <Text style={StylesHomeScreen.textControl}>Hồ sơ sức khỏe</Text>
                     </TouchableOpacity>
                  </View>
                  <View style={StylesHomeScreen.ViewCard}>
                     <TouchableOpacity style={StylesHomeScreen.card} onPress={moveHistoryScreen}>
                        <Image style={StylesHomeScreen.iconPharmacy} source={require('../Assets/Image/information.png')} />
                        <Text style={StylesHomeScreen.textControl}>Lịch sử tư vấn</Text>
                     </TouchableOpacity>
                  </View>
               </View>
               <View style={StylesHomeScreen.card1}>
                  <View style={StylesHomeScreen.ViewCard}>
                     <TouchableOpacity style={StylesHomeScreen.card}>
                        <Image style={StylesHomeScreen.iconPharmacy} source={require('../Assets/Image/hert.png')} />
                        <Text style={StylesHomeScreen.textControl}>Theo dõi sức khỏe</Text>
                     </TouchableOpacity>
                  </View>
                  <View style={StylesHomeScreen.ViewCard}>
                     <TouchableOpacity style={StylesHomeScreen.card}>
                        <Image style={StylesHomeScreen.iconPharmacy} source={require('../Assets/Image/clock.png')} />
                        <Text style={StylesHomeScreen.textControl}>Lịch nhắc sức khỏe</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
            <View style={StylesHomeScreen.bannerView}>
               <Swiper>
                  <Image style={{ width: "100%", height: "100%", borderRadius: 10 }} source={{ uri: "https://i.pinimg.com/originals/dd/77/d2/dd77d2b74cc81a8e61299c35194b0f3b.jpg" }} />
                  <Image style={{ width: "100%", height: "100%", borderRadius: 10 }} source={{ uri: "https://m.media-amazon.com/images/I/61VmeEXjmcL._AC_SY355_.jpg" }} />
                  <Image style={{ width: "100%", height: "100%", borderRadius: 10 }} source={{ uri: "https://www.bhatiahospital.org/storage/app/public/home_banner/2/image/1503411077revised-bhatia-homebanner-03.jpg" }} />
               </Swiper>
            </View>
            <Text style={StylesHomeScreen.titleDanhSach}>Danh sách bác sĩ</Text>
            <FlatList
               horizontal
               data={listDoctor}
               keyExtractor={item => item.name}
               renderItem={({ item }) => {
                  return (
                     <ListDoctor item={item} />
                  )
               }}
            />
         </View>
         <Modal
            onBackdropPress={handleHideLocation}
            isVisible={isShowLocation}
            style={{ margin: 0, alignItems: "center", justifyContent: "flex-end" }} >
            <View style={StylesHomeScreen.ModalLocation}>
               <Image style={StylesHomeScreen.locationModal} source={require("../Assets/Image/location2.png")} />
               <Text style={StylesHomeScreen.contentModal}>Hãy chọn tỉnh thành để hiển thị dịch vụ phù hợp với bạn</Text>
               <View style={StylesHomeScreen.LocationName}>
                  {
                     location.map((item, index) => {
                        return (
                           <TouchableOpacity key={index} style={StylesHomeScreen.btnSelectLocation} onPress={() => handleSelectLocation(item.location)}>
                              <Text style={StylesHomeScreen.textNameLocation}>{item.location}</Text>
                           </TouchableOpacity>
                        )
                     })
                  }

               </View>

            </View>
         </Modal>
      </ScrollView>
   )
}