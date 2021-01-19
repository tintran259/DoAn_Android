import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, TextInput } from 'react-native'
import { StylesCVScreen } from '../Assets/Style/CVHealthyStyle/CVHealthyStyle'
import IconAntd from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-native-modal'
import { asyncEditInforUser, EditInforSuccessed } from '../Store/User/action'
import { asyncGetListHistoryUser, actGetListHistoryDetail } from '../Store/History/action'
import getDateByTimeZoneDay from '../Contants/FORMAT_DATE'
import getDateByTimeZoneDayTime from '../Contants/FORMAT_DATETIIME'

export default function HistoryScreen() {
   const dispatch = useDispatch()
   const navigation = useNavigation()
   const dataUser = useSelector(state => state.User.dataUser)
   const listHistory = useSelector(state => state.History.listHistory)



   const dayNow = new Date()
   const dayNowFormat = getDateByTimeZoneDay(dayNow)
   const userId = dataUser && dataUser.id
   const DayNowAndDayHistory = (dayHistory) => {
      if (dayNowFormat === dayHistory) {
         return true
      }
      return false
   }
   useEffect(() => {
      dispatch(asyncGetListHistoryUser({ userId }))
   }, [])
   const [formHealthy, setFormHealthy] = useState({
      userId: dataUser && dataUser.id,
      fullname: dataUser && dataUser.fullname,
      address: dataUser && dataUser.address,
      gender: dataUser && dataUser.gender,
      phone: dataUser && dataUser.phone,
      birthday: dataUser && dataUser.age,
      nameGuardian: dataUser && dataUser.gaurdian,
      phoneGuardian: dataUser && dataUser.gaurdian_phone,
      height: dataUser && dataUser.height,
      weight: dataUser && dataUser.weight,
      blood: dataUser && dataUser.blood_type
   })
   const [isShowModal, setIsSHowModal] = useState(false)
   const handleBack = () => {
      navigation.goBack()
   }
   const handleDetailTest = (item) => {
      dispatch(actGetListHistoryDetail(item))
      navigation.navigate('HistoryDetail')
   }
   const handleHideModal = () => {
      setIsSHowModal(false)
   }
   const handleUpdate = () => {
      setIsSHowModal(true)
   }
   const handleUpdateNow = () => {
      console.log("formHealthy:", formHealthy);
      let { userId, fullname, address, gender, phone, birthday, nameGuardian, phoneGuardian, blood, height, weight } = formHealthy
      dispatch(asyncEditInforUser({ userId, fullname, address, gender, phone, birthday, nameGuardian, phoneGuardian, blood, height, weight }))
         .then((res) => {
            if (res.ok) {
               dispatch(EditInforSuccessed())
               setIsSHowModal(false)
            }
         })
   }

   const Empty = () => {
      return (
         <View style={StylesCVScreen.emptyHistory}>
            <View style={StylesCVScreen.ViewEmpty}>
               <Image style={StylesCVScreen.iconEmpty} source={require("../Assets/Image/empty2.png")} />
               <Text style={StylesCVScreen.titleEmpty}>Chưa có thông tin kết quả</Text>
               <Text style={StylesCVScreen.contentEmpty}>Chọn ngay dịch vụ tư vấn & hổ trợ để theo dõi và chăm sóc sức khỏe.</Text>
            </View>
         </View>
      )
   }
   return (
      <View style={StylesCVScreen.container}>
         <View style={StylesCVScreen.header}>
            <TouchableOpacity style={StylesCVScreen.btnBack} onPress={handleBack}>
               <IconAntd name="arrowleft" size={25} color="#fff" />
            </TouchableOpacity>
            <Text style={StylesCVScreen.titleHeader}>Hồ sơ sức khỏe</Text>
         </View>
         <ScrollView style={StylesCVScreen.body}>
            <View style={StylesCVScreen.bodyHeader}>
               <View style={StylesCVScreen.ViewUser}>
                  <Image style={StylesCVScreen.avatarUser} source={{ uri: "https://paramountsprx.com/wp-content/uploads/2017/09/MAN_AVATAR.png" }} />
                  <View style={StylesCVScreen.inforUser}>
                     <Text style={StylesCVScreen.nameUser}>{dataUser && dataUser.fullname}</Text>
                     <Text style={StylesCVScreen.ageUser}>{dataUser && dataUser.age}</Text>
                  </View>
               </View>
            </View>
            <View style={StylesCVScreen.bodyContent}>
               <View style={StylesCVScreen.inforView}>
                  <View style={StylesCVScreen.inforContent}>
                     <View style={StylesCVScreen.inforHight}>
                        <View style={StylesCVScreen.itemHight}>
                           <Text style={StylesCVScreen.textItem}>Cân nặng</Text>
                           <Text style={StylesCVScreen.numberHight}>{dataUser && dataUser.weight ? dataUser.weight : "--"}</Text>
                        </View>
                        <View style={StylesCVScreen.itemHight}>
                           <Text style={StylesCVScreen.textItem}>Chiều cao</Text>
                           <Text style={StylesCVScreen.numberHight}>{dataUser && dataUser.height ? dataUser.height : "--"}</Text>
                        </View>
                        <View style={StylesCVScreen.itemHight}>
                           <Text style={StylesCVScreen.textItem}>Nhóm máu</Text>
                           <Text style={StylesCVScreen.numberHight}>{dataUser && dataUser.blood_type ? dataUser.blood_type : "--"}</Text>
                        </View>
                     </View>
                     <View style={StylesCVScreen.BtnUpdate}>
                        <TouchableOpacity style={StylesCVScreen.btnUpdate} onPress={handleUpdate}>
                           <Text style={StylesCVScreen.textBtnUpdate}>Cập nhật hồ sơ sức khỏe</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>
               <View style={StylesCVScreen.ViewHistory}>
                  <Text style={StylesCVScreen.titleViewHistory}>Lịch tư vấn & hổ trợ</Text>
                  <FlatList
                     data={listHistory}
                     contentContainerStyle={{ paddingBottom: 90 }}
                     keyExtractor={item => item.id.toString()}
                     renderItem={({ item, index }) => {
                        const dateTest = item.timestamp
                        const dateTestFormat = dateTest.slice(6, 16)
                        console.log("dateTestFormat:", dateTestFormat);
                        return (
                           <View>
                              {
                                 DayNowAndDayHistory(dateTestFormat) &&
                                 <Image source={require("../Assets/Image/new1.png")} style={{
                                    position: "absolute",
                                    top: "7%",
                                    right: "0%",
                                    zIndex: 200,
                                    width: 25,
                                    height: 25
                                 }} />
                              }


                              <TouchableOpacity style={StylesCVScreen.cardItem} onPress={() => handleDetailTest(item)}>
                                 <View style={StylesCVScreen.timeHistory}>
                                    <Text style={StylesCVScreen.titleTuVan}>Kết quả tư Vấn</Text>

                                    <View style={StylesCVScreen.timeTest}>
                                       <IconAntd name="clockcircleo" />
                                       <Text style={StylesCVScreen.textTime}>{item.timestamp}</Text>
                                    </View>
                                    <Text>{item.history}</Text>
                                 </View>
                              </TouchableOpacity>
                           </View>
                        )
                     }}
                     ListEmptyComponent={Empty}
                  />
               </View>
            </View>
         </ScrollView>
         <Modal
            isVisible={isShowModal}
            style={{ alignItems: "center" }}
            onBackdropPress={handleHideModal}
         >

            <View style={StylesCVScreen.ModalUpdate}>
               <Text style={StylesCVScreen.titleModalHeader}>Cập nhật hồ sơ</Text>
               <View style={StylesCVScreen.bodyModdal}>
                  <View style={StylesCVScreen.viewControl}>
                     <View style={StylesCVScreen.itemControl}>
                        <Text style={StylesCVScreen.textItem}>Cân nặng</Text>
                        <TextInput
                           value={formHealthy.weight}
                           onChangeText={text => setFormHealthy({ ...formHealthy, weight: text })}
                           style={StylesCVScreen.inputControl}
                        />
                     </View>
                     <View style={StylesCVScreen.itemControl}>
                        <Text style={StylesCVScreen.textItem}>Chiều cao</Text>
                        <TextInput
                           style={StylesCVScreen.inputControl}
                           value={formHealthy.height}
                           onChangeText={text => setFormHealthy({ ...formHealthy, height: text })}
                        />
                     </View>
                     <View style={StylesCVScreen.itemControl}>
                        <Text style={StylesCVScreen.textItem}>Nhóm máu</Text>
                        <TextInput
                           style={StylesCVScreen.inputControl}
                           value={formHealthy.blood}
                           onChangeText={text => setFormHealthy({ ...formHealthy, blood: text })}
                        />
                     </View>
                  </View>
                  <Image style={StylesCVScreen.imgModal} source={require("../Assets/Image/hel.png")} />
               </View>
               <View style={StylesCVScreen.ViewFooter}>
                  <TouchableOpacity style={StylesCVScreen.btnUpdateModal} onPress={handleUpdateNow}>
                     <Text style={StylesCVScreen.textBtnModal}>Cập nhật hồ sơ</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </Modal>
      </View>
   )
}