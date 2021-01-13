import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StylesHisToryScreen = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center"
   },
   textSetting: {
      marginTop: 10,
      fontSize: 15,
      color: "#2d3436"
   },
   imageSetting: {
      width: 200,
      height: 200
   },
   header: {
      width: "100%",
      height: 90
   },
   btnBack: {
      width: 60,
      height: 50,
      justifyContent: "center",
      alignItems: "center"
   },
   titleHeader: {
      marginLeft: 20,
      fontWeight: "bold",
      fontSize: 19,
      color: "#2d3436"
   },
   timeStamp: {
      fontWeight: "bold",
      marginRight: "5%"
   },
   headerContent: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end"
   },
   viewTest: {
      width: "100%",
      height: 500
   },
   titleBS: {
      fontWeight: "bold",
      fontSize: 19,
      color: "#2d3436"
   }
})


export { StylesHisToryScreen }