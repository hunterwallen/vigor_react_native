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
    const [refillfrequencyInt, setRefillFrequencyInt] = useState('')
    const [refillfrequencyUnit, setRefillFrequencyUnit] = useState('')
    const [refillsLeft, setRefillsLeft] = useState('')
    const [patientId, setPatientId] = useState(route.params.user.id)

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const createMed = () => {
      console.log(name, dosage, frequencyInt);
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
                      {label:"1 x" , value:1 },
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
                    onChangeItem={(item)=>{console.log(item.label, item.value)}} />

                    <DropDownPicker
                      value={frequencyUnit}
                      placeholder="Select one"
                      items ={[
                        {label:"daily" , value: "daily"},
                        {label:"weekly" , value: "weekly"},
                        {label:"monthly" , value: "monthly"},
                      ]}
                      defaultIndex={0}
                      containerStyle={{height: 40, width: 150, marginBottom: 200}}
                      onChangeItem={(item)=>{console.log(item.label, item.value)}} />
                    </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => createMed()}>
                    <Text style={styles.buttonTitle}>Add Medication</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}
