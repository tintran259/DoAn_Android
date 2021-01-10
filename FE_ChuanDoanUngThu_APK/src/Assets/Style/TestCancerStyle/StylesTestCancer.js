import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const StylesTestCancer = StyleSheet.create({
   container: {
      backgroundColor: "#fff"
   },
   header: {
      width: '100%',
      height: 70,
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
   btnSave: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
   },
   textBtnSave: {
      color: "#3498db",
      fontWeight: "800"
   },
   body: {
      marginHorizontal: 20
   },
   titleFormItem: {
      fontWeight: "bold"
   },
   input: {
      borderBottomWidth: 1,
      borderBottomColor: "#bdc3c7",
      color: "#2d3436"
   },
   itemForm: {
      marginTop: 10,
   }
})
export default StylesTestCancer