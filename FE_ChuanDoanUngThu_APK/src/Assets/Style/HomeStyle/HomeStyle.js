import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const StylesHomeScreen = StyleSheet.create({
   container: {
      backgroundColor: "#dcdde1",
      flex: 1,
   },
   iconRight: {
      fontSize: 16,
      position: "absolute",
      right: "2%"
   },
   nameLocation: {
      color: "#2d3436",
      marginLeft: 20
   },
   btnLocation: {
      flexDirection: "row",
      width: 180,
      height: 35,
      backgroundColor: "#fff",
      borderRadius: 10,
      alignItems: "center",
      marginLeft: 10,
      borderColor: "#ecf0f1",
      borderWidth: 1,
      opacity: 0.9,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
   },
   iamgeLocation: {
      width: 20,
      height: 20,
      marginLeft: 10
   },
   logo: {
      width: 200,
      height: 40
   },
   header: {
      width: "100%",
      height: 90,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
      backgroundColor: "#00cec9",
      paddingTop: 10,
      marginBottom: 20
   },
   btnIcon: {
      width: 60,
      height: 40,
      backgroundColor: "#00cec9",
      justifyContent: "center",
      alignItems: "center"
   },
   textControl: {
      fontWeight: "bold",
      color: "#fff"
   },
   notification: {
      width: "100%",
      height: 40,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#00cec9",
      marginTop: 10
   },
   iconBell: {
      fontSize: 20,
      color: "#fff"
   },
   ViewUser: {
      width: "100%",
      height: "90%",
      backgroundColor: "#fff",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#ecf0f1",
      flexDirection: "row",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,

      elevation: 14,
   },
   avatarUser: {
      width: "20%",
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
      width: "70%",
      height: "100%",
      padding: 10,
      justifyContent: "space-around"
   },
   ViewCard: {
      width: "47%",
      height: 90,
   },
   card: {
      width: "100%",
      height: "100%",
      backgroundColor: "#3498db",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      justifyContent: "space-around",
   },
   bannerView: {
      width: "100%",
      height: 180,
      backgroundColor: "red",
      borderRadius: 10,
      backgroundColor: "#ecf0f1",
      paddingHorizontal: 5
   },
   textName: {
      color: "#2d3436",
      fontWeight: "bold",
      fontSize: 17,
      textTransform: "capitalize"
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
      color: "#2d3436",
      textTransform: "capitalize"
   },
   avatarImage: {
      width: 45,
      height: 45,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: "#ecf0f1",
   },
   body: {
      flex: 1,
      backgroundColor: "#00cec9",
   },
   card1: {
      width: "100%",
      height: 100,
      flexDirection: "row",
      justifyContent: "space-around",
   },
   bodyContent: {
      width: "100%",
      height: "100%",
      backgroundColor: "#f1f2f6",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      padding: 6
   },
   iconRight: {
      color: "#ecf0f1",
      fontSize: 17
   },
   titleDanhSach: {
      fontSize: wp("4%"),
      marginTop: 20,
      marginBottom: 10,
      fontWeight: "bold"
   },
   ModalLocation: {
      width: "100%",
      height: 350,
      backgroundColor: "#fff",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      alignItems: "center",
      paddingHorizontal: 20
   },
   locationModal: {
      width: 30,
      height: 30,
      marginTop: 10
   },
   contentModal: {
      textAlign: "center",
      fontSize: 17,
      marginTop: 20,
      color: "#2d3436"
   },
   btnSelectLocation: {
      width: "100%",
      height: 40,
      borderBottomWidth: 0.5,
      justifyContent: "center",
      alignItems: "center",
      borderBottomColor: "#ecf0f1",
      marginBottom: 5
   },
   LocationName: {
      width: "100%",
      height: 200,
      marginTop: 20
   },
   textNameLocation: {
      fontSize: 16,
      color: "#2d3436",
      fontWeight: "bold"
   }
})

export default StylesHomeScreen