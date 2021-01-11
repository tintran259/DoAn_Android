import React, { useMemo } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { StylesTestCancerDetail } from '../Assets/Style/TestCancerDetail'
import IconAntd from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { ICD } from '../mock'
export default function TestCancer() {
   const result = useSelector(state => state.Result.ResultTest)
   const formTest = useSelector(state => state.Result.formTest)
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
   return (
      <View style={StylesTestCancerDetail.container}>
         <View style={StylesTestCancerDetail.header}>
            <TouchableOpacity style={StylesTestCancerDetail.btnBack} onPress={handleBack}>
               <IconAntd name="arrowleft" size={25} />
            </TouchableOpacity>
            <Text style={StylesTestCancerDetail.titleHeader}>Tư vấn</Text>
         </View>
         <View style={StylesTestCancerDetail.body}>
            <View style={StylesTestCancerDetail.labelHeaderBody}>
               <Text style={StylesTestCancerDetail.titleBody}>Bạn có thể đã bị :</Text>
               <Text style={StylesTestCancerDetail.textBody}>{ShowResult[0].Desc}</Text>
            </View>
            <View style={StylesTestCancerDetail.sectionDetail}>
               <Text style={StylesTestCancerDetail.titleBody}>Thông số chi tiết</Text>
               <ScrollView
                  horizontal={true}
                  style={StylesTestCancerDetail.section}>
                  <View style={StylesTestCancerDetail.item}>
                     <Text style={StylesTestCancerDetail.nameTest}>baso</Text>
                     <Text style={StylesTestCancerDetail.inforText}>{formTest && formTest.baso}</Text>
                  </View>
                  <View style={StylesTestCancerDetail.item}>
                     <Text style={StylesTestCancerDetail.nameTest}>eos</Text>
                     <Text style={StylesTestCancerDetail.inforText}>{formTest && formTest.eos}</Text>
                  </View>
                  <View style={StylesTestCancerDetail.item}>
                     <Text style={StylesTestCancerDetail.nameTest}>Mono</Text>
                     <Text style={StylesTestCancerDetail.inforText}>{formTest && formTest.mono}</Text>
                  </View>
                  <View style={StylesTestCancerDetail.item}>
                     <Text style={StylesTestCancerDetail.nameTest}>neu</Text>
                     <Text style={StylesTestCancerDetail.inforText}>{formTest && formTest.neu}</Text>
                  </View>
                  <View style={StylesTestCancerDetail.item}>
                     <Text style={StylesTestCancerDetail.nameTest}>lym</Text>
                     <Text style={StylesTestCancerDetail.inforText}>{formTest && formTest.lym}</Text>
                  </View>
                  <View style={StylesTestCancerDetail.item}>
                     <Text style={StylesTestCancerDetail.nameTest}>wbc</Text>
                     <Text style={StylesTestCancerDetail.inforText}>{formTest && formTest.wbc}</Text>
                  </View>
                  <View style={StylesTestCancerDetail.item}>
                     <Text style={StylesTestCancerDetail.nameTest}>hct</Text>
                     <Text style={StylesTestCancerDetail.inforText}>{formTest && formTest.hct}</Text>
                  </View>
                  <View style={StylesTestCancerDetail.item}>
                     <Text style={StylesTestCancerDetail.nameTest}>hgb</Text>
                     <Text style={StylesTestCancerDetail.inforText}>{formTest && formTest.hgb}</Text>
                  </View>
                  <View style={StylesTestCancerDetail.item}>
                     <Text style={StylesTestCancerDetail.nameTest}>rbc</Text>
                     <Text style={StylesTestCancerDetail.inforText}>{formTest && formTest.rbc}</Text>
                  </View>
                  <View style={StylesTestCancerDetail.item}>
                     <Text style={StylesTestCancerDetail.nameTest}>mch</Text>
                     <Text style={StylesTestCancerDetail.inforText}>{formTest && formTest.mch}</Text>
                  </View>
                  <View style={StylesTestCancerDetail.item}>
                     <Text style={StylesTestCancerDetail.nameTest}>mchc</Text>
                     <Text style={StylesTestCancerDetail.inforText}>{formTest && formTest.mchc}</Text>
                  </View>
                  <View style={StylesTestCancerDetail.item}>
                     <Text style={StylesTestCancerDetail.nameTest}>mcv</Text>
                     <Text style={StylesTestCancerDetail.inforText}>{formTest && formTest.mcv}</Text>
                  </View>
                  <View style={StylesTestCancerDetail.item}>
                     <Text style={StylesTestCancerDetail.nameTest}>mpv</Text>
                     <Text style={StylesTestCancerDetail.inforText}>{formTest && formTest.mpv}</Text>
                  </View>
                  <View style={StylesTestCancerDetail.item}>
                     <Text style={StylesTestCancerDetail.nameTest}>rdw</Text>
                     <Text style={StylesTestCancerDetail.inforText}>{formTest && formTest.rdw}</Text>
                  </View>
                  <View style={StylesTestCancerDetail.item}>
                     <Text style={StylesTestCancerDetail.nameTest}>pdw</Text>
                     <Text style={StylesTestCancerDetail.inforText}>{formTest && formTest.pdw}</Text>
                  </View>
                  <View style={StylesTestCancerDetail.item}>
                     <Text style={StylesTestCancerDetail.nameTest}>plt</Text>
                     <Text style={StylesTestCancerDetail.inforText}>{formTest && formTest.plt}</Text>
                  </View>
                  <View style={StylesTestCancerDetail.item}>
                     <Text style={StylesTestCancerDetail.nameTest}>tpttbm</Text>
                     <Text style={StylesTestCancerDetail.inforText}>{formTest && formTest.tpttbm}</Text>
                  </View>
                  <View style={StylesTestCancerDetail.item}>
                     <Text style={StylesTestCancerDetail.nameTest}>pct</Text>
                     <Text style={StylesTestCancerDetail.inforText}>{formTest && formTest.pct}</Text>
                  </View>
               </ScrollView>
            </View>
         </View>
      </View>
   )
}