import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import axios from 'axios'
import { Picker } from '@react-native-picker/picker'
import DatePicker from 'react-native-datepicker'

export default function RegistrationScreen({navigation, route}) {
    const [name, setName] = useState(route.params.med.name)
    const [dosage, setDosage] = useState(route.params.med.dosage)
    const [frequencyInt, setFrequencyInt] = useState(route.params.med.frequencyInt)
    const [frequencyUnit, setFrequencyUnit] = useState(route.params.med.frequencyUnit)
    const [refillDate, setRefillDate] = useState(route.params.med.refillDate)
    const [refillFrequencyInt, setRefillFrequencyInt] = useState(route.params.med.refillFrequencyInt)
    const [refillFrequencyUnit, setRefillFrequencyUnit] = useState(route.params.med.refillFrequencyUnit)
    const [refillsLeft, setRefillsLeft] = useState(route.params.med.refillsLeft)
    const [patientId, setPatientId] = useState(route.params.user.id)

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const editMed = () => {
      if((name || dosage || frequencyInt || frequencyUnit || refillDate || refillFrequencyInt || refillFrequencyUnit || refillsLeft) === "") {
        alert("Please make sure you fill in all of the fields")
      } else {
        let medData = {
          name: name,
          dosage: dosage,
          frequencyInt: frequencyInt,
          frequencyUnit: frequencyUnit,
          refillDate: refillDate,
          refillFrequencyInt: refillFrequencyInt,
          refillFrequencyUnit: refillFrequencyUnit,
          refillsLeft: refillsLeft,
          patientId: patientId
        }
        console.log(medData);
        axios.put('https://mighty-river-62498.herokuapp.com/medications/' + route.params.med.id, medData).then((response)=>{
          axios.get('https://mighty-river-62498.herokuapp.com/medications/' + route.params.user.id ).then((response)=> {
              navigation.navigate('Home', {name: route.params.user.name, id: route.params.user.id, email: route.params.user.email, meds: response.data})
          })
        })
      }
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Text>Medication Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Medication Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setName(text)}
                    value={name}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text>Dosage:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Dosage'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setDosage(text)}
                    value={dosage}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text>Frequency</Text>
                <View style={styles.combinedInputs}>
                  <Picker
                    style={styles.pickers}
                    selectedValue={frequencyInt}
                    onValueChange={(value)=>{setFrequencyInt(value)}}
                    prompt="Select"  >


                      <Picker.Item label="1 x"  value={1} />
                      <Picker.Item label="2 x"  value={2} />
                      <Picker.Item label="3 x"  value={3} />
                      <Picker.Item label="4 x"  value={4} />
                      <Picker.Item label="5 x"  value={5} />
                      <Picker.Item label="6 x"  value={6} />
                      <Picker.Item label="7 x"  value={7} />
                      <Picker.Item label="8 x"  value={8} />
                      <Picker.Item label="9 x"  value={9} />
                      <Picker.Item label="10 x"  value={10} />


                    </Picker>

                    <Picker
                      style={styles.pickers}
                      selectedValue={frequencyUnit}
                      onValueChange={(value)=>{setFrequencyUnit(value)}}
                      prompt="Select" >

                        <Picker.Item label="daily"  value= "daily" />
                        <Picker.Item label="weekly"  value= "weekly" />
                        <Picker.Item label="monthly"  value= "monthly" />

                      </Picker>

                    </View>

                    <Text>Next Refill Date:</Text>
                    <DatePicker
                        style={{width: 200}}
                        date={refillDate}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2021-01-01"
                        maxDate="2026-01-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                          dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                          },
                          dateInput: {
                            marginLeft: 36
                          }
                        }}
                        onDateChange={(date) => {setRefillDate(date)}}
                      />

                    <Text>Refill Frequency</Text>
                    <View style={styles.combinedInputs}>
                      <Picker
                        style={styles.pickers}
                        selctedValue={refillFrequencyInt}
                        onValueChange={(value)=>{
                          if(refillFrequencyUnit === "monthly"){
                            setRefillFrequencyInt(1)
                          } else {
                            setRefillFrequencyInt(value)
                          }
                        }}
                        prompt="Select" >

                        <Picker.Item label="1 x"  value= {1} />
                        <Picker.Item label="2 x"  value= {2} />
                        <Picker.Item label="3 x"  value= {3} />
                        <Picker.Item label="4 x"  value= {4} />
                        <Picker.Item label="5 x"  value= {5} />
                        <Picker.Item label="6 x"  value= {6} />
                        <Picker.Item label="7 x"  value= {7} />
                        <Picker.Item label="8 x"  value= {8} />
                        <Picker.Item label="9 x"  value= {9} />
                        <Picker.Item label="10 x"  value= {10} />


                        </Picker>

                        <Picker
                          style={styles.pickers}
                          selectedValue={refillFrequencyUnit}
                          onValueChange={(value)=>{
                            setRefillFrequencyUnit(value)
                            if(value === "monthly") {
                              setRefillFrequencyInt(1)
                            }
                          }}
                          prompt="Select" >


                            <Picker.Item label="monthly"  value= "monthly" />
                            <Picker.Item label="yearly" value= "yearly" />

                          </Picker>

                        </View>

                        <Text>Number of Refills Remaining:</Text>
                        <Picker
                          style={styles.picker}
                          selectedValue={refillsLeft}
                          onValueChange={(value)=>{setRefillsLeft(value)}}
                          prompt="Select" >

                            <Picker.Item label="1"  value={1} />
                            <Picker.Item label="2"  value={2} />
                            <Picker.Item label="3"  value={3} />
                            <Picker.Item label="4"  value={4} />
                            <Picker.Item label="5"  value={5} />
                            <Picker.Item label="6"  value={6} />
                            <Picker.Item label="7"  value={7} />
                            <Picker.Item label="8"  value={8} />
                            <Picker.Item label="9"  value={9} />
                            <Picker.Item label="10"  value={10} />

                          </Picker>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => editMed()}>
                    <Text style={styles.buttonTitle}>Edit Medication</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}
