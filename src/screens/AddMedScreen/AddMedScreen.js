import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config'
import axios from 'axios'
import DropDownPicker from 'react-native-dropdown-picker'

export default function RegistrationScreen({navigation, route}) {
    const [name, setName] = useState('')
    const [dosage, setDosage] = useState('')
    const [frequencyInt, setFrequencyInt] = useState('')
    const [frequencyUnit, setFrequencyUnit] = useState('')
    const [refillDate, setRefillDate] = useState('')
    const [refillFrequencyInt, setRefillFrequencyInt] = useState('')
    const [refillFrequencyUnit, setRefillFrequencyUnit] = useState('')
    const [refillsLeft, setRefillsLeft] = useState('')
    const [patientId, setPatientId] = useState(route.params.user.id)

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const createMed = () => {
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
        axios.post('https://mighty-river-62498.herokuapp.com/medications', medData).then((response)=>{
          axios.get('https://mighty-river-62498.herokuapp.com/medications/' + route.params.user.id ).then((response)=> {
              navigation.navigate('Home', {name: route.params.user.firstName, id: route.params.user.id, email: route.params.user.email, meds: response.data})
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
                  <DropDownPicker
                    value={frequencyInt}
                    placeholder="Select one"
                    items ={[
                      {label:"1 x" , value: 1},
                      {label:"2 x" , value: 2},
                      {label:"3 x" , value: 3},
                      {label:"4 x" , value: 4},
                      {label:"5 x" , value: 5},
                      {label:"6 x" , value: 6},
                      {label:"7 x" , value: 7},
                      {label:"8 x" , value: 8},
                      {label:"9 x" , value: 9},
                      {label:"10 x" , value: 10}
                    ]}
                    defaultIndex={0}
                    containerStyle={{height: 40, width: 150}}
                    onChangeItem={(item)=>{setFrequencyInt(item.value)}} />

                    <DropDownPicker
                      value={frequencyUnit}
                      placeholder="Select one"
                      items ={[
                        {label:"daily" , value: "daily"},
                        {label:"weekly" , value: "weekly"},
                        {label:"monthly" , value: "monthly"},
                      ]}
                      defaultIndex={0}
                      containerStyle={{height: 40, width: 150}}
                      onChangeItem={(item)=>{setFrequencyUnit(item.value)}} />
                    </View>

                    <Text>Next Refill Date:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='refillDate'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setRefillDate(text)}
                        value={refillDate}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />

                    <Text>Refill Frequency</Text>
                    <View style={styles.combinedInputs}>
                      <DropDownPicker
                        value={refillFrequencyInt}
                        placeholder="Select one"
                        items ={[
                          {label:"1 x" , value: 1},
                          {label:"2 x" , value: 2},
                          {label:"3 x" , value: 3},
                          {label:"4 x" , value: 4},
                          {label:"5 x" , value: 5},
                          {label:"6 x" , value: 6},
                          {label:"7 x" , value: 7},
                          {label:"8 x" , value: 8},
                          {label:"9 x" , value: 9},
                          {label:"10 x" , value: 10}
                        ]}
                        defaultIndex={0}
                        containerStyle={{height: 40, width: 150}}
                        onChangeItem={(item)=>{setRefillFrequencyInt(item.value)}} />

                        <DropDownPicker
                          value={refillFrequencyUnit}
                          placeholder="Select one"
                          items ={[
                            {label:"daily" , value: "daily"},
                            {label:"weekly" , value: "weekly"},
                            {label:"monthly" , value: "monthly"},
                            {label:"yearly", value: "yearly"}
                          ]}
                          defaultIndex={0}
                          containerStyle={{height: 40, width: 150}}
                          onChangeItem={(item)=>{setRefillFrequencyUnit(item.value)}} />
                        </View>

                        <Text>Number of Refills Remaining:</Text>
                        <DropDownPicker
                          value={refillsLeft}
                          placeholder="Select one"
                          items ={[
                            {label:"1" , value: 1},
                            {label:"2" , value: 2},
                            {label:"3" , value: 3},
                            {label:"4" , value: 4},
                            {label:"5" , value: 5},
                            {label:"6" , value: 6},
                            {label:"7" , value: 7},
                            {label:"8" , value: 8},
                            {label:"9" , value: 9},
                            {label:"10" , value: 10}
                          ]}
                          defaultIndex={0}
                          containerStyle={{height: 40, width: 150, marginBottom:100}}
                          onChangeItem={(item)=>{setRefillsLeft(item.value)}} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => createMed()}>
                    <Text style={styles.buttonTitle}>Add Medication</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}
