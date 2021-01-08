import api from '../index'


export const UserChangeInfor = {
   EditInforUser: ({ userId, fullname, address, gender, phone, birthday, nameGuardian, phoneGuardian }) => {
      return (
         api
            .call()
            .post('/updateUser.php', {
               "user_id": userId,
               "fullname": fullname,
               "phone": phone,
               "address": address,
               "gender": gender,
               "age": birthday,
               "gaurdian": nameGuardian,
               "gaurdian_phone": phoneGuardian,
            })
      )
   },
}