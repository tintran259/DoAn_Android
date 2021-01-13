import React, { useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { StylesRegisterScreen } from '../../Assets/Style/RegisterStyle'
import DropDownPicker from 'react-native-dropdown-picker';
import { getDateByTimeZoneDay } from '../../Contants'
import DateTimePicker from '@react-native-community/datetimepicker';


export default function FormRegiser({
   formRegister,
   setFormRegister,
   isHandleRegister,
   setIsHandleRegister
}) {

   const [checkRePassword, setCheckRePassword] = useState(false)
   const StylesValidate = {
      backgroundColor: "#FFF",
      borderColor: "#e74c3c",
      borderBottomWidth: 0.5
   }
   const [date, setDate] = useState(new Date());
   const [show, setShow] = useState(false);


   const onChange = (event, selectedDate) => {
      let dateShow = getDateByTimeZoneDay(selectedDate, null);
      setShow(Platform.OS === 'ios');
      setFormRegister({ ...formRegister, age: dateShow });
   };

   const showDatepicker = () => {
      setShow(true);
   };


   const onBlurRe_passord = (e) => {
      const repassword = e.nativeEvent.text
      if (repassword !== formRegister.password) {
         setCheckRePassword(true)
      } else {
         setCheckRePassword(false)
      }
   }




   return (
      <View style={StylesRegisterScreen.formRegister}>
         {show && (
            <DateTimePicker
               testID="dateTimePicker"
               value={date}
               mode={"date"}
               display="spinner"
               onChange={onChange}
            />
         )}
         <View style={StylesRegisterScreen.formItem}>
            <Text style={StylesRegisterScreen.labelFormItem}>Họ tên</Text>
            <TextInput
               value={formRegister.fullname}
               style={[StylesRegisterScreen.input, isHandleRegister && formRegister.fullname === "" ? StylesValidate : ""]}
               placeholder="Họ và tên ..."
               onChangeText={text => setFormRegister({ ...formRegister, fullname: text })}
            />
            {
               isHandleRegister && formRegister.fullname === "" ?
                  <Text style={StylesRegisterScreen.textValidate}>Vui lòng điền thông tin !</Text> :
                  <Text style={{ display: "none" }}></Text>
            }
         </View>
         <View style={StylesRegisterScreen.formItem}>
            <Text style={StylesRegisterScreen.labelFormItem}>Tài khoản</Text>
            <TextInput
               value={formRegister.username}
               style={[StylesRegisterScreen.input, isHandleRegister && formRegister.username === "" ? StylesValidate : ""]}
               placeholder="Tài khoản ..."
               onChangeText={text => setFormRegister({ ...formRegister, username: text })}
            />
            {
               isHandleRegister && formRegister.username === "" ?
                  <Text style={StylesRegisterScreen.textValidate}>Vui lòng điền thông tin !</Text> :
                  <Text style={{ display: "none" }}></Text>
            }
         </View>
         <View style={StylesRegisterScreen.formItem}>
            <Text style={StylesRegisterScreen.labelFormItem}>Mật khẩu</Text>
            <TextInput
               value={formRegister.password}
               style={[StylesRegisterScreen.input, isHandleRegister && formRegister.password === "" ? StylesValidate : ""]}
               secureTextEntry={true}
               placeholder="Mật khẩu ..."
               onChangeText={text => setFormRegister({ ...formRegister, password: text })}
            />
            {
               isHandleRegister && formRegister.password === "" ?
                  <Text style={StylesRegisterScreen.textValidate}>Vui lòng điền thông tin !</Text> :
                  <Text style={{ display: "none" }}></Text>
            }

         </View>
         <View style={StylesRegisterScreen.formItem}>
            <Text style={StylesRegisterScreen.labelFormItem}>Nhập lại mật khẩu</Text>
            <TextInput
               value={formRegister.rePassword}
               style={[
                  StylesRegisterScreen.input,
                  isHandleRegister && formRegister.rePassword === "" ? StylesValidate : "",
                  checkRePassword && formRegister.password !== formRegister.rePassword ? StylesValidate : ""
               ]}
               secureTextEntry={true}
               placeholder="Nhập lại mật khẩu ..."
               onEndEditing={e => onBlurRe_passord(e)}
               onChangeText={text => setFormRegister({ ...formRegister, rePassword: text })}
            />
            {
               isHandleRegister && formRegister.rePassword === "" ?
                  <Text style={StylesRegisterScreen.textValidate}>Vui lòng điền mật khẩu !</Text> :
                  <Text style={{ display: "none" }}></Text>
            }
            {
               checkRePassword && formRegister.password !== formRegister.rePassword ?
                  <Text style={StylesRegisterScreen.textValidate}>Mật khẩu không khớp !</Text>
                  :
                  <Text style={{ display: "none" }}></Text>

            }
         </View>
         <View style={StylesRegisterScreen.formItem}>
            <Text style={StylesRegisterScreen.labelFormItem}>Địa chỉ</Text>
            <TextInput
               style={[StylesRegisterScreen.input, isHandleRegister && formRegister.address === "" ? StylesValidate : ""]}
               placeholder="Địa chỉ ..."
               value={formRegister.address}
               onChangeText={text => setFormRegister({ ...formRegister, address: text })}
            />
            {
               isHandleRegister && formRegister.address === "" ?
                  <Text style={StylesRegisterScreen.textValidate}>Vui lòng điền thông tin !</Text> :
                  <Text style={{ display: "none" }}></Text>
            }
         </View>
         <View style={StylesRegisterScreen.formItemRow}>
            <View style={StylesRegisterScreen.formRowLeft}>
               <Text style={StylesRegisterScreen.labelFormItem}>Số điện thoại liên hệ</Text>
               <TextInput
                  keyboardType={'numeric'}
                  style={[StylesRegisterScreen.inputRow, isHandleRegister && formRegister.phone === "" ? StylesValidate : ""]}
                  placeholder="Số điện thoại ..."
                  value={formRegister.phone}
                  onChangeText={text => setFormRegister({ ...formRegister, phone: text })}
               />
               {
                  isHandleRegister && formRegister.phone === "" ?
                     <Text style={[StylesRegisterScreen.textValidate, { top: "70%", right: "2%" }]}>Vui lòng điền thông tin !</Text> :
                     <Text style={{ display: "none" }}></Text>
               }

            </View>
            <View style={StylesRegisterScreen.formRowRight}>
               <Text style={StylesRegisterScreen.labelFormItem}>Giới tính</Text>
               <DropDownPicker
                  items={[
                     { label: 'Nam', value: '0' },
                     { label: 'Nữ', value: '1' },
                  ]}
                  containerStyle={{ height: 50 }}
                  style={{ backgroundColor: '#fff', marginTop: 10, width: "100%", borderColor: "#ecf0f1" }}
                  defaultValue={formRegister.gender}
                  onChangeItem={text => { setFormRegister({ ...formRegister, gender: text.value }) }}
                  itemStyle={{
                     justifyContent: 'flex-start'
                  }}
                  dropDownStyle={{ backgroundColor: '#ffff', marginTop: 10 }}
               />
            </View>
         </View>
         <View style={StylesRegisterScreen.formItemRow}>
            <View style={[StylesRegisterScreen.formRowLeft, { width: "60%" }]}>
               <Text style={StylesRegisterScreen.labelFormItem}>Số CMND</Text>
               <TextInput
                  keyboardType={'numeric'}
                  style={[StylesRegisterScreen.inputRow, isHandleRegister && formRegister.indentify === "" ? StylesValidate : ""]}
                  placeholder="CMND ..."
                  value={formRegister.indentify}
                  onChangeText={text => setFormRegister({ ...formRegister, indentify: text })}
               />
               {
                  isHandleRegister && formRegister.indentify === "" ?
                     <Text style={[StylesRegisterScreen.textValidate, { top: "70%", right: "2%" }]}>Vui lòng điền thông tin !</Text> :
                     <Text style={{ display: "none" }}></Text>
               }
            </View>
            <View style={[StylesRegisterScreen.formRowRight, { width: "38%", backgroundColor: "#fff" }]}>
               <Text style={StylesRegisterScreen.labelFormItem}>Ngày sinh</Text>
               <View style={[StylesRegisterScreen.inputRow, { backgroundColor: "#fff" }]}>
                  <TouchableOpacity style={StylesRegisterScreen.btnBirthDay} onPress={showDatepicker}>
                     <Text style={StylesRegisterScreen.textBirthday}>{formRegister.age}</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
         <View style={StylesRegisterScreen.formItem}>
            <Text style={StylesRegisterScreen.labelFormItem}>Họ tên người giám hộ</Text>
            <TextInput
               style={[StylesRegisterScreen.input, isHandleRegister && formRegister.fullnameGuardian === "" ? StylesValidate : ""]}
               placeholder="Họ tên người giám hộ ..."
               value={formRegister.fullnameGuardian}
               onChangeText={text => setFormRegister({ ...formRegister, fullnameGuardian: text })}
            />
            {
               isHandleRegister && formRegister.fullnameGuardian === "" ?
                  <Text style={StylesRegisterScreen.textValidate}>Vui lòng điền thông tin !</Text> :
                  <Text style={{ display: "none" }}></Text>
            }
         </View>
         <View style={StylesRegisterScreen.formItem}>
            <Text style={StylesRegisterScreen.labelFormItem}>SDT người giám hộ</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesRegisterScreen.input, isHandleRegister && formRegister.phoneGuardian === "" ? StylesValidate : ""]}
               placeholder="SDT ..."
               value={formRegister.phoneGuardian}
               onChangeText={text => setFormRegister({ ...formRegister, phoneGuardian: text })}
            />
            {
               isHandleRegister && formRegister.phoneGuardian === "" ?
                  <Text style={StylesRegisterScreen.textValidate}>Vui lòng điền thông tin !</Text> :
                  <Text style={{ display: "none" }}></Text>
            }
         </View>


      </View>
   )
}