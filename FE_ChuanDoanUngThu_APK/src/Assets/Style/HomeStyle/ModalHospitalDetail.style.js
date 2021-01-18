import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StylesModalHospital = StyleSheet.create({

   ModalHospital: {
      width: "100%",
      height: 300,
      backgroundColor: "#fff",
      borderRadius: 10
   },
   viewMap: {
      width: "100%",
      height: 200,
      backgroundColor: "red",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
   },
   titleName: {
      fontWeight: "bold",
      color: "#2d3436",
      fontSize: 19,
      marginBottom: 10
   },
   viewConent: {
      padding: 10
   },
   textAddress: {
      fontSize: 16,
      color: "#2d3436"
   },
   imageMap: {
      width: "100%",
      height: "100%",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
   }
})

export default StylesModalHospital