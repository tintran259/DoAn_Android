import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StylesCVScreen = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
   },
   header: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: 50,
      backgroundColor: "#E33B3B"
   },
   btnBack: {
      width: 60,
      height: 40,
      justifyContent: "center",
      position: "absolute",
      top: 0,
      left: "2%"
   },
   titleHeader: {
      fontWeight: "bold",
      fontSize: wp("5%"),
      color: "#fff"
   },
   body: {
      width: "100%",
      height: "100%",
      backgroundColor: "#E33B3B",
   },
   bodyHeader: {
      width: "100%",
      height: "30%",
      paddingHorizontal: 20
   },
   bodyContent: {
      width: "100%",
      height: "70%",
      backgroundColor: "#f1f2f6",
   },
   inforView: {
      width: "100%",
      height: 150,
      position: "absolute",
      top: "-15%",
      paddingHorizontal: 20,
      zIndex: 200
   },
   inforContent: {
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      borderRadius: 15,
      borderColor: "#ecf0f1"
   },
   ViewUser: {
      width: "100%",
      height: "65%",
      flexDirection: "row",
      alignItems: "center",
   },
   avatarUser: {
      width: 70,
      height: 70,
      borderRadius: 100,
      borderColor: "#fff"
   },
   inforUser: {
      width: "80%",
      marginLeft: 20,
   },
   nameUser: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: wp("5%")
   },
   ageUser: {
      color: "#fff",
      marginTop: 10
   },
   inforHight: {
      width: "100%",
      height: "57%",
      flexDirection: "row",
      justifyContent: "space-around",
   },
   BtnUpdate: {
      width: "100%",
      height: "35%",
      alignItems: "center"
   },
   itemHight: {
      alignItems: "center",
      justifyContent: "space-around"
   },
   textItem: {
      fontWeight: "bold",
      fontSize: wp("4%"),
      marginTop: 10
   },
   numberHight: {
      fontWeight: "bold",
      marginBottom: 10
   },
   btnUpdate: {
      width: "80%",
      height: 45,
      borderRadius: 15,
      borderColor: "#ecf0f1",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#82ccddad"
   },
   textBtnUpdate: {
      color: "#3498db",
      fontWeight: "bold"
   },
   ViewHistory: {
      marginTop: 120,
      paddingHorizontal: 20
   },
   titleViewHistory: {
      fontFamily: 'Quicksand',
      fontSize: wp("5%"),
      fontWeight: "bold"
   },
   emptyHistory: {
      paddingHorizontal: 20,
      width: "100%",
      marginTop: 20,
      marginBottom: 100
   },
   ViewEmpty: {
      width: "100%",
      height: 200,
      backgroundColor: "#fff",
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20
   },
   iconEmpty: {
      width: 40,
      height: 40
   },
   titleEmpty: {
      color: '#2d3436',
      fontWeight: "bold",
      marginTop: 10,
      fontFamily: "Quicksand"
   },
   contentEmpty: {
      textAlign: "center",
      color: '#636e72',
      marginTop: 5
   }
})


export { StylesCVScreen }