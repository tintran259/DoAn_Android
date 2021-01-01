import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StylesRegister = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#FFFFFF"
   },
   header: {
      width: "100%",
      height: hp("8%"),
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderBottomWidth: 0.5,
      borderBottomColor: "#E33B3B"
   },
   titleHeader: {
      height: 40,
      flexDirection: "row",
      alignItems: "center"
   },
   logo: {
      width: 30,
      height: 30,
      marginRight: 10
   },
   labelHeader: {
      fontSize: 17,
      color: "#E33B3B",
      fontWeight: "bold"
   },
   btnBack: {
      width: 50,
      height: 50,
      justifyContent: "center",
      alignItems: "center",

   },
   btnBackView: {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 2
   },
   btnSubmit: {
      position: "absolute",
      top: 0,
      right: 0,
      zIndex: 2
   },
   formRegister: {
      padding: 10,
      width: "100%",
      marginBottom: 65,
      marginTop: "3%"
   },
   labelFormItem: {
      fontSize: hp("2.25%"),
      fontWeight: "bold"
   },
   input: {
      width: "100%",
      height: 40,
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: "#C4C4C4",
      borderColor: "#C4C4C4",
      marginTop: 10,
      paddingHorizontal: 20
   },
   inputRow: {
      width: "100%",
      height: 40,
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: "#C4C4C4",
      borderColor: "#C4C4C4",
      marginTop: 10,
      paddingHorizontal: 20
   },
   formItem: {
      marginBottom: 10
   },
   formItemRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: 10
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
   }
})

export default StylesRegister