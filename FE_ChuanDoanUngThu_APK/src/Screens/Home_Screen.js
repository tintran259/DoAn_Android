import React, { useEffect, useMemo } from 'react'
import { LogBox, View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import { StylesHomeScreen } from '../Assets/Style/HomeStyle'
import { useNavigation } from '@react-navigation/native'
import IconAntd from 'react-native-vector-icons/AntDesign'
import IconFontisto from 'react-native-vector-icons/Fontisto'
import Swiper from "react-native-swiper";
import { useSelector, useDispatch } from 'react-redux'
import { asyncGetUserById } from '../Store/User/action'
import { ListDoctor } from '../Components/HomeScreen'
import { actGetItemHospitalDetail } from '../Store/Hospital/action'
import { useState } from 'react'
import {
   ModalHospitalDetail,
   ModalDoctorDetail,
   ModalLocation,
   ModalNotification
} from '../Components/HomeScreen'
import { URL_SEVER } from '../Contants'
import { actGetLocationNow } from '../Store/Location/action'



export default function HomeScreen() {
   LogBox.ignoreAllLogs();

   const dispatch = useDispatch()
   const navigation = useNavigation()
   const userId = useSelector(state => state.User.ACCESS_TOKEN);
   const dataUser = useSelector(state => state.User.dataUser);
   const listDoctor = useSelector(state => state.Doctor.listDoctor)
   const listHospital = useSelector(state => state.Hospital.listHospital)
   const listLocation = useSelector(state => state.Location.listLocation)
   const locationNow = useSelector(state => state.Location.locationNow)
   const [isShowLocation, setIsShowLocation] = useState(false)
   const [isShowNotification, setIsShowNotification] = useState(false)
   const [doctorDetail, setIsDoctorDetail] = useState({})
   const [hospitalDetail, setHospitalDetail] = useState({})
   const [isShowModalDetailDoctor, setIsShowModalDetailDoctor] = useState(false)
   const [locationSelected, setLocationSelected] = useState(locationNow)
   console.log("locationNow:", locationNow);
   const [isShowModalHospital, setIsShowModalHospital] = useState(false)
   console.log("listDoctor:", listDoctor)
   console.log("listHospital:", listHospital);
   console.log("listLocation:", listLocation);

   useEffect(() => {
      dispatch(asyncGetUserById({ userId }))
   }, [])

   const listDoctorForLocation = useMemo(() => {
      return listDoctor.filter((item) => {
         return item.location_id === locationSelected.id
      })
   }, [locationSelected])
   const listHospitalForLocation = useMemo(() => {
      return listHospital.filter((item) => {
         return item.location_id === locationSelected.id
      })
   }, [locationSelected])

   const handleShowNotification = () => {
      setIsShowNotification(true)
   }
   const handleHideNotification = () => {
      setIsShowNotification(false)
   }
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
   const moveChangeHealthy = () => {
      navigation.navigate('ChangeHealthy')
   }
   const movecalanderHealthy = () => {
      navigation.navigate('CalanderHealthy')
   }
   const handleSelectLocation = (inforLocation) => {
      setLocationSelected(inforLocation)
      dispatch(actGetLocationNow(inforLocation))
      setIsShowLocation(false)
   }
   const handleDoctorDetail = (item) => {
      setIsShowModalDetailDoctor(true)
      setIsDoctorDetail(item)
   }
   const handleHideModalDocdorDetail = () => {
      setIsShowModalDetailDoctor(false)
   }
   const handleHospitalDetail = (item) => {
      setHospitalDetail(item)
      dispatch(actGetItemHospitalDetail(item))
      setIsShowModalHospital(true)
   }
   const handleHideModalHospital = () => {
      setIsShowModalHospital(false)
   }

   return (
      <ScrollView style={StylesHomeScreen.body}>
         <View style={StylesHomeScreen.notification}>
            <TouchableOpacity style={StylesHomeScreen.btnLocation} onPress={handleShowLocation}>
               <Image style={StylesHomeScreen.iamgeLocation} source={require("../Assets/Image/location1.png")} />
               <Text style={StylesHomeScreen.nameLocation}>{locationSelected.name}</Text>
               <IconAntd name="right" color="#2d3436" style={{ position: "absolute", right: "4%" }} />
            </TouchableOpacity>
            <TouchableOpacity style={StylesHomeScreen.btnIcon} onPress={handleShowNotification}>
               <IconFontisto name="bell" style={StylesHomeScreen.iconBell} />
            </TouchableOpacity>
            {/* <View style={StylesHomeScreen.iconNotifi}>
            </View> */}
         </View>
         <View style={StylesHomeScreen.header}>
            <TouchableOpacity style={StylesHomeScreen.ViewUser} onPress={moveProfileScreen}>
               <View style={StylesHomeScreen.avatarUser}>
                  <Image style={StylesHomeScreen.avatarImage} source={{ uri: "https://paramountsprx.com/wp-content/uploads/2017/09/MAN_AVATAR.png" }} />
               </View>
               <View style={StylesHomeScreen.inforUser}>
                  <Text style={StylesHomeScreen.textName}>{dataUser && dataUser.fullname}</Text>
                  <Text style={StylesHomeScreen.textAddress}>Quản lý thông tin tài khoản</Text>
               </View>
               <View style={StylesHomeScreen.viewBtn}>
                  <TouchableOpacity style={StylesHomeScreen.btnProfile}>
                     <IconAntd name="right" color="#2d3436" size={20} />
                  </TouchableOpacity>
               </View>
            </TouchableOpacity>
         </View>
         <View style={StylesHomeScreen.bodyContent}>
            <View style={StylesHomeScreen.Control}>
               <View style={StylesHomeScreen.card1}>
                  <View style={StylesHomeScreen.ViewCard}>
                     <TouchableOpacity style={[StylesHomeScreen.card, { backgroundColor: "#74b9ff" }]} onPress={moveCVScreen}>
                        <Image style={StylesHomeScreen.iconPharmacy} source={require('../Assets/Image/pharmacy1.png')} />
                        <Text style={[StylesHomeScreen.textControl, { color: "#fff" }]}>Hồ sơ sức khỏe</Text>
                     </TouchableOpacity>
                  </View>
                  <View style={StylesHomeScreen.ViewCard}>
                     <TouchableOpacity style={[StylesHomeScreen.card, { backgroundColor: "#ff7675" }]} onPress={moveHistoryScreen}>
                        <Image style={StylesHomeScreen.iconPharmacy} source={require('../Assets/Image/question.png')} />
                        <Text style={[StylesHomeScreen.textControl, { color: "#fff" }]}>Lịch sử trao đổi</Text>
                     </TouchableOpacity>
                  </View>
               </View>
               <View style={StylesHomeScreen.card1}>
                  <View style={StylesHomeScreen.ViewCard}>
                     <TouchableOpacity style={[StylesHomeScreen.card, { backgroundColor: "#fdcb6e" }]} onPress={moveChangeHealthy}>
                        <Image style={StylesHomeScreen.iconPharmacy} source={require('../Assets/Image/health.png')} />
                        <Text style={StylesHomeScreen.textControl}>Theo dõi sức khỏe</Text>
                     </TouchableOpacity>
                  </View>
                  <View style={StylesHomeScreen.ViewCard}>
                     <TouchableOpacity style={[StylesHomeScreen.card, { backgroundColor: "#78e08f" }]} onPress={movecalanderHealthy}>
                        <Image style={StylesHomeScreen.iconPharmacy} source={require('../Assets/Image/alar.png')} />
                        <Text style={StylesHomeScreen.textControl}>Lịch nhắc sức khỏe</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
            <View style={StylesHomeScreen.bannerView}>
               <Swiper
                  autoplay
               >
                  <Image resizeMode="cover" style={{ width: "100%", height: "100%", borderRadius: 10 }} source={{ uri: "https://i.pinimg.com/originals/dd/77/d2/dd77d2b74cc81a8e61299c35194b0f3b.jpg" }} />
                  <Image resizeMode="cover" style={{ width: "100%", height: "100%", borderRadius: 10 }} source={{ uri: "https://m.media-amazon.com/images/I/61VmeEXjmcL._AC_SY355_.jpg" }} />
                  <Image resizeMode="cover" style={{ width: "100%", height: "100%", borderRadius: 10 }} source={{ uri: "https://storage.pixteller.com/designs/designs-images/2019-05-15/11/customizable-hospital-banner-ad-1-5cdbd3f3e2c28.png" }} />
               </Swiper>
            </View>
            <Text style={StylesHomeScreen.titleDanhSach}>Danh sách bác sĩ</Text>
            <View style={StylesHomeScreen.ViewDoctor} >

               <FlatList
                  horizontal
                  data={listDoctorForLocation}
                  keyExtractor={item => item.name}
                  renderItem={({ item }) => {
                     return (

                        <TouchableOpacity onPress={() => handleDoctorDetail(item)}>
                           <ListDoctor item={item} />
                        </TouchableOpacity>
                     )
                  }}
               />
            </View>
            <Text style={StylesHomeScreen.titleDanhSach}>Danh sách bệnh viện</Text>
            <FlatList
               data={listHospitalForLocation}
               renderItem={({ item }) => {
                  return (
                     <View style={StylesHomeScreen.ViewHoispital}>
                        <TouchableOpacity style={StylesHomeScreen.ViewBackgroud} onPress={() => handleHospitalDetail(item)}>
                           <Image resizeMode="cover" style={StylesHomeScreen.imageHos} source={{ uri: `http://${URL_SEVER}:433/${item.image}` }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={StylesHomeScreen.ViewContent} onPress={() => handleHospitalDetail(item)}>
                           <Text style={StylesHomeScreen.titleTextHospital}>{item.name}</Text>
                           <View style={StylesHomeScreen.itemTextHos}>
                              <Text style={StylesHomeScreen.titleHos}>Hotline:</Text>
                              <Text>{item.hotline}</Text>
                           </View>
                           <View style={StylesHomeScreen.itemTextHos}>
                              <Text style={StylesHomeScreen.titleHos}>Địa chỉ:</Text>
                              <Text numberOfLines={3}>{item.address}</Text>
                           </View>
                        </TouchableOpacity>
                     </View>
                  )
               }}
            />
         </View>
         <ModalLocation
            listLocation={listLocation}
            isShowLocation={isShowLocation}
            handleHideLocation={handleHideLocation}
            handleSelectLocation={handleSelectLocation}
         />
         <ModalNotification
            isShowNotification={isShowNotification}
            handleHideNotification={handleHideNotification}
         />
         <ModalDoctorDetail
            doctorDetail={doctorDetail}
            isShowModalDetailDoctor={isShowModalDetailDoctor}
            handleHideModalDocdorDetail={handleHideModalDocdorDetail}
         />
         <ModalHospitalDetail
            isShowModalHospital={isShowModalHospital}
            hospitalDetail={hospitalDetail}
            handleHideModalHospital={handleHideModalHospital}
         />
      </ScrollView>
   )
}