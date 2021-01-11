import { StyleSheet } from 'react-native'


const StylesTestCanCerDetail = StyleSheet.create({
   container: {
      flex: 1
   },
   header: {
      width: "100%",
      height: 100,
   },
   btnBack: {
      width: 60,
      height: 50,
      justifyContent: "center",
      alignItems: "center"
   },
   titleHeader: {
      fontSize: 26,
      fontFamily: "Rokkitt",
      marginLeft: 20
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
   }
})

export default StylesTestCanCerDetail