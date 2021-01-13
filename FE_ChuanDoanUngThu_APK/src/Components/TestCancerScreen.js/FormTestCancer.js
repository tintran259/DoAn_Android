import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { StylesTestCancer } from '../../Assets/Style/TestCancerStyle'

export default function FormTestCancer({
   isSubmit,
   formTestCancer,
   setFormTestCancer
}) {
   return (
      <View>
         <View style={StylesTestCancer.itemForm}>
            <Text style={StylesTestCancer.titleFormItem}>BASO</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesTestCancer.input, isSubmit && formTestCancer.baso === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Nhập dữ liệu"
               value={formTestCancer.baso}
               onChangeText={text => setFormTestCancer({ ...formTestCancer, baso: text })}
            />
            {
               isSubmit && formTestCancer.baso === "" &&
               <Text style={StylesTestCancer.textEmpty}>Mời bạn nhập vào đây</Text>
            }
         </View>
         <View style={StylesTestCancer.itemForm}>
            <Text style={StylesTestCancer.titleFormItem}>EOS</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesTestCancer.input, isSubmit && formTestCancer.eos === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Nhập dữ liệu"
               value={formTestCancer.eos}
               onChangeText={text => setFormTestCancer({ ...formTestCancer, eos: text })}
            />
            {
               isSubmit && formTestCancer.eos === "" &&
               <Text style={StylesTestCancer.textEmpty}>Mời bạn nhập vào đây</Text>
            }
         </View>
         <View style={StylesTestCancer.itemForm}>
            <Text style={StylesTestCancer.titleFormItem}>MONO</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesTestCancer.input, isSubmit && formTestCancer.mono === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Nhập dữ liệu"
               value={formTestCancer.mono}
               onChangeText={text => setFormTestCancer({ ...formTestCancer, mono: text })}
            />
            {
               isSubmit && formTestCancer.mono === "" &&
               <Text style={StylesTestCancer.textEmpty}>Mời bạn nhập vào đây</Text>
            }
         </View>
         <View style={StylesTestCancer.itemForm}>
            <Text style={StylesTestCancer.titleFormItem}>NEU</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesTestCancer.input, isSubmit && formTestCancer.neu === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Nhập dữ liệu"
               value={formTestCancer.neu}
               onChangeText={text => setFormTestCancer({ ...formTestCancer, neu: text })}
            />
            {
               isSubmit && formTestCancer.neu === "" &&
               <Text style={StylesTestCancer.textEmpty}>Mời bạn nhập vào đây</Text>
            }
         </View>
         <View style={StylesTestCancer.itemForm}>
            <Text style={StylesTestCancer.titleFormItem}>LYM</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesTestCancer.input, isSubmit && formTestCancer.lym === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Nhập dữ liệu"
               value={formTestCancer.lym}
               onChangeText={text => setFormTestCancer({ ...formTestCancer, lym: text })}
            />
            {
               isSubmit && formTestCancer.lym === "" &&
               <Text style={StylesTestCancer.textEmpty}>Mời bạn nhập vào đây</Text>
            }
         </View>
         <View style={StylesTestCancer.itemForm}>
            <Text style={StylesTestCancer.titleFormItem}>WBC</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesTestCancer.input, isSubmit && formTestCancer.wbc === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Nhập dữ liệu"
               value={formTestCancer.wbc}
               onChangeText={text => setFormTestCancer({ ...formTestCancer, wbc: text })}
            />
            {
               isSubmit && formTestCancer.wbc === "" &&
               <Text style={StylesTestCancer.textEmpty}>Mời bạn nhập vào đây</Text>
            }
         </View>
         <View style={StylesTestCancer.itemForm}>
            <Text style={StylesTestCancer.titleFormItem}>HCT</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesTestCancer.input, isSubmit && formTestCancer.hct === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Nhập dữ liệu"
               value={formTestCancer.hct}
               onChangeText={text => setFormTestCancer({ ...formTestCancer, hct: text })}
            />
            {
               isSubmit && formTestCancer.hct === "" &&
               <Text style={StylesTestCancer.textEmpty}>Mời bạn nhập vào đây</Text>
            }
         </View>
         <View style={StylesTestCancer.itemForm}>
            <Text style={StylesTestCancer.titleFormItem}>HGB</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesTestCancer.input, isSubmit && formTestCancer.hgb === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Nhập dữ liệu"
               value={formTestCancer.hgb}
               onChangeText={text => setFormTestCancer({ ...formTestCancer, hgb: text })}
            />
            {
               isSubmit && formTestCancer.hgb === "" &&
               <Text style={StylesTestCancer.textEmpty}>Mời bạn nhập vào đây</Text>
            }
         </View>
         <View style={StylesTestCancer.itemForm}>
            <Text style={StylesTestCancer.titleFormItem}>RBC</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesTestCancer.input, isSubmit && formTestCancer.rbc === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Nhập dữ liệu"
               value={formTestCancer.rbc}
               onChangeText={text => setFormTestCancer({ ...formTestCancer, rbc: text })}
            />
            {
               isSubmit && formTestCancer.rbc === "" &&
               <Text style={StylesTestCancer.textEmpty}>Mời bạn nhập vào đây</Text>
            }
         </View>
         <View style={StylesTestCancer.itemForm}>
            <Text style={StylesTestCancer.titleFormItem}>MCH</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesTestCancer.input, isSubmit && formTestCancer.mch === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Nhập dữ liệu"
               value={formTestCancer.mch}
               onChangeText={text => setFormTestCancer({ ...formTestCancer, mch: text })}
            />
            {
               isSubmit && formTestCancer.mch === "" &&
               <Text style={StylesTestCancer.textEmpty}>Mời bạn nhập vào đây</Text>
            }
         </View>
         <View style={StylesTestCancer.itemForm}>
            <Text style={StylesTestCancer.titleFormItem}>MCHC</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesTestCancer.input, isSubmit && formTestCancer.mchc === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Nhập dữ liệu"
               value={formTestCancer.mchc}
               onChangeText={text => setFormTestCancer({ ...formTestCancer, mchc: text })}
            />
            {
               isSubmit && formTestCancer.mchc === "" &&
               <Text style={StylesTestCancer.textEmpty}>Mời bạn nhập vào đây</Text>
            }
         </View>
         <View style={StylesTestCancer.itemForm}>
            <Text style={StylesTestCancer.titleFormItem}>MCV</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesTestCancer.input, isSubmit && formTestCancer.mcv === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Nhập dữ liệu"
               value={formTestCancer.mcv}
               onChangeText={text => setFormTestCancer({ ...formTestCancer, mcv: text })}
            />
            {
               isSubmit && formTestCancer.mcv === "" &&
               <Text style={StylesTestCancer.textEmpty}>Mời bạn nhập vào đây</Text>
            }
         </View>
         <View style={StylesTestCancer.itemForm}>
            <Text style={StylesTestCancer.titleFormItem}>MPV</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesTestCancer.input, isSubmit && formTestCancer.mpv === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Nhập dữ liệu"
               value={formTestCancer.mpv}
               onChangeText={text => setFormTestCancer({ ...formTestCancer, mpv: text })}
            />
            {
               isSubmit && formTestCancer.mpv === "" &&
               <Text style={StylesTestCancer.textEmpty}>Mời bạn nhập vào đây</Text>
            }
         </View>
         <View style={StylesTestCancer.itemForm}>
            <Text style={StylesTestCancer.titleFormItem}>RDW</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesTestCancer.input, isSubmit && formTestCancer.rdw === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Nhập dữ liệu"
               value={formTestCancer.rdw}
               onChangeText={text => setFormTestCancer({ ...formTestCancer, rdw: text })}
            />
            {
               isSubmit && formTestCancer.rdw === "" &&
               <Text style={StylesTestCancer.textEmpty}>Mời bạn nhập vào đây</Text>
            }
         </View>
         <View style={StylesTestCancer.itemForm}>
            <Text style={StylesTestCancer.titleFormItem}>PDW</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesTestCancer.input, isSubmit && formTestCancer.pdw === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Nhập dữ liệu"
               value={formTestCancer.pdw}
               onChangeText={text => setFormTestCancer({ ...formTestCancer, pdw: text })}
            />
            {
               isSubmit && formTestCancer.pdw === "" &&
               <Text style={StylesTestCancer.textEmpty}>Mời bạn nhập vào đây</Text>
            }
         </View>
         <View style={StylesTestCancer.itemForm}>
            <Text style={StylesTestCancer.titleFormItem}>PLT</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesTestCancer.input, isSubmit && formTestCancer.plt === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Nhập dữ liệu"
               value={formTestCancer.plt}
               onChangeText={text => setFormTestCancer({ ...formTestCancer, plt: text })}
            />
            {
               isSubmit && formTestCancer.plt === "" &&
               <Text style={StylesTestCancer.textEmpty}>Mời bạn nhập vào đây</Text>
            }
         </View>
         <View style={StylesTestCancer.itemForm}>
            <Text style={StylesTestCancer.titleFormItem}>TPTTBM</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesTestCancer.input, isSubmit && formTestCancer.tpttbm === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Nhập dữ liệu"
               value={formTestCancer.tpttbm}
               onChangeText={text => setFormTestCancer({ ...formTestCancer, tpttbm: text })}
            />
            {
               isSubmit && formTestCancer.tpttbm === "" &&
               <Text style={StylesTestCancer.textEmpty}>Mời bạn nhập vào đây</Text>
            }
         </View>
         <View style={StylesTestCancer.itemForm}>
            <Text style={StylesTestCancer.titleFormItem}>PCT</Text>
            <TextInput
               keyboardType={'numeric'}
               style={[StylesTestCancer.input, isSubmit && formTestCancer.pct === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Nhập dữ liệu"
               value={formTestCancer.pct}
               onChangeText={text => setFormTestCancer({ ...formTestCancer, pct: text })}
            />
            {
               isSubmit && formTestCancer.pct === "" &&
               <Text style={StylesTestCancer.textEmpty}>Mời bạn nhập vào đây</Text>
            }
         </View>
      </View>
   )
}