import { StyleSheet } from 'react-native'

const StylesNewFeed = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#f1f2f6"
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
   title: {
      fontWeight: "bold",
      fontSize: 17,
      marginBottom: 10,
      color: "#1dd1a1"
   },
   body: {
      marginHorizontal: 10,
      marginTop: 10
   },
   ListNewFeed: {
      width: "100%",
      height: 120,
      flexDirection: "row",
      backgroundColor: "#ffff",
      marginBottom: 10,
      padding: 10
   },
   ViewAvatar: {
      width: "40%",
      height: "100%",
      alignItems: "center"
   },
   ViewContent: {
      width: "60%",
      height: "100%",
      paddingHorizontal: 10
   },
   avatar: {
      width: 45,
      height: 45,
      borderRadius: 100
   },
   textName: {
      color: "#2d3436",
      fontWeight: "bold",
      fontSize: 14
   },
   textDate: {
      fontSize: 12,
      marginRight: 10
   },
   headerContent: {
      justifyContent: "center",
   },
   timeText: {
      color: "#2d3436",
      fontSize: 12,
      fontWeight: "bold"
   },
   textContentNewFeed: {
      color: "#2d3436",
      fontWeight: "bold",
      textAlign: "justify",
      marginTop: 5,
   },
   contentNewFeed: {
      marginTop: 10
   },
   imageNewFeed: {
      width: "100%",
      height: 150,
      borderRadius: 10,
      marginTop: 20,
   },
   ImageNews: {
      width: "100%",
      height: "100%",
      borderRadius: 10
   },
   ViewType: {
      width: 2,
      height: 260,
      backgroundColor: "#1dd1a1",
      borderRadius: 50,
      marginTop: 10
   },
   typeView: {
      marginTop: 0,
      flexDirection: "row",
      alignItems: "flex-end"
   },
   textType: {
      fontWeight: "bold",
      color: "#FFC312",
      width: "60%"
   },
   // textType:{
   //    te
   // },
   ////////////////////////////////////////// Detail ////////////////////////
   headerDetail: {
      width: "100%",
      height: 70,
      justifyContent: "center"
   },
   ViewCon: {
      flexDirection: "row",
      width: "50%"
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
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between"
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