import api from '../index'


export const UserChangeInfor = {
   EditInforUser: ({ userId, fullname, address, gender, phone, birthday, nameGuardian, phoneGuardian, blood, height, weight }) => {
      console.log("userId, fullname, address, gender, phone, birthday, nameGuardian, phoneGuardian, blood, height, weight APC", userId, fullname, address, gender, phone, birthday, nameGuardian, phoneGuardian, blood, height, weight);
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
               "height": height,
               "weight": weight,
               "blood_type": blood
            })
      )
   },
   GetuserByID: ({ userId }) => {
      return (
         api
            .call()
            .post('/getUserId.php', {
               "user_id": userId
            })
      )
   }
}