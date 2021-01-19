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
      height: "8%",
      backgroundColor: "#00bab6"
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
      backgroundColor: "#00bab6",
   },
   bodyHeader: {
      width: "100%",
      height: 200,
      paddingHorizontal: 20,
   },
   bodyContent: {
      width: "100%",
      height: "100%",
      backgroundColor: "#f1f2f6",
   },
   inforView: {
      width: "100%",
      height: 150,
      position: "absolute",
      top: -70,
      paddingHorizontal: 20,
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
      marginTop: 10,
      color: "#2d3436"
   },
   numberHight: {
      fontWeight: "bold",
      marginBottom: 10,
      color: "#2d3436"
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
      width: "100%",
      marginTop: 120,
      paddingBottom: 50,
      paddingHorizontal: 20,
   },
   titleViewHistory: {
      fontFamily: 'Quicksand',
      fontSize: wp("5%"),
      fontWeight: "bold"
   },
   emptyHistory: {
      width: "100%",
      marginTop: 20,
      marginBottom: 200
   },
   ViewEmpty: {
      width: "100%",
      height: hp("40%"),
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
   },
   cardItem: {
      width: "100%",
      backgroundColor: "#fff",
      marginTop: 20,
      borderRadius: 10,
      padding: 10
   },
   timeHistory: {
      width: "100%",
      height: 40,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
   },
   textTime: {
      fontWeight: "bold",
      fontSize: 13,
      marginLeft: 5
   },
   timeTest: {
      marginRight: "5%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 20
   },
   ModalUpdate: {
      width: "100%",
      height: 250,
      backgroundColor: "#fff",
      borderRadius: 10,
      paddingHorizontal: 10
   },
   titleModalHeader: {
      fontWeight: "bold",
      color: "#2d3436",
      fontSize: wp("4%"),
      textAlign: "center",
      marginTop: 10
   },
   viewControl: {
      width: "100%",
      height: "100%",
      alignItems: "center"
   },
   itemControl: {
      flexDirection: "row",
      marginBottom: 5
   },
   inputControl: {
      width: 50,
      borderBottomWidth: 1,
      height: 40,
      position: "absolute",
      left: "60%",
      borderBottomColor: "#bdc3c7"
   },
   bodyModdal: {
      width: "100%",
      height: 160,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
   },
   viewControl: {
      width: "45%",
   },
   imgModal: {
      width: "40%",
      height: 150
   },
   ViewFooter: {
      width: "100%",
      height: 40,
      justifyContent: "center",
      alignItems: "center"
   },
   btnUpdateModal: {
      width: "70%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#00bab6",
      borderWidth: 1,
      borderColor: "#81ecec",
      borderRadius: 15
   },
   textBtnModal: {
      color: "#fff",
      fontWeight: "bold"
   },
   textView: {
      width: "100%",
   },
   textLabel: {
      fontWeight: "bold",
      marginLeft: 20,
      width: "90%",
      fontStyle: "italic"
   },
   titleTuVan: {
      marginLeft: 10,
      color: "#d63031",
      marginBottom: 5
   }
})


export { StylesCVScreen }