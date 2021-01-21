import React, { useMemo, useEffect, useState, useCallback } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TabView, SceneMap } from 'react-native-tab-view';
import { useSelector, useDispatch } from 'react-redux'
import Communications from 'react-native-communications';
import getDistance from 'geolib/es/getDistance';
import Geolocation from '@react-native-community/geolocation';



import { StylesTestCancerDetail } from '../Assets/Style/TestCancerDetail'
import IconAntd from 'react-native-vector-icons/AntDesign'


import { ICD } from '../mock'
import { URL_SEVER } from '../Contants'



import { ModalHospitalDetail } from '../Components/HomeScreen'
import { ModalDoctorDetail } from '../Components/HomeScreen'

export default function TestCancer() {
   const result = useSelector(state => state.Result.ResultTest)
   const listDoctor = useSelector(state => state.Doctor.listDoctor)
   const listHospital = useSelector(state => state.Hospital.listHospital)
   const locationNow = useSelector(state => state.Location.locationNow)
   const [isShowModalHospital, setIsShowModalHospital] = useState(false)
   const [dataHospitalDetail, setDataHospitalDetail] = useState({})
   const [isShowModalDoctor, setIsShowModalDoctor] = useState(false)
   const [dataDoctorDetail, setDataDoctorDetail] = useState({})
   const [location, setLocation] = useState({
      latitude: '',
      longitude: ''
   })
   const [index, setIndex] = useState(0);
   const [routes] = useState([
      { key: 'first', title: 'Gần bạn' },
      { key: 'second', title: 'Tất cả' },
   ]);

   const [index2, setIndex2] = React.useState(0);

   const [routes2] = React.useState([
      { key: 'firstHospital', title: 'In Process' },
      { key: 'secondHospital', title: 'Pedding' },
      { key: 'thirdHospital', title: 'Compelete' },
   ]);

   useEffect(() => {
      Geolocation.getCurrentPosition(info => {
         const latitude = info.coords.latitude
         const longitude = info.coords.longitude
         setLocation({
            latitude,
            longitude
         })
      })
   }, [])

   console.log("Location:", location);

   const navigation = useNavigation()
   const handleBack = () => {
      navigation.goBack()
   }
   const ShowResult = useMemo(() => {
      if (result !== null) {
         const data = ICD.filter((item) => {
            return item.Name === result
         })
         return data
      }
      return [{ Desc: "" }]
   }, [result])

   const listHospitalSort = useMemo(() => {
      return listHospital.filter((item) => {
         return item.location_id === locationNow.id
      })
   }, [locationNow])
   const listHospitalSortRanking = useMemo(() => {
      return listHospitalSort.sort((a, b) => {
         return (a.ranking > b.ranking)
      })
   }, [listHospitalSort])
   console.log("listHospitalSortRanking:", listHospitalSortRanking);
   const listDoctorSort = useMemo(() => {
      return listDoctor.filter((item) => {
         return item.location_id === locationNow.id
      })
   }, [locationNow])

   const handleCall = (doctor) => {
      const phoneNumber = doctor.phone
      Communications.phonecall(phoneNumber, true)
   }
   const handleHospitalDetail = (item) => {
      setIsShowModalHospital(true)
      setDataHospitalDetail(item)
   }
   const handleHideModalHospital = () => {
      setIsShowModalHospital(false)
   }
   const handleDoctorDetail = (item) => {
      setDataDoctorDetail(item)
      setIsShowModalDoctor(true)
   }
   const handleHideModalDocdorDetail = () => {
      setIsShowModalDoctor(false)
   }

   let arrKM = listHospitalSortRanking.map((item) => {
      return (
         {
            address: item.address,
            hotline: item.hotline,
            id: item.id,
            image: item.image,
            latitude: item.latitude,
            location_id: item.location_id,
            longitude: item.longitude,
            name: item.name,
            ranking: item.ranking,
            km: getDistance(
               location,
               {
                  latitude: parseFloat(item.latitude.replace(",", ".")),
                  longitude: parseFloat(item.longitude.replace(",", "."))
               }
            )
         }
      )
   })
   let arrKMDoctor = listDoctorSort.map((item) => {
      return (
         {
            address: item.address,
            department: item.department,
            fullname: item.fullname,
            hospital: item.hospital,
            id: item.id,
            image: item.image,
            latitude: item.latitude,
            location_id: item.location_id,
            longitude: item.longitude,
            phone: item.phone,
            km: getDistance(
               location,
               {
                  latitude: parseFloat(item.latitude.replace(",", ".")),
                  longitude: parseFloat(item.longitude.replace(",", "."))
               }
            )
         }
      )
   })

   console.log("arrKMDoctor:", arrKMDoctor);

   const listHospitalSortRankingAndDirection = useMemo(() => {
      return (
         arrKM.sort((a, b) => {
            return a.km - b.km
         })
      )
   }, [listHospitalSortRanking, arrKM])
   const listDoctorSortDirection = useMemo(() => {
      return (
         arrKMDoctor.sort((a, b) => {
            return a.km - b.km
         })
      )
   }, [listDoctorSort, arrKMDoctor])
   console.log("listDoctorSortDirection:", listDoctorSortDirection);

   console.log("listHospitalSortRankingAnd:", listHospitalSortRankingAndDirection);
   console.log("arrKM:", arrKM);



   // View Doctor

   const FirstRoute = useCallback(() => (
      <FlatList
         horizontal
         data={listDoctorSortDirection.slice(0, 2)}
         keyExtractor={item => item.id.toString()}
         renderItem={({ item }) => {
            return (
               <TouchableOpacity style={StylesTestCancerDetail.inforDoctor} onPress={() => handleDoctorDetail(item)}>
                  <Image style={StylesTestCancerDetail.iamgeAvatar} source={{ uri: `http://${URL_SEVER}:433/${item.image}` }} />
                  <View style={StylesTestCancerDetail.viewInfor}>
                     <Text style={StylesTestCancerDetail.textNameDoctor} numberOfLines={1}>{`Bs ${item.fullname}`}</Text>
                     <Text style={[StylesTestCancerDetail.textNameDoctor, { color: "#3498db" }]}>{item.department}</Text>
                     <TouchableOpacity style={StylesTestCancerDetail.btnContact} onPress={() => handleCall(item)}>
                        <Text style={[StylesTestCancerDetail.textNameDoctor, { color: "#ffff", marginTop: 0 }]}>Liên hệ bác sĩ</Text>
                     </TouchableOpacity>
                  </View>
               </TouchableOpacity>
            )
         }}
      />
   ), [listDoctorSortDirection])


   const SecondRoute = useCallback(() => (
      <FlatList
         horizontal
         data={listDoctorSort}
         keyExtractor={item => item.id.toString()}
         renderItem={({ item }) => {
            return (
               <TouchableOpacity style={StylesTestCancerDetail.inforDoctor} onPress={() => handleDoctorDetail(item)}>
                  <Image style={StylesTestCancerDetail.iamgeAvatar} source={{ uri: `http://${URL_SEVER}:433/${item.image}` }} />
                  <View style={StylesTestCancerDetail.viewInfor}>
                     <Text style={StylesTestCancerDetail.textNameDoctor} numberOfLines={1}>{`Bs ${item.fullname}`}</Text>
                     <Text style={[StylesTestCancerDetail.textNameDoctor, { color: "#3498db" }]}>{item.department}</Text>
                     <TouchableOpacity style={StylesTestCancerDetail.btnContact} onPress={() => handleCall(item)}>
                        <Text style={[StylesTestCancerDetail.textNameDoctor, { color: "#ffff", marginTop: 0 }]}>Liên hệ bác sĩ</Text>
                     </TouchableOpacity>
                  </View>
               </TouchableOpacity>
            )
         }}
      />
   ), [listDoctorSort])


   //ViewHospital


   const FirstRouteHospital = useCallback(() => {
      return (
         <FlatList
            data={listHospitalSortRankingAndDirection.slice(0, 2)}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 10 }}
            renderItem={({ item }) => {
               return (
                  <TouchableOpacity style={StylesTestCancerDetail.HospitalView} onPress={() => handleHospitalDetail(item)}>
                     {
                        item.ranking === "1" && <Image style={StylesTestCancerDetail.ranking} source={require("../Assets/Image/top1.png")} />
                     }
                     <View style={StylesTestCancerDetail.listHospital}>
                        <Image style={StylesTestCancerDetail.imageHospital} source={{ uri: `http://${URL_SEVER}:433/${item.image}` }} />
                        <View style={StylesTestCancerDetail.viewInforHos}>
                           <Text style={StylesTestCancerDetail.textNameHos}>{item.name}</Text>
                           <View style={StylesTestCancerDetail.formContact}>
                              <View style={StylesTestCancerDetail.contactForm}>
                                 <Text style={StylesTestCancerDetail.textotLine}>Liên hệ:</Text>
                                 <Text style={StylesTestCancerDetail.textPhone}>{item.hotline}</Text>
                              </View>
                           </View>
                        </View>
                     </View>
                     <View style={StylesTestCancerDetail.viewAdd}>
                        <Text style={StylesTestCancerDetail.titleAddress}>Địa chỉ:</Text>
                        <Text>{item.address}</Text>
                     </View>
                  </TouchableOpacity>
               )
            }}
         />
      )
   }, [listHospitalSortRankingAndDirection])
   const SecondRouteHospital = useCallback(() => (
      <FlatList
         data={listHospitalSortRanking}
         keyExtractor={item => item.id.toString()}
         contentContainerStyle={{ paddingBottom: 10 }}
         renderItem={({ item }) => {
            return (
               <TouchableOpacity style={StylesTestCancerDetail.HospitalView} onPress={() => handleHospitalDetail(item)}>
                  {
                     item.ranking === "1" && <Image style={StylesTestCancerDetail.ranking} source={require("../Assets/Image/top1.png")} />
                  }
                  <View style={StylesTestCancerDetail.listHospital}>
                     <Image style={StylesTestCancerDetail.imageHospital} source={{ uri: `http://${URL_SEVER}:433/${item.image}` }} />
                     <View style={StylesTestCancerDetail.viewInforHos}>
                        <Text style={StylesTestCancerDetail.textNameHos}>{item.name}</Text>
                        <View style={StylesTestCancerDetail.formContact}>
                           <View style={StylesTestCancerDetail.contactForm}>
                              <Text style={StylesTestCancerDetail.textotLine}>Liên hệ:</Text>
                              <Text style={StylesTestCancerDetail.textPhone}>{item.hotline}</Text>
                           </View>
                        </View>
                     </View>
                  </View>
                  <View style={StylesTestCancerDetail.viewAdd}>
                     <Text style={StylesTestCancerDetail.titleAddress}>Địa chỉ:</Text>
                     <Text>{item.address}</Text>
                  </View>
               </TouchableOpacity>
            )
         }}
      />
   ), [listHospitalSortRanking])
   const ThirdRouteHospital = useCallback(() => (
      <FlatList
         data={listHospitalSort}
         keyExtractor={item => item.id.toString()}
         contentContainerStyle={{ paddingBottom: 10 }}
         renderItem={({ item }) => {
            return (
               <TouchableOpacity style={StylesTestCancerDetail.HospitalView} onPress={() => handleHospitalDetail(item)}>
                  {
                     item.ranking === "1" && <Image style={StylesTestCancerDetail.ranking} source={require("../Assets/Image/top1.png")} />
                  }
                  <View style={StylesTestCancerDetail.listHospital}>
                     <Image style={StylesTestCancerDetail.imageHospital} source={{ uri: `http://${URL_SEVER}:433/${item.image}` }} />
                     <View style={StylesTestCancerDetail.viewInforHos}>
                        <Text style={StylesTestCancerDetail.textNameHos}>{item.name}</Text>
                        <View style={StylesTestCancerDetail.formContact}>
                           <View style={StylesTestCancerDetail.contactForm}>
                              <Text style={StylesTestCancerDetail.textotLine}>Liên hệ:</Text>
                              <Text style={StylesTestCancerDetail.textPhone}>{item.hotline}</Text>
                           </View>
                        </View>
                     </View>
                  </View>
                  <View style={StylesTestCancerDetail.viewAdd}>
                     <Text style={StylesTestCancerDetail.titleAddress}>Địa chỉ:</Text>
                     <Text>{item.address}</Text>
                  </View>
               </TouchableOpacity>
            )
         }}
      />
   ), [listHospitalSort])
   const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
   });


   const renderSceneHospital = SceneMap({
      firstHospital: FirstRouteHospital,
      secondHospital: SecondRouteHospital,
      thirdHospital: ThirdRouteHospital,
   });

   return (
      <View style={StylesTestCancerDetail.container}>
         <View style={StylesTestCancerDetail.header}>
            <TouchableOpacity style={StylesTestCancerDetail.btnBack} onPress={handleBack}>
               <IconAntd name="arrowleft" size={25} />
            </TouchableOpacity>
            <Text style={StylesTestCancerDetail.titleHeader}>Tư vấn</Text>
         </View>
         <ScrollView style={StylesTestCancerDetail.body}>
            <View style={StylesTestCancerDetail.ViewInforTest}>
               <Text style={StylesTestCancerDetail.titleInfor}>
                  Bạn có thể liên quan đến:
                  </Text>
               <View style={StylesTestCancerDetail.ViewTestText}>
                  <Text style={StylesTestCancerDetail.textCancer}>{`" ${ShowResult[0].Desc} "`}</Text>
               </View>
               <Text style={[StylesTestCancerDetail.titleInfor, { marginTop: 20 }]}>Thông tin tư vấn:</Text>
               <View style={StylesTestCancerDetail.contentView}>
                  <Text style={StylesTestCancerDetail.textDoc}>Danh sách bác sĩ chuyên khoa:</Text>
                  <TabView
                     style={{ width: "100%", height: 320 }}
                     navigationState={{ index, routes }}
                     renderScene={renderScene}
                     onIndexChange={setIndex}
                     renderTabBar={() => {
                        return (
                           <View style={StylesTestCancerDetail.TabViewHeader}>
                              <TouchableOpacity style={[StylesTestCancerDetail.btnNaer, index === 0 ? { borderRadius: 70, padding: 10, backgroundColor: "#3498db" } : { padding: 10 }]} onPress={() => setIndex(0)}>
                                 <Text style={[StylesTestCancerDetail.titleTab, index === 0 ? { color: "#fff" } : { color: "#636e72" }]}>Gần bạn</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={[StylesTestCancerDetail.btnNaer, index === 1 ? { borderRadius: 70, padding: 10, backgroundColor: "#3498db" } : { padding: 10 }]} onPress={() => setIndex(1)}>
                                 <Text style={[StylesTestCancerDetail.titleTab, index === 1 ? { color: "#fff" } : { color: "#636e72" }]}>Tất cả</Text>
                              </TouchableOpacity>
                           </View>
                        )
                     }}
                  />
                  <View style={{ width: "100%", height: 5, backgroundColor: "#fff", marginTop: 20 }}></View>
                  <Text style={StylesTestCancerDetail.textDoc}>Những bệnh viện chuyên khoa:</Text>
                  <View style={StylesTestCancerDetail.ViewHospital}>
                     <TabView
                        navigationState={{ index: index2, routes: routes2 }}
                        renderScene={renderSceneHospital}
                        renderTabBar={() => {
                           return (
                              <View style={StylesTestCancerDetail.TabViewHeader}>
                                 <TouchableOpacity style={[StylesTestCancerDetail.btnNaer, index2 === 0 ? { borderRadius: 70, padding: 10, backgroundColor: "#3498db" } : { padding: 10 }]} onPress={() => setIndex2(0)}>
                                    <Text style={[StylesTestCancerDetail.titleTab, index2 === 0 ? { color: "#fff" } : { color: "#636e72" }]}>Gần bạn</Text>
                                 </TouchableOpacity>
                                 <TouchableOpacity style={[StylesTestCancerDetail.btnNaer, index2 === 1 ? { borderRadius: 70, padding: 10, backgroundColor: "#3498db" } : { padding: 10 }]} onPress={() => setIndex2(1)}>
                                    <Text style={[StylesTestCancerDetail.titleTab, index2 === 1 ? { color: "#fff" } : { color: "#636e72" }]}>Xếp hạng</Text>
                                 </TouchableOpacity>
                                 <TouchableOpacity style={[StylesTestCancerDetail.btnNaer, index2 === 2 ? { borderRadius: 70, padding: 10, backgroundColor: "#3498db" } : { padding: 10 }]} onPress={() => setIndex2(2)}>
                                    <Text style={[StylesTestCancerDetail.titleTab, index2 === 2 ? { color: "#fff" } : { color: "#636e72" }]}>Tất cả</Text>
                                 </TouchableOpacity>
                              </View>
                           )
                        }}
                     />
                  </View>
               </View>
            </View>
         </ScrollView>
         <ModalHospitalDetail
            isShowModalHospital={isShowModalHospital}
            hospitalDetail={dataHospitalDetail}
            handleHideModalHospital={handleHideModalHospital}
         />
         <ModalDoctorDetail
            doctorDetail={dataDoctorDetail}
            isShowModalDetailDoctor={isShowModalDoctor}
            handleHideModalDocdorDetail={handleHideModalDocdorDetail}
         />
      </View>
   )
}