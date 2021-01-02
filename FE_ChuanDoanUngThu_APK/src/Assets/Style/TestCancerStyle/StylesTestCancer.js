import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const StylesTestCancer = StyleSheet.create({
   container: {
      marginTop: "7%"
   },
   header: {
      width: '100%',
      height: 40,
      backgroundColor: "#E33B3B",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row"
   },
   titleHeader: {
      color: "#fff",
      fontSize: 15,
      fontWeight: "bold"
   },
})
export default StylesTestCancer