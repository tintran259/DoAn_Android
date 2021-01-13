import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StylesRegister = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff"
   },
   header: {
      width: "100%",
      height: 80
   },
   titleHeader: {
      marginLeft: 10,
   },
   labelHeader: {
      fontSize: 20,
      color: "#2d3436",
      fontWeight: "bold"
   },
   btnBack: {
      width: 50,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
   },
   btnSave: {
      width: 50,
      height: 35,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      borderWidth: 0.5,
      marginTop: 10,
      backgroundColor: "#00cec9",
      borderColor: "#ecf0f1"
   },

   btnSubmit: {
      position: "absolute",
      right: "2%",
      zIndex: 2
   },
   formRegister: {
      padding: 10,
      width: "100%",
      marginTop: "3%",
   },
   labelFormItem: {
      fontSize: hp("2.25%"),
      fontWeight: "bold"
   },
   input: {
      width: "100%",
      height: 40,
      borderBottomWidth: 1,
      borderRadius: 10,
      backgroundColor: "#fff",
      borderColor: "#ecf0f1",
      marginTop: 10,
      paddingHorizontal: 20
   },
   inputRow: {
      width: "100%",
      height: 40,
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: "#fff",
      borderColor: "#ecf0f1",
      marginTop: 10,
      paddingHorizontal: 20
   },
   formItem: {
      marginBottom: hp("3%"),
      padding: 10,
      borderWidth: 1,
      borderColor: "#ecf0f1",
      borderRadius: 10
   },
   formItemRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: hp("3%")
   },
   formRowLeft: {
      width: "70%",
   },
   formRowRight: {
      width: "26%",
      alignItems: "center"
   },
   modal: {
      width: "80%",
      height: 130,
      backgroundColor: "#fff",
      borderRadius: 10,
      alignItems: "center"
   },
   headerModal: {
      width: "100%",
      height: 40,
      justifyContent: "center",
      alignItems: "center",
   },
   labelHederModal: {
      fontWeight: "bold",
      letterSpacing: 1,
      fontSize: 16
   },
   content: {
      width: "100%",
      height: 40,
      justifyContent: "center",
      alignItems: "center",
   },
   footer: {
      width: "100%",
      height: 45,
   },
   btnOk: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
   },
   textValidate: {
      fontSize: 13,
      fontWeight: "bold",
      position: "absolute",
      top: "85%",
      right: "5%",
      color: "#e74c3c"
   },
   btnBirthDay: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
   },
   textBirthday: {
      color: "#2d3436"
   },
   labelSave: {
      color: "#fff",
      fontWeight: "bold"
   }
})

export default StylesRegister