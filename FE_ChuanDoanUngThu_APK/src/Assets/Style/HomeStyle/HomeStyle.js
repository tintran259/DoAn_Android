import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const StylesHomeScreen = StyleSheet.create({
   container: {
      backgroundColor: "#E33B3B",
      marginTop: "7%"
   },
   header: {
      width: "100%",
      height: 70,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
   },
   btnIcon: {
      width: 60,
      height: 50,
      backgroundColor: "#E33B3B",
      justifyContent: "flex-start",
      alignItems: "center"
   },
   textControl: {
      fontWeight: "bold",
      color: "#2d3436"
   },
   notification: {
      width: "100%",
      height: 40,
      marginBottom: 10,
      flexDirection: "row",
      justifyContent: "flex-end"
   },
   iconBell: {
      fontSize: 20,
      color: "#fff"
   },
   ViewUser: {
      width: "100%",
      height: "100%",
      backgroundColor: "#f55252",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#f37079",
      flexDirection: "row"
   },
   avatarUser: {
      width: "30%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
   },
   iconPharmacy: {
      width: 30,
      height: 30
   },
   Control: {
      width: "100%",
      height: 210,
      marginTop: 5
   },
   inforUser: {
      width: "60%",
      height: "100%",
      padding: 10,
      justifyContent: "space-around"
   },
   ViewCard: {
      width: "48%",
      height: 90,
   },
   card: {
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      justifyContent: "space-around",
   },
   bannerView: {
      width: "100%",
      height: 180,
      backgroundColor: "red"
   },
   textName: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 17
   },
   btnProfile: {
      width: "100%",
      height: "100%",
      justifyContent: "center"
   },
   viewBtn: {
      width: "10%",
      height: "100%",
   },
   textAddress: {
      color: "#fff"
   },
   avatarImage: {
      width: 45,
      height: 45,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: "#f37079",
   },
   body: {
      width: "100%",
      height: hp("90%"),
      backgroundColor: "#E33B3B",
      marginTop: 10
   },
   card1: {
      width: "100%",
      height: 100,
      flexDirection: "row",
      justifyContent: "space-around",
   },
   bodyContent: {
      marginTop: 20,
      width: "100%",
      height: hp("68%"),
      backgroundColor: "#dcdde1",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      padding: 10
   },
   iconRight: {
      color: "#ecf0f1",
      fontSize: 17
   },
})

export default StylesHomeScreen