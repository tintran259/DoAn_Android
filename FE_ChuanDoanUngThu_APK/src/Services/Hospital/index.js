import api from '../index'


export const GetHostpital = {
   ListHospital: () => {
      return (
         api
            .callHospital()
            .get('/getHospitalList.php')
      )
   },
   listHospitalHistory: ({ predictId, hospitalId }) => {
      return (
         api
            .callHisroty()
            .post('savePredictDetailHospital.php', {
               "predict_record_id": predictId,
               "hospital_id": hospitalId
            })
      )
   },
   getListHospitalHistory: ({ predictId }) => {
      return (
         api
            .callHisroty()
            .post('/getHospitalById.php', {
               "predict_record_id": predictId,
            })
      )
   }
}