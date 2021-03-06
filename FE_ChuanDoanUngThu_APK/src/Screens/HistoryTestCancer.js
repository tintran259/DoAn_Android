import React, { useMemo, useEffect, useState } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import Communications from 'react-native-communications';
import { StylesHomeScreen } from '../Assets/Style/HomeStyle'
import { StylesListDoctor } from '../Assets/Style/HomeStyle'

//Style+Icon
import { StylesTestCancerDetail } from '../Assets/Style/TestCancerDetail/'
import { StylesHisToryScreen } from '../Assets/Style/HistoryStyle/HistoryScreenStyles'
import IconAntd from 'react-native-vector-icons/AntDesign'

//Data
import { ICD } from '../mock'
import { URL_SEVER } from '../Contants'

//Action + Components
import { asyncGetListHospitalFlowPredictId, asyncGetListDoctorFlowPredictId } from '../Store/History/action'
import { FlatList } from 'react-native-gesture-handler';
import { ModalDoctorDetail, ModalHospitalDetail } from '../Components/HomeScreen'
import { ListDoctor } from '../Components/HomeScreen'

export default function HistoryTestCancer() {
   const dispatch = useDispatch()
   const navigation = useNavigation()
   const itemDetail = useSelector(state => state.History.itemHistory)
   const [listDoctor, setListDoctor] = useState([])
   const [listHospital, setListHospital] = useState([])
   const [doctorDetail, setDoctordetail] = useState({})
   const [hospitalDetail, setHospitaldetail] = useState({})
   const [isShowModalDoctor, setIsShowModalDoctor] = useState(false)
   const [isShowModalHospital, setIsShowModalHospital] = useState(false)
   useEffect(() => {
      const predictId = itemDetail.id
      dispatch(asyncGetListHospitalFlowPredictId({ predictId }))
         .then((res) => {
            if (res.ok) {
               const listHospital = res.data
               setListHospital(listHospital)
            }
         })
      dispatch(asyncGetListDoctorFlowPredictId({ predictId }))
         .then((res) => {
            if (res.ok) {
               const listDoctor = res.data
               setListDoctor(listDoctor)
            }
         })
   }, [])
   console.log("itemDetail:", itemDetail);
   console.log("listDoctor:", listDoctor);
   console.log("listHospital:", listHospital);
   //Navigation
   const handleBack = () => {
      navigation.goBack()
   }

   const handleDoctorDetail = (item) => {
      setDoctordetail(item)
      setIsShowModalDoctor(true)
   }
   const handleHideModalDocdorDetail = () => {
      setIsShowModalDoctor(false)
   }

   const handleHospitalDetail = (item) => {
      setHospitaldetail(item)
      setIsShowModalHospital(true)
   }
   const handleHideModalHospitalDetail = () => {
      setIsShowModalHospital(false)
   }


   //Sort Result WITH DATA ICD
   const ShowResult = useMemo(() => {
      if (itemDetail.predict !== null) {
         const data = ICD.filter((item) => {
            return item.Name === itemDetail.predict
         })
         return data
      }
      return [{ Desc: "" }]
   }, [itemDetail.predict])
   console.log("ShowResult:", ShowResult);

   //Contact
   const handleContact = () => {
      Communications.phonecall("0838995564", true)
   }
   return (
      <View>
         <View style={StylesHisToryScreen.header}>
            <TouchableOpacity style={StylesHisToryScreen.btnBack} onPress={handleBack}>
               <IconAntd name="arrowleft" size={23} />
            </TouchableOpacity>
            <View style={StylesHisToryScreen.headerContent}>
               <Text style={StylesHisToryScreen.titleHeader}>Lịch Sử</Text>
               <Text style={StylesHisToryScreen.timeStamp}>{itemDetail && itemDetail.timestamp}</Text>
            </View>
         </View>
         <ScrollView style={StylesTestCancerDetail.body}>
            <View style={StylesTestCancerDetail.BodyItem}>
               <View style={StylesTestCancerDetail.cardDetail}>
                  <View style={StylesTestCancerDetail.iconDetail}>
                     <Image style={StylesTestCancerDetail.img} source={require("../Assets/Image/cells.png")} />
                  </View>
                  <Text style={StylesTestCancerDetail.textNumber}>{itemDetail && itemDetail.baso}</Text>
                  <View style={StylesTestCancerDetail.lineColor}></View>
                  <Text style={StylesTestCancerDetail.textCan}>BASO</Text>
                  <Text numberOfLines={2} style={StylesTestCancerDetail.textDes}>Lượng bạch cầu hạt ưa base</Text>
               </View>
               <View style={StylesTestCancerDetail.cardDetail}>
                  <View style={StylesTestCancerDetail.iconDetail}>
                     <Image style={StylesTestCancerDetail.img} source={require("../Assets/Image/2.png")} />
                  </View>
                  <Text style={StylesTestCancerDetail.textNumber}>{itemDetail && itemDetail.eos}</Text>
                  <View style={[StylesTestCancerDetail.lineColor, { backgroundColor: "#3498DB" }]}></View>
                  <Text style={StylesTestCancerDetail.textCan}>EOS</Text>
                  <Text numberOfLines={2} style={StylesTestCancerDetail.textDes}>Lượng bạch cầu hạt ưa acid</Text>
               </View>
            </View>
            <View style={StylesTestCancerDetail.BodyItem}>
               <View style={StylesTestCancerDetail.cardDetail}>
                  <View style={StylesTestCancerDetail.iconDetail}>
                     <Image style={StylesTestCancerDetail.img} source={require("../Assets/Image/3.png")} />
                  </View>
                  <Text style={StylesTestCancerDetail.textNumber}>{itemDetail && itemDetail.rbc}</Text>
                  <View style={[StylesTestCancerDetail.lineColor, { backgroundColor: "#2ECC71" }]}></View>
                  <Text style={StylesTestCancerDetail.textCan}>RBC </Text>
                  <Text numberOfLines={2} style={StylesTestCancerDetail.textDes}>Số lượng hồng cầu có trong một đơn vị máu toàn phần</Text>
               </View>
               <View style={StylesTestCancerDetail.cardDetail}>
                  <View style={StylesTestCancerDetail.iconDetail}>
                     <Image style={StylesTestCancerDetail.img} source={require("../Assets/Image/4.png")} />
                  </View>
                  <Text style={StylesTestCancerDetail.textNumber}>{itemDetail && itemDetail.hct}</Text>
                  <View style={[StylesTestCancerDetail.lineColor, { backgroundColor: "#f1c40f" }]}></View>
                  <Text style={StylesTestCancerDetail.textCan}>HCT </Text>
                  <Text numberOfLines={2} style={StylesTestCancerDetail.textDes}>Tỷ lệ thể tích khối hồng cầu trên tổng thể tích máu toàn phần</Text>
               </View>
            </View>

            <View style={StylesTestCancerDetail.BodyItem}>
               <View style={StylesTestCancerDetail.cardDetail}>
                  <View style={StylesTestCancerDetail.iconDetail}>
                     <Image style={StylesTestCancerDetail.img} source={require("../Assets/Image/6.png")} />
                  </View>
                  <Text style={StylesTestCancerDetail.textNumber}>{itemDetail && itemDetail.mcv}</Text>
                  <View style={[StylesTestCancerDetail.lineColor, { backgroundColor: "#9B59B6" }]}></View>
                  <Text style={StylesTestCancerDetail.textCan}>MCV </Text>
                  <Text numberOfLines={2} style={StylesTestCancerDetail.textDes}>Thể tích trung bình của mỗi hồng cầu, tính bằng công thức MCV = HCT/RBC</Text>
               </View>
               <View style={StylesTestCancerDetail.cardDetail}>
                  <View style={StylesTestCancerDetail.iconDetail}>
                     <Image style={StylesTestCancerDetail.img} source={require("../Assets/Image/7.png")} />
                  </View>
                  <Text style={StylesTestCancerDetail.textNumber}>{itemDetail && itemDetail.mchc}</Text>
                  <View style={[StylesTestCancerDetail.lineColor, { backgroundColor: "#00b894" }]}></View>
                  <Text style={StylesTestCancerDetail.textCan}>MCHC </Text>
                  <Text numberOfLines={2} style={StylesTestCancerDetail.textDes}>Nồng độ huyết sắc tố trung bình có trong một thể tích khối hồng cầu, tính bằng công thức MCHC = Hb/HCT</Text>
               </View>
            </View>

            <View style={StylesTestCancerDetail.BodyItem}>
               <View style={StylesTestCancerDetail.cardDetail}>
                  <View style={StylesTestCancerDetail.iconDetail}>
                     <Image style={StylesTestCancerDetail.img} source={require("../Assets/Image/8.png")} />
                  </View>
                  <Text style={StylesTestCancerDetail.textNumber}>{itemDetail && itemDetail.rdw}</Text>
                  <View style={[StylesTestCancerDetail.lineColor, { backgroundColor: "#EA2027" }]}></View>
                  <Text style={StylesTestCancerDetail.textCan}>RDW  </Text>
                  <Text numberOfLines={2} style={StylesTestCancerDetail.textDes}>Mức độ đồng đều phân bố kích thước giữa các hồng cầu</Text>
               </View>
               <View style={StylesTestCancerDetail.cardDetail}>
                  <View style={StylesTestCancerDetail.iconDetail}>
                     <Image style={StylesTestCancerDetail.img} source={require("../Assets/Image/9.png")} />
                  </View>
                  <Text style={StylesTestCancerDetail.textNumber}>{itemDetail && itemDetail.wbc}</Text>
                  <View style={[StylesTestCancerDetail.lineColor, { backgroundColor: "#833471" }]}></View>
                  <Text style={StylesTestCancerDetail.textCan}>WBC </Text>
                  <Text numberOfLines={2} style={StylesTestCancerDetail.textDes}>Lượng tế bào bạch cầu</Text>
               </View>
            </View>

            <View style={StylesTestCancerDetail.BodyItem}>
               <View style={StylesTestCancerDetail.cardDetail}>
                  <View style={StylesTestCancerDetail.iconDetail}>
                     <Image style={StylesTestCancerDetail.img} source={require("../Assets/Image/10.png")} />
                  </View>
                  <Text style={StylesTestCancerDetail.textNumber}>{itemDetail && itemDetail.neu}</Text>
                  <View style={[StylesTestCancerDetail.lineColor, { backgroundColor: "#33d9b2" }]}></View>
                  <Text style={StylesTestCancerDetail.textCan}>NEU </Text>
                  <Text numberOfLines={2} style={StylesTestCancerDetail.textDes}>Lượng bạch cầu hạt trung tính</Text>
               </View>
               <View style={StylesTestCancerDetail.cardDetail}>
                  <View style={StylesTestCancerDetail.iconDetail}>
                     <Image style={StylesTestCancerDetail.img} source={require("../Assets/Image/11.png")} />
                  </View>
                  <Text style={StylesTestCancerDetail.textNumber}>{itemDetail && itemDetail.lym}</Text>
                  <View style={[StylesTestCancerDetail.lineColor, { backgroundColor: "#ff793f" }]}></View>
                  <Text style={StylesTestCancerDetail.textCan}>LYM </Text>
                  <Text numberOfLines={2} style={StylesTestCancerDetail.textDes}>Lượng bạch cầu lympho</Text>
               </View>
            </View>

            <View style={StylesTestCancerDetail.BodyItem}>
               <View style={StylesTestCancerDetail.cardDetail}>
                  <View style={StylesTestCancerDetail.iconDetail}>
                     <Image style={StylesTestCancerDetail.img} source={require("../Assets/Image/12.png")} />
                  </View>
                  <Text style={StylesTestCancerDetail.textNumber}>{itemDetail && itemDetail.mono}</Text>
                  <View style={[StylesTestCancerDetail.lineColor, { backgroundColor: "#ffda79" }]}></View>
                  <Text style={StylesTestCancerDetail.textCan}>MONO </Text>
                  <Text numberOfLines={2} style={StylesTestCancerDetail.textDes}>Lượng bạch cầu Mono</Text>
               </View>
               <View style={StylesTestCancerDetail.cardDetail}>
                  <View style={StylesTestCancerDetail.iconDetail}>
                     <Image style={StylesTestCancerDetail.img} source={require("../Assets/Image/13.png")} />
                  </View>
                  <Text style={StylesTestCancerDetail.textNumber}>{itemDetail && itemDetail.plt}</Text>
                  <View style={[StylesTestCancerDetail.lineColor, { backgroundColor: "#40407a" }]}></View>
                  <Text style={StylesTestCancerDetail.textCan}>PLT </Text>
                  <Text numberOfLines={2} style={StylesTestCancerDetail.textDes}>Lượng tiểu cầu</Text>
               </View>
            </View>

            <View style={StylesTestCancerDetail.BodyItem}>
               <View style={StylesTestCancerDetail.cardDetail}>
                  <View style={StylesTestCancerDetail.iconDetail}>
                     <Image style={StylesTestCancerDetail.img} source={require("../Assets/Image/14.png")} />
                  </View>
                  <Text style={StylesTestCancerDetail.textNumber}>{itemDetail && itemDetail.mpv}</Text>
                  <View style={[StylesTestCancerDetail.lineColor, { backgroundColor: "#2ecc71" }]}></View>
                  <Text style={StylesTestCancerDetail.textCan}>MPV </Text>
                  <Text numberOfLines={2} style={StylesTestCancerDetail.textDes}>Thể tích trung bình của tiểu cầu</Text>
               </View>
               <View style={StylesTestCancerDetail.cardDetail}>
                  <View style={StylesTestCancerDetail.iconDetail}>
                     <Image style={StylesTestCancerDetail.img} source={require("../Assets/Image/15.png")} />
                  </View>
                  <Text style={StylesTestCancerDetail.textNumber}>{itemDetail && itemDetail.pct}</Text>
                  <View style={[StylesTestCancerDetail.lineColor, { backgroundColor: "#3498DB" }]}></View>
                  <Text style={StylesTestCancerDetail.textCan}>PCT </Text>
                  <Text numberOfLines={2} style={StylesTestCancerDetail.textDes}>Dung tích khối tiểu cầu</Text>
               </View>
            </View>

            <View style={StylesTestCancerDetail.BodyItem}>
               <View style={StylesTestCancerDetail.cardDetail}>
                  <View style={StylesTestCancerDetail.iconDetail}>
                     <Image style={StylesTestCancerDetail.img} source={require("../Assets/Image/16.png")} />
                  </View>
                  <Text style={StylesTestCancerDetail.textNumber}>{itemDetail && itemDetail.pdw}</Text>
                  <View style={[StylesTestCancerDetail.lineColor, { backgroundColor: "#34495e" }]}></View>
                  <Text style={StylesTestCancerDetail.textCan}>PDW </Text>
                  <Text numberOfLines={2} style={StylesTestCancerDetail.textDes}>Mức độ đồng đều phân bố kích thước giữa các tiểu cầu</Text>
               </View>
               <View style={StylesTestCancerDetail.cardDetail}>
                  <View style={StylesTestCancerDetail.iconDetail}>
                     <Image style={StylesTestCancerDetail.img} source={require("../Assets/Image/17.png")} />
                  </View>
                  <Text style={StylesTestCancerDetail.textNumber}>{itemDetail && itemDetail.hgb}</Text>
                  <View style={[StylesTestCancerDetail.lineColor, { backgroundColor: "#33D9B2" }]}></View>
                  <Text style={StylesTestCancerDetail.textCan}>HGB </Text>
                  <Text numberOfLines={2} style={StylesTestCancerDetail.textDes}>Lượng huyết sắc tố có trong một đơn vị máu toàn phần</Text>
               </View>
            </View>

            <View style={StylesTestCancerDetail.BodyItem}>
               <View style={StylesTestCancerDetail.cardDetail}>
                  <View style={StylesTestCancerDetail.iconDetail}>
                     <Image style={StylesTestCancerDetail.img} source={require("../Assets/Image/18.png")} />
                  </View>
                  <Text style={StylesTestCancerDetail.textNumber}>{itemDetail && itemDetail.tpttbm}</Text>
                  <View style={[StylesTestCancerDetail.lineColor, { backgroundColor: "#3498DB" }]}></View>
                  <Text style={StylesTestCancerDetail.textCan}>tpttbm</Text>
                  <Text numberOfLines={2} style={StylesTestCancerDetail.textDes}>Số lượng hồng cầu (RBC), bạch cầu (WBC), tiểu cầu (PLT) đồng thời xác định tỷ lệ phần trăm và kích thước các tế bào máu.</Text>
               </View>
               <View style={StylesTestCancerDetail.cardDetail}>
                  <View style={StylesTestCancerDetail.iconDetail}>
                     <Image style={StylesTestCancerDetail.img} source={require("../Assets/Image/19.png")} />
                  </View>
                  <Text style={StylesTestCancerDetail.textNumber}>{itemDetail && itemDetail.mch}</Text>
                  <View style={[StylesTestCancerDetail.lineColor, { backgroundColor: "#FF793F" }]}></View>
                  <Text style={StylesTestCancerDetail.textCan}>MCH </Text>
                  <Text numberOfLines={2} style={StylesTestCancerDetail.textDes}>Lượng huyết sắc tố có trong mỗi hồng cầu, tính bằng công thức MCH = Hb/RBC.</Text>
               </View>
            </View>
            <View style={StylesHisToryScreen.viewTest}>
               <Text style={StylesHisToryScreen.titleBS}>Kết quả tư vấn</Text>
               <View style={StylesHisToryScreen.cardHis}>
                  <Text style={StylesHisToryScreen.textHis}>"{ShowResult[0].Desc}"</Text>
               </View>
               <Text style={StylesHisToryScreen.titleBS}>Danh sách bác sĩ chuyên khoa: </Text>
               {/* <View style={[StylesHomeScreen.ViewDoctor, { height: 300, marginTop: 20, paddingLeft: 0 }]} > */}
               <FlatList
                  style={{ width: "100%", height: 320 }}
                  horizontal
                  data={listDoctor}
                  keyExtractor={item => item.name}
                  contentContainerStyle={{ paddingBottom: 10 }}
                  renderItem={({ item }) => {
                     return (
                        <TouchableOpacity onPress={() => handleDoctorDetail(item)}>
                           <View style={[StylesListDoctor.listDoctor]}>
                              <View style={StylesListDoctor.cardDoctor}>
                                 <Image resizeMode="cover" style={StylesListDoctor.avatarDoctor} source={{ uri: `http://${URL_SEVER}:433${item.image}` }} />
                                 <Text style={StylesListDoctor.naemDoctor}>Bs. {item.fullname}</Text>
                                 <Text style={StylesListDoctor.optionDoctor}>{item.department}</Text>
                                 <TouchableOpacity style={StylesListDoctor.btnTuVan} onPress={
                                    () => Communications.phonecall(item.phone, true)
                                 }>
                                    <Text style={StylesListDoctor.textBtnDoctor}>Tư vấn với bác sĩ</Text>
                                 </TouchableOpacity>
                              </View>
                           </View>
                        </TouchableOpacity>
                     )
                  }}
               />
               {/* </View> */}
               <Text style={StylesHisToryScreen.titleBS}>Danh sách bệnh viện chuyên khoa: </Text>
               <FlatList
                  data={listHospital}
                  keyExtractor={item => item}
                  contentContainerStyle={{ paddingBottom: 100 }}
                  renderItem={({ item }) => {
                     return (
                        <View style={[StylesHomeScreen.ViewHoispital]}>
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
            <Text style={StylesHisToryScreen.titleBS}>Danh sách bệnh viện chuyên khoa: </Text>
         </ScrollView>
         <ModalDoctorDetail
            doctorDetail={doctorDetail}
            isShowModalDetailDoctor={isShowModalDoctor}
            handleHideModalDocdorDetail={handleHideModalDocdorDetail}
         />
         {/* <ModalHospitalDetail
            isShowModalHospital={isShowModalHospital}
            hospitalDetail={hospitalDetail}
            handleHideModalHospital={handleHideModalHospital}
         /> */}
      </View>

   )
}