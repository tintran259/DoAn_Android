import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StylesCVScreen } from '../Assets/Style/CVHealthyStyle/CVHealthyStyle'
import IconAntd from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'

export default function HistoryScreen() {
   const navigation = useNavigation()
   const handleBack = () => {
      navigation.goBack()
   }
   const dataUser = useSelector(state => state.User.dataUser)
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
                  <Image style={StylesCVScreen.avatarUser} source={{ uri: "https://zicxaphotos.com/wp-content/uploads/2019/07/Girl-xinh-cute.jpg" }} />
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
                           <Text style={StylesCVScreen.numberHight}>--</Text>
                        </View>
                        <View style={StylesCVScreen.itemHight}>
                           <Text style={StylesCVScreen.textItem}>Chiều cao</Text>
                           <Text style={StylesCVScreen.numberHight}>--</Text>
                        </View>
                        <View style={StylesCVScreen.itemHight}>
                           <Text style={StylesCVScreen.textItem}>Nhóm máu</Text>
                           <Text style={StylesCVScreen.numberHight}>--</Text>
                        </View>
                     </View>
                     <View style={StylesCVScreen.BtnUpdate}>
                        <TouchableOpacity style={StylesCVScreen.btnUpdate}>
                           <Text style={StylesCVScreen.textBtnUpdate}>Cập nhật hồ sơ sức khỏe</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>
               <View style={StylesCVScreen.ViewHistory}>
                  <Text style={StylesCVScreen.titleViewHistory}>Lịch sử khám & xét nghiệm</Text>
               </View>
               <View style={StylesCVScreen.emptyHistory}>
                  <View style={StylesCVScreen.ViewEmpty}>
                     <Image style={StylesCVScreen.iconEmpty} source={require("../Assets/Image/empty2.png")} />
                     <Text style={StylesCVScreen.titleEmpty}>Chưa có thông tin kết quả</Text>
                     <Text style={StylesCVScreen.contentEmpty}>Chọn ngay dịch vụ Khám & xét nghiệm để theo dõi và chăm sóc sức khỏe.</Text>
                  </View>
               </View>
            </View>
         </ScrollView>
      </View>
   )
}