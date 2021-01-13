import axios from 'axios'

const BASE_URL = 'http://192.168.1.123:433/intelcons-api/v1/user/';
const BASE_URLAI = 'http://192.168.1.123:8080/api';
const BASE_URL_DOCTOR = 'http://192.168.1.123:433/intelcons-api/v1/doctor/'
const BASE_URL_HOSPITAL = 'http://192.168.1.123:433/intelcons-api/v1/hospital/'
const BASE_URL_HISTORY = 'http://192.168.1.123:433/intelcons-api/v1/predict_record/'
const api = {
   call() {
      return axios.create({
         baseURL: BASE_URL,
         headers: {
            "Accept": "application/json",
            'Content-Type': 'application/x-www-form-urlencoded'
         }
      })
   },
   callAI() {
      return axios.create({
         baseURL: BASE_URLAI,
         headers: {
            "Accept": "application/json",
            'Content-Type': 'application/x-www-form-urlencoded'
         }
      })
   },
   callDoctor() {
      return axios.create({
         baseURL: BASE_URL_DOCTOR,
         headers: {
            "Accept": "application/json",
            'Content-Type': 'application/x-www-form-urlencoded'
         }
      })
   },
   callHospital() {
      return axios.create({
         baseURL: BASE_URL_HOSPITAL,
         headers: {
            "Accept": "application/json",
            'Content-Type': 'application/x-www-form-urlencoded'
         }
      })
   },
   callHisroty() {
      return axios.create({
         baseURL: BASE_URL_HISTORY,
         headers: {
            "Accept": "application/json",
            'Content-Type': 'application/x-www-form-urlencoded'
         }
      })
   }
}
export default api