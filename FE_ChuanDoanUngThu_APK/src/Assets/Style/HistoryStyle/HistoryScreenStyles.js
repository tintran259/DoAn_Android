import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StylesHisToryScreen = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
   },
   headerHistory: {
      height: 70,
      width: "100%",
      paddingLeft: 20,
      justifyContent: "space-around"
   },
   bodyContent: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
   },
   titleHeaderHst: {
      fontWeight: "bold",
      fontSize: 22,
      color: "#2d3436"
   },
   btnBackHistory: {
      width: 70,
      height: 40,
      marginTop: 10
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
      // height: 500
      height: 600
   },
   titleBS: {
      fontWeight: "bold",
      fontSize: 19,
      color: "#2d3436"
   },
   cardDoctor: {
      width: "100%",
      height: 150,
      backgroundColor: "#fff",
      marginTop: 20,
      borderRadius: 10,
      padding: 10
   },
   avatarBS: {
      width: 80,
      height: 80,
      borderRadius: 80,
   },
   itemText: {
      flexDirection: "row",
      marginBottom: 5,
      width: "90%"
   },
   titleNmae: {
      fontWeight: "bold",
      color: "#2d3436",
      marginLeft: 10,
      marginRight: 5
   },
   headerCard: {
      flexDirection: "row"
   },
   bottom: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "flex-end",
      marginTop: 5
   },
   btnContact: {
      marginRight: 10,
      width: 150,
      height: 35,
      backgroundColor: "#00cec9",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center"
   },
   textContact: {
      color: "#fff",
      fontWeight: "bold"
   },
   cardHis: {
      width: "100%",
      height: 80,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      borderWidth: 1,
      marginTop: 10,
      marginBottom: 10,
      borderColor: "#00cec9"
   },
   textHis: {
      fontStyle: "italic",
      fontSize: 17,
      textAlign: "center"
   }
})


export { StylesHisToryScreen }