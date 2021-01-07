import axios from 'axios'

const BASE_URL = 'http://192.168.0.10:433/intelcons-api/v1/user/';

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
}
export default api