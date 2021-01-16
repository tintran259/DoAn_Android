import React, { useEffect, useMemo } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { StylesTestCancerDetail } from '../Assets/Style/TestCancerDetail/'
import { StylesHisToryScreen } from '../Assets/Style/HistoryStyle/HistoryScreenStyles'
import IconAntd from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetListDoctor } from '../Store/Doctor/action'
import { asyncGetListHospital } from '../Store/Hospital/action'
import Communications from 'react-native-communications';
import { useState } from 'react'


export default function HistoryTestCancer() {
   const navigation = useNavigation()
   const dispatch = useDispatch()
   const itemDetail = useSelector(state => state.History.itemHistory)
   const listDoctor = useSelector(state => state.Doctor.listDoctor)
   const listHospital = useSelector(state => state.Hospital.listHospital)
   // useEffect(() => {
   //    dispatch(asyncGetListDoctor()).then((res) => {
   //       if (res.ok) {
   //          setListDoctor(res.data)
   //       }
   //    })
   //    //dispatch(asyncGetListHospital())
   // }, [])
   const handleBack = () => {
      navigation.goBack()
   }
   const inforDoctor = useMemo(() => {
      if (listDoctor) {
         return listDoctor.filter((item) => {
            return item.id === itemDetail.doctor_id
         })
      } else {
         return null
      }
   }, [itemDetail, listDoctor])
   console.log("inforDoctor:", inforDoctor);
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
                  <Text style={StylesHisToryScreen.textHis}>"{itemDetail.predict}"</Text>
               </View>
               <Text style={StylesHisToryScreen.titleBS}>Bác sĩ bạn đã tư vấn</Text>
               <View style={StylesHisToryScreen.cardDoctor}>
                  <View style={StylesHisToryScreen.headerCard}>
                     <Image style={StylesHisToryScreen.avatarBS} source={{ uri: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2012/06/bs-nguyen-hong-nhung.jpg" }} />
                     <View>
                        <View style={StylesHisToryScreen.itemText}>
                           <Text style={StylesHisToryScreen.titleNmae}>Ths.</Text>
                           <Text style={StylesTestCancerDetail.labelNmae}>{inforDoctor && inforDoctor[0].fullname}</Text>
                        </View>
                        <View style={StylesHisToryScreen.itemText}>
                           <Text style={StylesHisToryScreen.titleNmae}>Chuyên khoa:</Text>
                           <Text style={StylesTestCancerDetail.labelNmae}>{inforDoctor && inforDoctor[0].department}</Text>
                        </View>
                        <View style={StylesHisToryScreen.itemText}>
                           <Text style={StylesHisToryScreen.titleNmae}>Địa chỉ:<Text style={StylesTestCancerDetail.labelNmae}>{inforDoctor && inforDoctor[0].address}</Text></Text>
                        </View>
                     </View>
                  </View>
                  <View style={StylesHisToryScreen.bottom}>
                     <TouchableOpacity style={StylesHisToryScreen.btnContact} onPress={handleContact}>
                        <Text style={StylesHisToryScreen.textContact}>Liên hệ lại</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
         </ScrollView>
      </View>

   )
}