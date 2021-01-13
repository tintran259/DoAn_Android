import api from '../index'


export const GetHostpital = {
   ListHospital: () => {
      return (
         api
            .callHospital()
            .get('/getHospitalList.php')
      )
   }
}