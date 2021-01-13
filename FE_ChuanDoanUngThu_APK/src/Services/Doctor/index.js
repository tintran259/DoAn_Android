import api from '../index'


export const GetListDoctor = {
   ListDoctor: () => {
      return (
         api
            .callDoctor()
            .get('/getDoctorList.php')
      )
   }
}