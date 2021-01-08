import { StyleSheet } from 'react-native'

const StylesEditProfile = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: "7%",
      backgroundColor: "#fff"
   },
   header: {
      width: "100%",
      height: 50,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative"
   },
   iconBACK: {
      fontSize: 23
   },
   btnBack: {
      width: 60,
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
   },
   titleHeader: {
      color: "#2d3436",
      fontSize: 17,
      fontWeight: "bold"
   },
   btnSave: {
      width: 60,
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
   },
   textbtnSave: {
      color: "#3498db"
   },
   formEdit: {

   },
   avatar: {
      width: 70,
      height: 70,
      borderRadius: 100,
      borderWidth: 0.5,
      borderColor: "#ecf0f1"
   },
   changeAvatar: {
      flexDirection: "row",
      marginTop: 20,
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      marginBottom: 15
   },
   btnChange: {
      width: 70,
      height: 50,
      justifyContent: "center",
      alignItems: "center"
   },
   textChange: {
      color: "#3498db"
   },
   nameAvatar: {
      fontWeight: "bold",
   },
   space: {
      width: "100%",
      height: 6,
      backgroundColor: "#ecf0f1"
   },
   formInputItem: {
      paddingHorizontal: 20,
      marginBottom: 50
   },
   itemForm: {
      width: "100%",
      marginTop: 15
   },
   inputEdit: {
      width: "100%",
      height: 50,
      borderBottomWidth: 1,
      borderBottomColor: "#ecf0f1",
      fontWeight: "bold"
   },
   titleItem: {
      color: "#7f8c8d"
   },
   iconDown: {

      color: "#7f8c8d"
   },
   btnDropdown: {
      width: 70,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
   },
   btnDropdownView: {
      width: "100%",
      height: "100%",
      position: "absolute",
      left: "80%",
      top: "30%"
   },
   modalGender: {
      width: "100%",
      height: 120,
      backgroundColor: "#fff",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      paddingHorizontal: 20
   },
   titleModal: {
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 10
   },
   itemGender: {
      width: "100%",
      height: 40,
      justifyContent: "center",
      marginBottom: 10,
      borderBottomWidth: 0.5,
      borderBottomColor: "#ecf0f1"
   },
   textLabel: {
      fontWeight: "bold",
      position: "absolute",
      top: "43%"
   },
   ViewChangePass: {
      marginTop: "7%",
      width: "100%",
      height: "100%",
      backgroundColor: "#fff"
   },
   titleChange: {
      fontSize: 25,
      fontFamily: 'Rokkitt',
      marginTop: 20,
      marginLeft: 20
   },
   ViewHeaderChange: {
      flexDirection: "row",
      width: "100%",
      height: 75
   },
   checkRePassword: {
      position: "absolute",
      bottom: "15%",
      right: "2%",
      color: "#e74c3c"
   }
})

export default StylesEditProfile