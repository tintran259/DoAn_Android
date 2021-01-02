import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const StylesLoginScreen = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff"
   },
   header: {
      width: "100%",
      height: hp("35%"),
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
   },
   formLogin: {
      width: "100%",
      height: hp("61%"),
      padding: 10,
   },
   logo: {
      width: 100,
      height: 100
   },
   textLogo: {
      fontSize: hp("3%"),
      letterSpacing: 1,
      fontWeight: "bold"
   },
   labelForm: {
      fontWeight: "bold",
      fontSize: hp("2.2%"),
      letterSpacing: 0.5
   },
   inputForm: {
      width: "100%",
      height: 40,
      borderRadius: 10,
      borderWidth: 1,
      marginTop: 10,
      backgroundColor: "#C4C4C4",
      borderColor: "#C4C4C4",
      color: "#000",
      paddingHorizontal: 20
   },
   formPassword: {
      marginTop: 20
   },
   formBtnLogin: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      marginBottom: 10,
   },
   btnLogin: {
      width: "100%",
      height: 40,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      backgroundColor: "#E33B3B"
   },
   btnScan: {
      width: 40,
      height: 40,
      borderRadius: 10,
      backgroundColor: "#E33B3B",
      justifyContent: "center",
      alignItems: "center",
   },
   controlForm: {
      width: "100%",
      marginTop: "20%",
      alignItems: "center"
   },
   btnLoginView: {
      width: "75%"
   },
   btnScanView: {
      width: "20%",
      justifyContent: "center",
      alignItems: "center",
   },
   imageScan: {
      width: 20,
      height: 20
   },
   labelLogin: {
      fontWeight: "bold",
      color: "#fff"
   },
   btnRegister: {
      width: "100%",
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      backgroundColor: "#E33B3B"
   },
   btnRegisterView: {
      width: "100%",
      marginTop: 10
   },
   labelRegiter: {
      color: "#fff",
      fontWeight: "bold"
   },
   textLine: {
      color: "#95a5a6"
   },
   QRcode: {
      position: "absolute",
      top: 0,
      left: 0
   },
   headerQR: {
      width: "100%",
      height: 40,
      backgroundColor: "#1abc9c00",
   },
   // cameraQR: {
   //    width: "100%",
   //    height: hp("50%")
   // },
   markerQR: {
      borderColor: "#fff",
      width: wp("60%"),
      height: hp("35%")
   },
   topContentQR: {
      width: "100%",
      height: 40,
      backgroundColor: "#2d3436",
      alignItems: "flex-end",
      justifyContent: "center"
   },
   btnCloseQR: {
      width: 50,
      height: 40,
      justifyContent: "center",
      alignItems: "center"
   }
})

export default StylesLoginScreen