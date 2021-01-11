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
   logo2: {
      width: 140,
      height: 80
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
      borderBottomWidth: 1,
      marginTop: 10,
      borderBottomColor: "#00cec9",
      color: "#2d3436",
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
      backgroundColor: "#00cec9"
   },
   btnScan: {
      width: 40,
      height: 40,
      borderRadius: 10,
      backgroundColor: "#00cec9",
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
      backgroundColor: "#00cec9"
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
   },
   validate: {
      position: "absolute",
      top: "100%",
      right: 0,
      color: "#e74c3c",
      fontWeight: "bold",
      fontSize: 13
   },
   toastFail: {
      width: 200,
      height: 60,
      backgroundColor: "#e74c3c",
      borderColor: "#FFF",
      position: "absolute",
      borderWidth: 1,
      right: 0,
      top: "5%",
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
   },
   toastSccess: {
      width: 200,
      height: 60,
      backgroundColor: "#2ecc71",
      borderColor: "#FFF",
      borderWidth: 1,
      position: "absolute",
      right: 0,
      top: "5%",
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
   },
   iconFail: {
      fontSize: 20,
      color: "#fff",
      marginLeft: 10
   },
   textFail: {
      width: 150,
      textAlign: "center",
      color: "#fff",
      fontWeight: "bold"
   }
})

export default StylesLoginScreen