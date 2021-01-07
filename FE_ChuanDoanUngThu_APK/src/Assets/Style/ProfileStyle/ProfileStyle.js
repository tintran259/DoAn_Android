import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const StylesProfile = StyleSheet.create({
   container: {
      backgroundColor: "#fff",
      marginTop: "7%"
   },
   header: {
      width: '100%',
      height: 100,
      backgroundColor: "#fff",
      // justifyContent: "center",
      alignItems: "center",
      flexDirection: "row"
   },
   titleHeader: {
      color: "#000",
      fontSize: 20,
      fontWeight: 600,
      fontFamily: "Rokkitt",
      marginLeft: 20
   },
   body: {
      width: "100%",
      padding: 10
   },
   ViewAvatar: {
      width: "100%",
      height: hp("30%"),
      justifyContent: "center",
      alignItems: "center"
   },
   avatarUser: {
      width: 150,
      height: 150,
      borderRadius: 150,
      borderWidth: 1,
      borderColor: "#dfe6e9"
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
      fontFamily: "Rokkitt",
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
      top: 0,
      right: "2%",
   },
   Modal: {
      width: "100%",
      height: 190,
      backgroundColor: "#fff",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15
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
   }
})
export default StylesProfile
