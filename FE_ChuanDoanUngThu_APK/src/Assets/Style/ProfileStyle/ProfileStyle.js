import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const StylesProfile = StyleSheet.create({
   container: {
      backgroundColor: "#fff",
      marginTop: "7%"
   },
   header: {
      width: '100%',
      height: 40,
      backgroundColor: "#E33B3B",
      justifyContent: "center",
      alignItems: "center"
   },
   titleHeader: {
      color: "#fff",
      fontSize: 15,
      fontWeight: "bold"
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
      marginRight: 5
   },
   labeText: {
      color: "#2d3436",
      fontSize: hp("2.2%"),
   },
})
export default StylesProfile
