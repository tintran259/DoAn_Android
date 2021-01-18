import { StyleSheet } from 'react-native'

const StylesNewFeed = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff"
   },
   header: {
      width: "100%",
      height: 70,
      justifyContent: "flex-end"
   },
   titleHeader: {
      fontSize: 25,
      fontWeight: "bold",
      marginLeft: 20,
      color: "#2d3436",
      marginBottom: 10
   },
   body: {
      marginHorizontal: 10,
      marginTop: 10
   },
   ListNewFeed: {
      width: "100%",
      height: 320,
      borderBottomWidth: 1,
      borderBottomColor: "#ecf0f1",
      flexDirection: "row",
      marginBottom: 10
   },
   ViewAvatar: {
      width: "25%",
      height: "100%",
      alignItems: "center"
   },
   ViewContent: {
      width: "75%",
      height: "100%",
   },
   avatar: {
      width: 45,
      height: 45,
      borderRadius: 100
   },
   textName: {
      color: "#2d3436",
      fontWeight: "bold"
   },
   textDate: {
      fontSize: 12
   },
   headerContent: {
      flexDirection: "row",
      justifyContent: "space-between"
   },
   timeText: {
      color: "#2d3436",
      fontSize: 12,
      fontWeight: "bold"
   },
   textContentNewFeed: {
      color: "#2d3436",
      fontWeight: "bold"
   },
   contentNewFeed: {
      marginTop: 10
   },
   imageNewFeed: {
      width: "100%",
      height: 150,
      borderRadius: 10,
      marginTop: 10
   },
   ////////////////////////////////////////// Detail ////////////////////////
   headerDetail: {
      width: "100%",
      height: 70,
      justifyContent: "center"
   },
   btnBack: {
      width: 60,
      height: 40,
      marginLeft: 15,
      justifyContent: "center"
   },
   iconBack: {
      fontSize: 25,
      color: "#2d3436"
   },
   headerBodyDetail: {
      flexDirection: "row"
   },
   titleNAME: {
      fontWeight: "bold",
      color: "#2d3436"
   },
   headerText: {
      marginLeft: 15
   },
   bodyDetail: {
      width: "100%",
      paddingHorizontal: 20
   },
   titledate: {
      fontSize: 13,
      color: "#2d3436"
   },
   imageNewFeedDetail: {
      width: "100%",
      height: 250,
      borderRadius: 10,
      marginTop: 10
   }
})


export default StylesNewFeed