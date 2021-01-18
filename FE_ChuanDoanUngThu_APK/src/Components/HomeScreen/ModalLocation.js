import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import Modal from 'react-native-modal'

import { StylesHomeScreen } from '../../Assets/Style/HomeStyle'


export default function ModalLocation({
   listLocation,
   isShowLocation,
   handleHideLocation,
   handleSelectLocation
}) {
   return (
      <Modal
         animationOutTiming={1000}
         onBackdropPress={handleHideLocation}
         isVisible={isShowLocation}
         style={{ margin: 0, alignItems: "center", justifyContent: "flex-end" }} >
         <View style={StylesHomeScreen.ModalLocation}>
            <Image style={StylesHomeScreen.locationModal} source={require("../../Assets/Image/location2.png")} />
            <Text style={StylesHomeScreen.contentModal}>Hãy chọn tỉnh thành để hiển thị dịch vụ phù hợp với bạn</Text>
            <View style={StylesHomeScreen.LocationName}>
               <FlatList
                  data={listLocation}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item, index }) => {
                     return (
                        <TouchableOpacity key={index} style={StylesHomeScreen.btnSelectLocation} onPress={() => handleSelectLocation(item)}>
                           <Text style={StylesHomeScreen.textNameLocation}>{item.name}</Text>
                        </TouchableOpacity>
                     )
                  }}
               />
            </View>
         </View>
      </Modal>
   )
}