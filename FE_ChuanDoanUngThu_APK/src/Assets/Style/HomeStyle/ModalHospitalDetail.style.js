import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StylesModalHospital = StyleSheet.create({

   ModalHospital: {
      width: "100%",
      backgroundColor: "#fff",
      borderRadius: 10
   },
   viewMap: {
      width: "100%",
      height: 350,
      backgroundColor: "red",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      marginTop: 10
   },
   titleName: {
      fontWeight: "bold",
      color: "#2d3436",
      fontSize: 17,
      marginBottom: 10
   },
   viewConent: {
      padding: 10
   },
   textAddress: {
      fontSize: 14,
      color: "#2d3436"
   },
   imageMap: {
      width: "100%",
      height: "100%",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
   },
   BtnMap: {
      position: "absolute",
      right: "18%",
      top: "2%",
      width: 40,
      height: 40,
   },
   BtnCall: {
      position: "absolute",
      right: "3%",
      top: "2%",
      width: 40,
      height: 40,
   },
   btnMaps: {
      width: "100%",
      height: "100%",
      backgroundColor: "#2e86de",
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center"
   },
   btnCalls: {
      width: "100%",
      height: "100%",
      backgroundColor: "#2ecc71",
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center"
   }
})

export default StylesModalHospital