import api from '../index'


export const GetListDoctor = {
   ListDoctor: () => {
      return (
         api
            .callDoctor()
            .get('/getDoctorList.php')
      )
   },
   listDoctorHistory: ({ predictId, doctorId }) => {
      return (
         api
            .callHisroty()
            .post('/savePredictDetailDoctor.php', {
               "predict_record_id": predictId,
               "doctor_id": doctorId
            })
      )
   },
   getListDoctorHistory: ({ predictId }) => {
      return (
         api
            .callHisroty()
            .post('/getDoctorById.php', {
               "predict_record_id": predictId,
            })
      )
   }
}