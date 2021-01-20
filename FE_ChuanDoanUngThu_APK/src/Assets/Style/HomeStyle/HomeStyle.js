import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const StylesHomeScreen = StyleSheet.create({
   container: {
      backgroundColor: "#dcdde1",
      flex: 1,
   },
   bodyModal: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 245
   },
   LeftContent: {
      width: "50%",
      marginLeft: 20
   },
   iconRight: {
      fontSize: 16,
      position: "absolute",
      right: "2%"
   },
   nameLocation: {
      color: "#2d3436",
      marginLeft: 10
   },
   btnLocation: {
      flexDirection: "row",
      width: 150,
      height: 30,
      backgroundColor: "#ffffff",
      borderRadius: 10,
      alignItems: "center",
      marginLeft: 10,
      borderColor: "#ffffff",
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
      backgroundColor: "#00bab6",
      paddingTop: 10,
      marginBottom: 20
   },
   btnIcon: {
      width: 60,
      height: 40,
      backgroundColor: "#00bab6",
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
      backgroundColor: "#00bab6",
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
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
   },
   bannerView: {
      width: "100%",
      height: 180,
      backgroundColor: "red",
      borderRadius: 10,
      backgroundColor: "#c7ecee",
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
      backgroundColor: "#00bab6",
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
      backgroundColor: "#c7ecee",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      padding: 6,
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
   },
   iconNotifi: {
      position: "absolute",
      width: 10,
      height: 10,
      backgroundColor: "#e74c3c",
      borderRadius: 10,
      right: "5%",
      top: "20%"
   },
   ModalNotification: {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      marginTop: "5%",
   },
   ModalNofi: {
      width: "90%",
      height: 150,
      backgroundColor: "#ffff",
      borderRadius: 7,
      padding: 10
   },
   iconPo: {
      width: 10,
      height: 10,
      position: "absolute",
      zIndex: 200,
      right: "7.2%",
      top: "1%"
   },
   titleNotification: {
      fontWeight: "bold"
   },
   contentNotification: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
   },
   textLabel: {
      color: "#2d3436",
      fontSize: 12,
      marginTop: 10
   },
   ViewDoctor: {
      width: "100%",
      height: 300,
      paddingLeft: 7
   },
   ModalDoctorDetail: {
      width: "95%",
      height: 320,
      borderRadius: 10,
      backgroundColor: "#fff",
      alignItems: "center",
      padding: 10
   },
   imgeDoctorDetail: {
      width: 120,
      height: "100%",
      marginTop: 10
   },
   itemText: {
      width: "100%",
      flexDirection: "column",
      marginTop: 10
   },
   nameText: {
      width: "80%",
   },
   titleText: {
      fontWeight: "bold",
      color: "#2d3436",
      textDecorationLine: 'underline',
   },
   footerModal: {
      width: "100%",
      height: 80,
      marginTop: 20
   },
   btnContact: {
      width: "100%",
      height: 35,
      backgroundColor: "#00b894",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
   },
   iconClose: {
      fontSize: 20,
      position: "absolute",
      right: "2%",
      top: "2%"
   },
   hospitalCart: {
      width: "100%",
      height: 150,
      borderWidth: 1,
      marginBottom: 10,
      borderRadius: 10,
      backgroundColor: "#fff",
      borderColor: "#f1f2f6"
   },
   ViewHoispital: {
      width: "100%",
      height: 200,
      alignItems: "flex-end",
      marginBottom: 15
   },
   ViewBackgroud: {
      width: "50%",
      height: 150,
      position: "absolute",
      top: "12%",
      left: "1%",
      borderRadius: 10,
      zIndex: 200,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
   },
   imageHos: {
      width: "100%",
      height: "100%",
      borderRadius: 10
   },
   ViewContent: {
      width: "60%",
      height: "100%",
      backgroundColor: "#fff",
      borderRadius: 10,
      paddingLeft: "14%",
      paddingTop: 30,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
   },
   titleTextHospital: {
      fontWeight: "bold",
      color: "#2d3436",
      marginBottom: 10
   },
   itemTextHos: {
      marginBottom: 10
   },
   titleHos: {
      fontWeight: "bold",
      color: "#2d3436"
   },
   btnLocationDoctor: {
      position: "absolute",
      right: "2%",
      top: "70%",
      width: 40,
      height: 40,
      borderRadius: 100,
      backgroundColor: "#3498db",
      justifyContent: "center",
      alignItems: "center"
   }
})

export default StylesHomeScreen