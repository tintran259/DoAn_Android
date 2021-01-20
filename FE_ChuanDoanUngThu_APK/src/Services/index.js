import axios from 'axios'
import { URL_SEVER } from '../Contants'
const BASE_URL = `http://${URL_SEVER}:433/intelcons-api/v1/user/`;
//const BASE_URLAI = `http://${URL_SEVER}:8080/api`;
const BASE_URLAI = `http://${URL_SEVER}:8000/api`;
const BASE_URL_DOCTOR = `http://${URL_SEVER}:433/intelcons-api/v1/doctor/`
const BASE_URL_HOSPITAL = `http://${URL_SEVER}:433/intelcons-api/v1/hospital/`
const BASE_URL_HISTORY = `http://${URL_SEVER}:433/intelcons-api/v1/predict_record/`
const BASE_URL_LOCATION = `http://${URL_SEVER}:433/intelcons-api/v1/location/`
const BASE_URL_NEWFEED = `http://${URL_SEVER}:433/intelcons-api/v1/news/`
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
            'Content-Type': 'application/json',
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
   },
   callLocation() {
      return axios.create({
         baseURL: BASE_URL_LOCATION,
         headers: {
            "Accept": "application/json",
            'Content-Type': 'application/x-www-form-urlencoded'
         }
      })
   },
   callNewFeed() {
      return axios.create({
         baseURL: BASE_URL_NEWFEED,
         headers: {
            "Accept": "application/json",
            'Content-Type': 'application/x-www-form-urlencoded'
         }
      })
   }
}
export default api