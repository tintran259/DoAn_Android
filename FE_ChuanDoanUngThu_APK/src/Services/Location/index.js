import api from '../../Services'

export const LOCATION = {
   GetListLocation: () => {
      return (
         api
            .callLocation()
            .get('/getLocationList.php')
      )
   }
}