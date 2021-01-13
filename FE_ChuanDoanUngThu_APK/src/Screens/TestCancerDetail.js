import React, { useMemo, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { StylesTestCancerDetail } from '../Assets/Style/TestCancerDetail'
import IconAntd from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { ICD } from '../mock'
import { asyncGetListDoctor } from '../Store/Doctor/action'
import { asyncGetListHospital } from '../Store/Hospital/action'
import { FlatList } from 'react-native-gesture-handler'
import Communications from 'react-native-communications';
import { asyncPostTestHistory } from '../Store/History/action'
import getDateByTimeZoneDay from '../Contants/FORMAT_DATE'

export default function TestCancer() {
   const dispatch = useDispatch()
   const result = useSelector(state => state.Result.ResultTest)
   const formTest = useSelector(state => state.Result.formTest)
   const listDoctor = useSelector(state => state.Doctor.listDoctor)
   const listHospital = useSelector(state => state.Hospital.listHospital)
   const dataUser = useSelector(state => state.User.dataUser)
   console.log("listDoctor", listDoctor);
   console.log("listHospital", listHospital);
   console.log("formTest:", formTest);
   const dateNow = new Date();
   const dateFormat = getDateByTimeZoneDay(dateNow)
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
   const [dataPostHistory, setDataPostHistory] = useState({
      baso: formTest && formTest.baso,
      eos: formTest && formTest.eos,
      hct: formTest && formTest.hct,
      hgb: formTest && formTest.hgb,
      lym: formTest && formTest.lym,
      mch: formTest && formTest.mch,
      mchc: formTest && formTest.mchc,
      mcv: formTest && formTest.mch,
      mono: formTest && formTest.mono,
      mpv: formTest && formTest.mpv,
      neu: formTest && formTest.neu,
      pct: formTest && formTest.pct,
      pdw: formTest && formTest.pdw,
      plt: formTest && formTest.plt,
      rbc: formTest && formTest.rbc,
      rdw: formTest && formTest.rdw,
      tpttbm: formTest && formTest.tpttbm,
      wbc: formTest && formTest.wbc,
      userId: dataUser && dataUser.id,
      doctorId: '',
      hospitalId: "1",
      timestamp: dateFormat,
      test: ShowResult[0].Desc
   })

   console.log("dataPostHistory:", dataPostHistory);

   useEffect(() => {
      dispatch(asyncGetListDoctor())
      dispatch(asyncGetListHospital())
         .then((res) => {
            if (res.ok) {
               const { baso, eos, hct, hgb, lym, mch, mchc, mcv, mono, mpv, neu, pct, pdw, plt, rbc, rdw, tpttbm, wbc, userId, doctorId, hospitalId, timestamp } = dataPostHistory
               dispatch(asyncPostTestHistory({ baso, eos, hct, hgb, lym, mch, mchc, mcv, mono, mpv, neu, pct, pdw, plt, rbc, rdw, tpttbm, wbc, userId, doctorId, hospitalId, timestamp }))
            }
         })
   }, [])

   useEffect(() => {
      const { baso, eos, hct, hgb, lym, mch, mchc, mcv, mono, mpv, neu, pct, pdw, plt, rbc, rdw, tpttbm, wbc, userId, doctorId, hospitalId, timestamp } = dataPostHistory
      dispatch(asyncPostTestHistory({ baso, eos, hct, hgb, lym, mch, mchc, mcv, mono, mpv, neu, pct, pdw, plt, rbc, rdw, tpttbm, wbc, userId, doctorId, hospitalId, timestamp }))
   }, [handleCall])



   const handleCall = (doctor) => {
      console.log("doctor:", doctor);
      setDataPostHistory({ ...dataPostHistory, doctorId: doctor.id })
      const phoneNumber = doctor.phone
      Communications.phonecall(phoneNumber, true)
   }
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
               <Text style={[StylesTestCancerDetail.titleInfor, { marginTop: 20 }]}>Thông tin tham khảo:</Text>
               <View style={StylesTestCancerDetail.contentView}>
                  <Text style={StylesTestCancerDetail.textDoc}>Những bác sĩ liên quan:</Text>
                  <FlatList
                     horizontal
                     data={listDoctor}
                     keyExtractor={item => item.id.toString()}
                     renderItem={({ item }) => {
                        return (
                           <View style={StylesTestCancerDetail.inforDoctor}>
                              <Image style={StylesTestCancerDetail.iamgeAvatar} source={{ uri: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2012/06/bs-nguyen-hong-nhung.jpg" }} />
                              <View style={StylesTestCancerDetail.viewInfor}>
                                 <Text style={StylesTestCancerDetail.textNameDoctor}>{`Ths ${item.fullname}`}</Text>
                                 <Text style={[StylesTestCancerDetail.textNameDoctor, { color: "#3498db" }]}>{item.department}</Text>
                                 <TouchableOpacity style={StylesTestCancerDetail.btnContact} onPress={() => handleCall(item)}>
                                    <Text style={[StylesTestCancerDetail.textNameDoctor, { color: "#ffff", marginTop: 0 }]}>Liên hệ bác sĩ</Text>
                                 </TouchableOpacity>
                              </View>
                           </View>
                        )
                     }}
                  />
                  <Text style={StylesTestCancerDetail.textDoc}>Những bệnh viện liên quan:</Text>
                  <View style={StylesTestCancerDetail.ViewHospital}>
                     <FlatList
                        data={listHospital}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => {
                           return (
                              <View style={StylesTestCancerDetail.HospitalView}>
                                 <View style={StylesTestCancerDetail.listHospital}>
                                    <Image style={StylesTestCancerDetail.imageHospital} source={{ uri: "https://thuocdantoc.vn/wp-content/uploads/2018/12/benh-vien-tu-du.jpg" }} />
                                    <View style={StylesTestCancerDetail.viewInforHos}>
                                       <Text style={StylesTestCancerDetail.textNameHos}>{item.name}</Text>
                                       <Text style={StylesTestCancerDetail.textotLine}>Liên hệ:</Text>
                                       <Text style={StylesTestCancerDetail.textPhone}>{item.hotline}</Text>
                                    </View>
                                 </View>
                                 <View style={StylesTestCancerDetail.viewAdd}>
                                    <Text style={StylesTestCancerDetail.titleAddress}>Địa chỉ:</Text>
                                    <Text>{item.address}</Text>
                                 </View>
                              </View>
                           )
                        }}

                     />
                  </View>
               </View>
            </View>
         </ScrollView>
      </View>
   )
}