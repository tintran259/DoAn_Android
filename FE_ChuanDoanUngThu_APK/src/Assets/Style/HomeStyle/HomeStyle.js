import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const StylesHomeScreen = StyleSheet.create({
   container: {
      backgroundColor: "#fff",
      marginTop: "7%"
   },
   header: {
      width: "100%",
      height: 40,
      backgroundColor: "#E33B3B",
      justifyContent: "center",
      alignItems: "center"
   },
   body: {
      width: "100%",
      padding: 10
   },
   titleHeader: {
      color: "#fff",
      fontSize: 15,
      fontWeight: "bold"
   },
   imageBanner: {
      width: "100%",
      height: 150,
      borderRadius: 10
   },
   labelUserinfor: {
      width: "100%",
      height: 40,
      borderBottomWidth: 1,
      borderColor: "#E33B3B",
      position: "relative",
   },
   textUserinfor: {
      textAlign: "center",
      padding: 15,
      backgroundColor: "#fff",
      color: "#E33B3B",
      fontWeight: "bold",
      fontSize: hp("2.3%"),
      position: "absolute",
      top: 10,
      left: "29%"
   },
   textHistory: {
      textAlign: "center",
      padding: 15,
      backgroundColor: "#fff",
      color: "#E33B3B",
      fontWeight: "bold",
      fontSize: hp("2.3%"),
      position: "absolute",
      top: 10,
      left: "38%"
   },
   inforUserView: {
      marginTop: 20
   },
   textInfor: {
      width: "100%",
      flexDirection: "row",
      marginBottom: 15
   },
   title: {
      color: "#636e72",
      fontWeight: "bold",
      fontSize: hp("2.3%"),
      letterSpacing: 0.5,
      marginRight: 5
   },
   labeText: {
      color: "#2d3436",
      fontSize: hp("2.2%"),
   },
   textInforLeft: {
      flexDirection: "row",
      marginRight: 50
   },
   textInforRight: {
      flexDirection: "row"
   },
   cardHistory: {
      width: "100%",
      height: 200,
      borderRadius: 10,
      marginBottom: 10,
      // borderWidth: 1,
      // borderColor: "#E33B3B",
      borderRadius: 15,
      backgroundColor: "#ecf0f1",
      padding: 10
   },
   listHistory: {
      marginTop: 20,
      width: "100%"
   },
   date: {
      flexDirection: "row",
      width: 70,
      alignItems: "flex-end",
      marginBottom: 5
   },
   dateTime: {
      width: "100%",
      height: 40,
      alignItems: "flex-end"
   },
   textdate: {
      fontWeight: "bold",
      fontSize: hp("1.9%"),
      color: "#636e72",
      marginRight: 10
   },
   dateLabel: {
      fontSize: hp("1.5%"),
      color: "#636e72"
   },
   EmptyView: {
      width: "100%",
      height: 200,
      justifyContent: "center",
      alignItems: "center",
   },
   textEmpty: {
      color: "#636e72"
   }
})

export default StylesHomeScreen