import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const StylesTestCancer = StyleSheet.create({
   container: {
      backgroundColor: "#fff"
   },
   textEmpty: {
      color: "#d63031",
      position: "absolute",
      bottom: "10%",
      right: "2%"
   },
   iconQR: {
      width: 20,
      height: 20
   },
   header: {
      width: '100%',
      height: 70,
   },
   btnQR: {
      position: "absolute",
      top: "2%",
      right: "20%"
   },
   titleHeader: {
      color: "#2d3436",
      fontSize: 25,
      fontWeight: "800",
      marginTop: 20,
      marginLeft: 20,
      fontFamily: "Rokkitt"
   },
   btnSaveView: {
      position: "absolute",
      right: "2%",
      top: 20,
      width: 80,
      height: 40,
   },
   btnShowQr: {
      width: 40,
      height: 40,
      backgroundColor: "#00cec9",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center"
   },
   btnSave: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
   },
   textBtnSave: {
      color: "#3498db",
      fontWeight: "800"
   },
   body: {
      marginHorizontal: 20,
      marginBottom: "25%"
   },
   titleFormItem: {
      fontWeight: "bold"
   },
   ContentBody: {
      marginTop: 20,
      width: "50%"
   },
   input: {
      borderBottomWidth: 1,
      borderBottomColor: "#bdc3c7",
      color: "#2d3436"
   },
   itemForm: {
      marginTop: 10,
   },
   ViewModal: {
      width: "100%",
      height: 350,
      borderRadius: 15,
      backgroundColor: "#fff",
      paddingHorizontal: 20,
      justifyContent: "space-between"
   },
   titleHeaderModal: {
      textAlign: "center",
      fontSize: wp("5%"),
      fontWeight: "bold",
      marginTop: 10,
      color: "#00cec9"
   },
   textName: {
      fontWeight: "bold",
      fontSize: wp("4.5%"),
      color: "#d63031",
      width: "100%"
   },
   textRe: {
      fontSize: wp("4%"),
      width: "100%",
      marginTop: 10,
      fontWeight: "700",
      color: "#2d3436"
   },
   viewConent: {
      width: "10%",
      marginTop: 30,
      flexDirection: "row",
      position: "absolute",
      top: "10%",
      left: "10%"
   },
   ViewBtn: {
      flexDirection: "row",
      width: "100%",
      height: 50,
      justifyContent: "space-around",
      marginBottom: 10
   },
   btn: {
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
   },
   textBtnOut: {
      fontWeight: "bold",
      fontSize: 16,
      color: "#2d3436"
   },
   iamgeModal: {
      width: 170,
      height: 200,
      marginTop: 20,
   },
   bodyModal: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
   }
})
export default StylesTestCancer