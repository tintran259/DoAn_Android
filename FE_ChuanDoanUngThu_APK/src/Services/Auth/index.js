import api from '../index'


export const PostLoginandRegister = {
   Login: ({ username, password }) => {
      return (
         api
            .call()
            .post('/login.php', {
               "username": username,
               "password": password
            })
      )
   },
   Register: ({ fullname, username, password, address, phone, indentify, gender, age, fullnameGuardian, phoneGuardian }) => {
      console.log("data truyen len:", fullname, address, phone, indentify, gender, age, fullnameGuardian, phoneGuardian);
      return (
         api
            .call()
            .post('createUser.php',
               {
                  "fullname": fullname,
                  "username": username,
                  "password": password,
                  "phone": phone,
                  "address": address,
                  "gender": gender,
                  "identify": indentify,
                  "age": age,
                  "gaurdian": fullnameGuardian,
                  "gaurdian_phone": phoneGuardian
               })
      )
   }
}