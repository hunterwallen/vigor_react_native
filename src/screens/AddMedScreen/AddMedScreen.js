import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config'
import axios from 'axios'
import {Picker} from '@react-native-picker/picker'

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
              navigation.navigate('Home', {name: route.params.user.name, id: route.params.user.id, email: route.params.user.email, meds: response.data})
          })
        })
      }
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always"
                >
                <Text style={styles.inputTitle}>Medication Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Medication Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setName(text)}
                    value={name}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text style={styles.inputTitle}>Dosage:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Dosage'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setDosage(text)}
                    value={dosage}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text style={styles.inputTitle}>Frequency</Text>
                <View style={styles.combinedInputs}>
                  <Picker
                    selectedValue={frequencyInt}
                    style={styles.pickers}
                    onValueChange={(itemValue)=>{setFrequencyInt(itemValue)}} >

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
                      selectedValue={frequencyUnit}
                      style={styles.pickers}
                      onValueChange={(itemValue)=>{setFrequencyUnit(itemValue)}}>
                        <Picker.Item label="daily"  value= "daily" />
                        <Picker.Item label="weekly"  value= "weekly" />
                        <Picker.Item label="monthly"  value= "monthly" />
                      </Picker>
                    </View>

                    <Text style={styles.inputTitle}>Next Refill Date:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='refillDate'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setRefillDate(text)}
                        value={refillDate}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />

                    <Text style={styles.inputTitle}>Refill Frequency</Text>
                    <View style={styles.combinedInputs}>
                      <Picker
                        selectedValue={refillFrequencyInt}
                        style={styles.pickers}
                        onValueChange={(itemValue)=>{setRefillFrequencyInt(itemValue)}}
                        >
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
                          selectedValue={refillFrequencyUnit}
                          style={styles.pickers}
                          onValueChange={(itemValue)=>{setRefillFrequencyUnit(itemValue)}} >
                            <Picker.Item label="daily" value= "daily" />
                            <Picker.Item label="weekly" value= "weekly" />
                            <Picker.Item label="monthly" value= "monthly" />
                            <Picker.Item label="yearly" value= "yearly" />
                          </Picker>
                        </View>

                        <Text style={styles.inputTitle}>Number of Refills Remaining:</Text>
                        <Picker
                          selectedValue={refillsLeft}
                          style={styles.picker}
                          onValueChange={(itemValue)=>{setRefillsLeft(itemValue)}} >
                            <Picker.Item label="1"  value= {1} />
                            <Picker.Item label="2"  value= {2} />
                            <Picker.Item label="3"  value= {3} />
                            <Picker.Item label="4"  value= {4} />
                            <Picker.Item label="5"  value= {5} />
                            <Picker.Item label="6"  value= {6} />
                            <Picker.Item label="7"  value= {7} />
                            <Picker.Item label="8"  value= {8} />
                            <Picker.Item label="9"  value= {9} />
                            <Picker.Item label="10"  value= {10} />
                          </Picker>


                <TouchableOpacity
                    style={styles.button}
                    onPress={() => createMed()}>
                    <Text style={styles.buttonTitle}>Add Medication</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}
