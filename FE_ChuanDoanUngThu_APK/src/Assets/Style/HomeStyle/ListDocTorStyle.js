import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StylesListDoctor = StyleSheet.create({
   listDoctor: {
      width: 190,
      height: 300,
      marginBottom: 50
   },
   cardDoctor: {
      width: 180,
      height: 290,
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 20,
      alignItems: "center",
      borderColor: "#ecf0f1",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
   },
   titleListDoctor: {
      fontSize: wp("4%"),
      marginTop: 20,
      marginBottom: 10,
      fontWeight: "bold"
   },
   avatarDoctor: {
      width: 100,
      height: 150,
      resizeMode: "cover",
      borderRadius: 10
   },
   naemDoctor: {
      textAlign: "center",
      fontWeight: "bold",
      width: "100%",
      height: 25,
      marginTop: 10
   },
   btnTuVan: {
      width: "100%",
      height: 35,
      backgroundColor: "#00b894",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      position: "absolute",
      bottom: "3%"
   },
   textBtnDoctor: {
      color: "#fff",
      fontWeight: "bold"
   },
   optionDoctor: {
      textAlign: "center"
   }

})

export default StylesListDoctor