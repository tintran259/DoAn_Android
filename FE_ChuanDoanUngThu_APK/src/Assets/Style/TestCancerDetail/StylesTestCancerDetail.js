import { StyleSheet } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'


const StylesTestCanCerDetail = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#f5f6fa"
   },
   header: {
      width: "100%",
      height: 100,
   },
   formContact: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
   },
   contactForm: {

   },
   ranking: {
      position: "absolute",
      right: "0%",
      top: "-7%",
      width: 30,
      height: 30
   },
   btnBack: {
      width: 60,
      height: 50,
      justifyContent: "center",
      alignItems: "center"
   },
   titleHeader: {
      fontSize: 22,
      marginLeft: 20,
      fontWeight: "bold",
      color: "#2d3436"
   },
   body: {
      width: "100%",
      height: "100%",
      paddingHorizontal: 20
   },
   titleBody: {
      fontSize: 15,
      fontWeight: "bold",
      width: "40%"
   },
   labelHeaderBody: {
      width: "100%",
      flexDirection: "row",
      marginBottom: 10
   },
   textBody: {
      width: "50%",
      marginLeft: 10,
   },
   sectionDetail: {
      width: "100%"
   },
   nameTest: {
      fontWeight: "bold",
      textTransform: "uppercase"
   },
   item: {
      width: 70,
      height: 50,
      justifyContent: "space-around",
      alignItems: "center",
      marginRight: 10
   },
   section: {
      width: "100%",
      height: 60,
      marginTop: 15,
   },
   cardDetail: {
      width: 150,
      height: 170,
      marginBottom: 10,
      backgroundColor: "#f5f6fa",
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "#ecf0f1"
      // shadowColor: "#000",
      // shadowOffset: {
      //    width: 0,
      //    height: 2,
      // },
      // shadowOpacity: 0.25,
      // shadowRadius: 3.84,

      // elevation: 5,
   },
   BodyItem: {
      flexDirection: "row",
      justifyContent: "space-around"
   },
   iconDetail: {
      justifyContent: "center",
      alignItems: "center",
      width: 60,
      height: 60,
      marginLeft: 10,
      marginTop: 10,
      backgroundColor: "#ffffff",
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,

      elevation: 8,
   },
   textCan: {
      marginTop: 30,
      marginLeft: 15,
      fontSize: 15,
      fontWeight: "bold",
      color: "#2d3436",
      textTransform: "uppercase"
   },
   lineColor: {
      width: 5,
      height: 20,
      backgroundColor: "#E74C3C",
      position: "absolute",
      bottom: "30%",
      left: "5%",
      borderRadius: 10
   },
   textNumber: {
      position: "absolute",
      right: "20%",
      top: "15%",
      fontWeight: "bold",
      fontSize: 16
   },
   textDes: {
      marginLeft: 10,
      width: "90%",
      color: "#2d3436"
   },
   titleInfor: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#2d3436"
   },
   ViewInforTest: {
      width: "100%",
      marginTop: 10
   },
   img: {
      width: 30,
      height: 30
   },
   contentView: {
      width: "100%",
   },
   ViewTestText: {
      marginTop: 10,
      width: "100%",
      padding: 10,
      borderWidth: 3,
      borderColor: "#00cec9",
      borderRadius: 10,
      shadowColor: "#000",
   },
   textCancer: {
      color: "#2d3436",
      fontSize: 16,
      textAlign: "center"
   },
   inforDoctor: {
      width: 160,
      marginTop: 10,
      backgroundColor: "#fff",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#ecf0f1",
      padding: 10,
      alignItems: "center",
      marginRight: 10
   },
   iamgeAvatar: {
      width: 100,
      height: 100,
      borderRadius: 10,
      // borderColor: "#dfe6e9",
      // borderWidth: 1
   },
   viewInfor: {
      width: "100%",
      height: "100%",
   },
   textDoc: {
      marginLeft: 10,
      marginTop: 20,
      fontSize: 17,
      fontWeight: "bold",
      color: "#3498db",
   },
   textNameDoctor: {
      textAlign: "center",
      marginTop: 10,
      fontWeight: "bold"
   },
   btnContact: {
      position: "absolute",
      bottom: "45%",
      left: "6%",
      width: "90%",
      height: 35,
      backgroundColor: "#00cec9",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15
   },
   ViewHospital: {
      width: "100%",
   },
   imageHospital: {
      width: "50%",
      height: 100,
      borderRadius: 10
   },
   HospitalView: {
      width: "100%",
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      borderColor: "#ecf0f1",
      backgroundColor: "#fff",
      marginTop: 15
   },
   listHospital: {
      flexDirection: "row",
      width: "100%"
   },
   viewInforHos: {
      marginLeft: 10,
      width: "50%"
   },
   textNameHos: {
      fontWeight: "bold",
      color: "#3498db",
      fontSize: 17,
      width: "90%"
   },
   textPhone: {
      marginTop: 10,
      color: "#2d3436"
   },
   textotLine: {
      fontWeight: "bold",
      marginTop: 8,
      color: "#2d3436"
   },
   viewAdd: {
      marginTop: 5
   },
   titleAddress: {
      fontWeight: "bold",
      color: "#2d3436"
   },
   labelNmae: {
      color: "#2d3436",
      width: "50%",
      fontWeight: "normal"
   },
   ModalHospital: {
      width: "100%",
      height: 400,
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 10
   },
   ViewMap: {
      width: "100%",
      height: 250,
      backgroundColor: "red"
   },
   titleHospital: {
      fontWeight: "bold",
      fontSize: 18,
      width: "100%",
      color: "#2d3436"
   },
   TabViewHeader: {
      width: "100%",
      marginTop: 15,
      flexDirection: "row",
      marginBottom: 10
   },
   titleTab: {
      fontWeight: "bold",
      fontSize: 14,
      color: "#000"
   },
   btnNaer: {
      marginRight: 10,
      height: 40,
   }
})

export default StylesTestCanCerDetail