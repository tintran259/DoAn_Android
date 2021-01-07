import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const StylesProfile = StyleSheet.create({
   container: {
      backgroundColor: "#fff",
      marginTop: "7%"
   },
   icon: {
      width: 20,
      height: 20,
      marginRight: 30,
   },
   titleaccout: {
      fontWeight: "bold",
      color: "#2d3436",
      marginBottom: 10
   },
   phoneHotline: {
      marginLeft: 50,
      color: "#3498db"
   },
   space: {
      width: "100%",
      height: 10,
      backgroundColor: "#ecf0f1"
   },
   textLabel: {
      fontWeight: "bold",
      fontSize: 18,
      color: "#2d3436"
   },
   iconRight: {
      position: "absolute",
      right: "2%"
   },
   titleText: {
      fontWeight: "600",
      color: "#2d3436"
   },
   hotline: {
      flexDirection: "row"
   },
   textSetting: {
      fontSize: 13,
      color: "#2d3436"
   },
   viewName: {
      width: "70%",
      height: "100%",
      marginLeft: 20,
      justifyContent: "space-around"
   },
   item: {
      width: "100%",
      height: 50,
      borderBottomWidth: 0.5,
      borderBottomColor: "#ecf0f1",
      flexDirection: "row",
      alignItems: "center",
   },
   header: {
      width: '100%',
      height: 80,
      backgroundColor: "#fff",
      alignItems: "center",
      flexDirection: "row"
   },
   titleinfor: {
      fontSize: 14,
      color: "#2d3436",
      fontWeight: "bold",
   },
   label: {
      position: "absolute",
      left: 100
   },
   itemInfor: {
      width: "100%",
      height: 75,
      alignItems: "center",
      flexDirection: "row",
      padding: 10,
      marginBottom: 30,
   },
   titleHeader: {
      color: "#000",
      fontSize: 25,
      fontWeight: "900",
      fontFamily: "Rokkitt",
      marginLeft: 20
   },
   body: {
      width: "100%",
      paddingHorizontal: 20,
   },
   accoutSetting: {
      width: "100%",
      padding: 20
   },
   ViewLogout: {
      width: "100%",
      paddingHorizontal: 20
   },
   ViewAvatar: {
      width: "20%",
      height: "100%",
   },
   avatarUser: {
      width: 60,
      height: 60,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: "#bdc3c7"
   },
   bodyProfile: {
      width: "100%",
      height: hp("50%")
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
      marginRight: 5,
   },
   labeText: {
      color: "#2d3436",
      fontSize: hp("2.2%"),
   },
   btnDots: {
      width: 50,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
   },
   viewBtnDots: {
      position: "absolute",
      top: "30%",
      right: "2%",
   },
   Modal: {
      width: "90%",
      height: 150,
      backgroundColor: "#fff",
      borderRadius: 10,
      alignItems: "center"
   },
   headerModal: {
      width: "100%",
      height: 40,
      justifyContent: "center",
      alignItems: "center"
   },
   labelHeaderModal: {
      fontWeight: "bold",
      color: "#2d3436"
   },
   controlModal: {
      width: "100%",
      paddingHorizontal: 20
   },
   btnModal: {
      width: "100%",
      height: 40,
      marginBottom: 5,
      paddingHorizontal: 20,
      borderBottomWidth: 0.5,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      borderBottomColor: "#bdc3c7"
   },
   labelBtnModal: {
      color: "#2d3436"
   },
   iconModal: {
      marginRight: 10
   },
   titleModal: {
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 10
   },
   inputModal: {
      width: "90%",
      height: 40,
      borderWidth: 1,
      borderRadius: 10,
      marginTop: 20,
      paddingHorizontal: 20,
      borderColor: "#bdc3c7"
   },
   footerModal: {
      width: "100%",
      height: 50,
      flexDirection: "row",
      marginTop: 10,
      paddingHorizontal: 20
   },
   btn: {
      width: "50%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      borderTopWidth: 0.5,
      borderTopColor: "#bdc3c7"
   },
   textBtnOk: {
      color: "#3498db"
   }
})
export default StylesProfile
