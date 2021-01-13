import React, { useState, useMemo } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { StylesTestCancer } from '../Assets/Style/TestCancerStyle'
import { StylesLoginScreen } from '../Assets/Style/LoginStyle'
import { FormTestCancer } from '../Components/TestCancerScreen.js'
import QRCodeScanner from 'react-native-qrcode-scanner';
import IconAntd from 'react-native-vector-icons/AntDesign'
import { asyncGetTestCancer, actGetFormTest } from '../Store/Test/action'
import { useDispatch, useSelector } from 'react-redux'
import { ICD } from '../mock'
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal'
import getDateByTimeZoneDay from '../Contants/FORMAT_DATE'

export default function TestCancerScreen() {
   const dispatch = useDispatch()
   const navigation = useNavigation()
   const dateNow = getDateByTimeZoneDay(new Date());
   const [isShowQR, setIsShowQR] = useState(false)
   const [isShowModalResult, setIsShowModalResult] = useState(false)
   const [isSubmit, setIsSubmit] = useState(false)
   const [isShowModalFailQR, setIsShowModalFailQR] = useState(false)
   const [formTestCancer, setFormTestCancer] = useState({
      baso: "",
      eos: "",
      mono: "",
      neu: "",
      lym: "",
      wbc: "",
      hct: "",
      hgb: "",
      rbc: "",
      mch: "",
      mchc: "",
      mcv: "",
      mpv: "",
      rdw: "",
      pdw: "",
      plt: "",
      tpttbm: "",
      pct: "",
      dateTest: dateNow
   })
   const result = useSelector(state => state.Result.ResultTest)
   console.log("result:", result);
   const ShowResult = useMemo(() => {
      if (result !== null) {
         const data = ICD.filter((item) => {
            return item.Name === result
         })
         return data
      }
      return [{ Desc: "" }]
   }, [result])
   const validate = () => {
      if (formTestCancer.baso === "" ||
         formTestCancer.eos === "" ||
         formTestCancer.hct === "" ||
         formTestCancer.hgb === "" ||
         formTestCancer.lym === "" ||
         formTestCancer.mch === "" ||
         formTestCancer.mchc === "" ||
         formTestCancer.mcv === "" ||
         formTestCancer.mono === "" ||
         formTestCancer.mpv === "" ||
         formTestCancer.neu === "" ||
         formTestCancer.pct === "" ||
         formTestCancer.pdw === "" ||
         formTestCancer.plt === "" ||
         formTestCancer.rbc === "" ||
         formTestCancer.tpttbm === "" ||
         formTestCancer.wbc === "" ||
         formTestCancer.rdw === ""
      ) {
         return false
      }
      return true
   }
   const hanleSaveTestCancer = () => {
      setIsSubmit(true)
      setTimeout(() => {
         setIsSubmit(false)
      }, 4000);
      if (validate()) {
         setIsSubmit(false)
         const { baso, eos, mono, neu, lym, wbc, hct, hgb, rbc, mch, mchc, mcv, mpv, rdw, pdw, plt, tpttbm, pct,
         } = formTestCancer
         dispatch(asyncGetTestCancer({
            baso, eos, mono, neu, lym, wbc, hct, hgb, rbc, mch, mchc, mcv, mpv, rdw, pdw, plt, tpttbm, pct,
         })).then((res) => {
            if (res.ok) {
               setIsShowModalResult(true)
               dispatch(actGetFormTest(formTestCancer))
               setFormTestCancer({
                  baso: "",
                  eos: "",
                  mono: "",
                  neu: "",
                  lym: "",
                  wbc: "",
                  hct: "",
                  hgb: "",
                  rbc: "",
                  mch: "",
                  mchc: "",
                  mcv: "",
                  mpv: "",
                  rdw: "",
                  pdw: "",
                  plt: "",
                  tpttbm: "",
                  pct: "",
               })
            } else {
               alert("Fail")
            }
         })
      }
   }
   const handleMoveTestCancerDetail = () => {
      navigation.navigate('TestDetail')
      setIsShowModalResult(false)
   }
   const handleShowQRCode = () => {
      setIsShowQR(true)
   }
   const handleHideScanQR = () => {
      setIsShowQR(false)
   }
   const handleHideQRFail = () => {
      setIsShowModalFailQR(false)
   }
   const onSuccess = e => {

      const valueQR = e.data;
      if (valueQR.indexOf("baso") !== -1 && valueQR.indexOf("eos") !== -1 && valueQR.indexOf("mono") !== -1) {
         const dataR = JSON.parse(valueQR);
         setIsShowQR(false)
         setFormTestCancer({
            baso: dataR.baso,
            eos: dataR.eos,
            mono: dataR.mono,
            neu: dataR.neu,
            lym: dataR.lym,
            wbc: dataR.wbc,
            hct: dataR.hct,
            hgb: dataR.hgb,
            rbc: dataR.rbc,
            mch: dataR.mch,
            mchc: dataR.mchc,
            mcv: dataR.mcv,
            mpv: dataR.mpv,
            rdw: dataR.rdw,
            pdw: dataR.pdw,
            plt: dataR.plt,
            tpttbm: dataR.tpttbm,
            pct: dataR.pct,
         })
      } else {
         setIsShowModalFailQR(true)
      }
   };
   const handleHideModal = () => {
      setIsShowModalResult(false)
   }
   const initalProps = {
      isSubmit,
      formTestCancer,
      setFormTestCancer
   }
   return (
      <View style={StylesTestCancer.container}>
         <View style={StylesTestCancer.header}>
            <Text style={StylesTestCancer.titleHeader}>Xét Nghiệm</Text>
            <View style={StylesTestCancer.btnSaveView}>
               <TouchableOpacity style={StylesTestCancer.btnSave} onPress={hanleSaveTestCancer}>
                  <Text style={StylesTestCancer.textBtnSave}>Lưu</Text>
               </TouchableOpacity>
            </View>
         </View>

         <View style={StylesTestCancer.btnQR}>
            <TouchableOpacity style={StylesTestCancer.btnShowQr} onPress={handleShowQRCode}>
               <Image style={StylesTestCancer.iconQR} source={require("../Assets/Image/qr-code-scan.png")} />
            </TouchableOpacity>
         </View>
         <ScrollView style={StylesTestCancer.body}>
            <FormTestCancer  {...initalProps} />
         </ScrollView>
         {
            isShowQR &&
            <View style={StylesLoginScreen.QRcode}>
               <QRCodeScanner
                  reactivate={true}
                  showMarker={true}
                  reactivateTimeout={2000}
                  onRead={onSuccess}
                  topContent={
                     <View style={StylesLoginScreen.topContentQR}>
                        <TouchableOpacity style={StylesLoginScreen.btnCloseQR} onPress={handleHideScanQR}>
                           <IconAntd name="close" size={23} color="#2d3436" />
                        </TouchableOpacity>
                     </View>
                  }
                  customMarker={() => {
                     return (
                        <View style={StylesTestCancer.markerStyle}>
                           <View style={StylesTestCancer.linefirst}>
                              <View style={StylesTestCancer.line1}></View>
                              <View style={StylesTestCancer.line2}></View>
                           </View>
                           <View style={StylesTestCancer.linefirst}>
                              <View style={StylesTestCancer.line3}></View>
                              <View style={StylesTestCancer.line4}></View>
                           </View>
                        </View>
                     )
                  }}
                  markerStyle={StylesLoginScreen.markerQR}
               />
            </View>
         }
         <Modal
            isVisible={isShowModalResult}
         >
            <View style={StylesTestCancer.ViewModal}>
               <Text style={StylesTestCancer.titleHeaderModal}>Kết Quả</Text>
               <View style={StylesTestCancer.bodyModal}>
                  <View style={StylesTestCancer.ContentBody}>
                     <Text style={StylesTestCancer.textName} >Bạn có liên quan đến:</Text>
                     <Text style={StylesTestCancer.textRe}>{ShowResult && ShowResult[0].Desc}</Text>
                     <Text style={StylesTestCancer.textUseful}>Hãy đến các bệnh viện để chuẩn đoán chính xác hơn. </Text>
                  </View>
                  <Image style={StylesTestCancer.iamgeModal} source={{ uri: "https://freepngimg.com/thumb/hammer/80451-physician-product-khan-attock-ismail-urdu-dera.png" }} />
               </View>
               <View style={StylesTestCancer.ViewBtn}>
                  <TouchableOpacity style={StylesTestCancer.btn} onPress={handleHideModal}>
                     <Text style={StylesTestCancer.textBtnOut}>Thoát</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={StylesTestCancer.btn} onPress={handleMoveTestCancerDetail}>
                     <Text style={[StylesTestCancer.textBtnOut, { color: "#3498db" }]}>Xem tư vấn</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </Modal>
         <Modal
            onBackdropPress={handleHideQRFail}
            isVisible={isShowModalFailQR}
            style={{ alignItems: "center" }}
         >
            <View style={StylesTestCancer.ModalFailQR}>
               <Text style={StylesTestCancer.titleHeaderModal}>Thông báo</Text>
               <Text style={StylesTestCancer.titleContent}>Mã QR sai hoặc không có !</Text>
               <TouchableOpacity style={StylesTestCancer.btnOK} onPress={handleHideQRFail}>
                  <Text>OK</Text>
               </TouchableOpacity>
            </View>
         </Modal>
      </View>
   )
}