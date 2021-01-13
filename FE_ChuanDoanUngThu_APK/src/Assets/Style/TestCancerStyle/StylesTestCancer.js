import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const StylesTestCancer = StyleSheet.create({
   container: {
      backgroundColor: "#fff"
   },
   textEmpty: {
      color: "#e74c3c",
      position: "absolute",
      bottom: "18%",
      right: "5%"
   },
   iconQR: {
      width: 20,
      height: 20
   },
   header: {
      width: '100%',
      height: 70,
      flexDirection: "row",
      justifyContent: "space-between"
   },
   btnQR: {
      position: "absolute",
      top: "2%",
      right: "20%"
   },
   titleHeader: {
      color: "#2d3436",
      fontSize: 25,
      marginTop: 20,
      marginLeft: 20,
      fontWeight: "bold"
   },
   btnSaveView: {
      marginTop: 14,
      marginRight: 10,
      width: 50,
      height: 40,
      borderRadius: 10,
      backgroundColor: "#00cec9",
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#fff"
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
      color: "#fff",
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
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      borderColor: "#ecf0f1"
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
   },
   ModalFailQR: {
      width: "80%",
      height: 120,
      backgroundColor: "#fff",
      borderRadius: 10,
      alignItems: "center"
   },
   titleContent: {
      fontSize: wp("4%"),
      marginTop: 10
   },
   btnOK: {
      width: 200,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10
   },
   textUseful: {
      position: "absolute",
      bottom: "7%",
      fontStyle: "italic"
   },
   markerStyle: {
      width: 180,
      height: 180,
      justifyContent: "space-between"
   },
   line1: {
      width: 30,
      height: 30,
      borderTopWidth: 4,
      borderLeftWidth: 4,
      borderColor: "#fff",
      borderTopLeftRadius: 10
   },
   line2: {
      width: 30,
      height: 30,
      borderTopWidth: 4,
      borderRightWidth: 4,
      borderColor: "#fff",
      borderTopRightRadius: 10
   },
   linefirst: {
      flexDirection: "row",
      justifyContent: "space-between"
   },
   line3: {
      width: 30,
      height: 30,
      borderBottomWidth: 4,
      borderLeftWidth: 4,
      borderColor: "#fff",
      borderBottomLeftRadius: 10
   },
   line4: {
      width: 30,
      height: 30,
      borderBottomWidth: 4,
      borderRightWidth: 4,
      borderColor: "#fff",
      borderBottomRightRadius: 10
   }
})
export default StylesTestCancer