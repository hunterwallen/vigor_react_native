import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles'
import axios from 'axios'


export default function MedScreen({navigation, route}) {

  let med = route.params.med


  const onEditMedPress = () => {
    navigation.navigate('EditMed', {user: route.params.user, med: route.params.med})
  }

  const onDeleteMedPress = () => {
    Alert.alert("Are you sure?",
    "Are you sure you want to delete " + route.params.med.name + " from your records?",
    [{
      text: 'Cancel',
      onPress: () => {}
    },
    {
      text: 'Confirm',
      onPress: () => { confirmedDelete() }
    }])
  }

  const confirmedDelete = () =>{

      axios.delete('https://mighty-river-62498.herokuapp.com/medications/' + route.params.med.id).then((response) => {
        axios.get('https://mighty-river-62498.herokuapp.com/medications/' + route.params.user.id ).then((response)=> {
            navigation.navigate('Home', {name: route.params.user.name, id: route.params.user.id, email: route.params.user.email, meds: response.data})
        })
      })
    
  }


  return(
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">

        <View style={styles.medCard}>
          <Text style={styles.medTitle}>{route.params.med.name}</Text>
          <View style={styles.medInfoLine}>
            <Text style={styles.medTitles}>Dosage: </Text>
            <Text style={styles.medInfo}>{route.params.med.dosage}</Text>
          </View>
          <View style={styles.medInfoLine}>
            <Text style={styles.medTitles}>Dosage Frequency: </Text>
            <Text style={styles.medInfo}>{route.params.med.frequencyInt}x {route.params.med.frequencyUnit}</Text>
          </View>
          <View style={styles.medInfoLine}>
            <Text style={styles.medTitles}>Refill Frequency: </Text>
            <Text style={styles.medInfo}>{route.params.med.refillFrequencyInt}x {route.params.med.refillFrequencyUnit}</Text>
          </View>
          <View style={styles.medInfoLine}>
            <Text style={styles.medTitles}>Refill Date: </Text>
            <Text style={styles.medInfo}>{route.params.med.refillDate.slice(5,10) + "-" + route.params.med.refillDate.slice(0,4)}</Text>
          </View>
          <View style={styles.medInfoLine}>
            <Text style={styles.medTitles}>Refills Remaining: </Text>
            <Text style={styles.medInfo}>{route.params.med.refillsLeft}</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onEditMedPress} style={styles.editMedButton}>
              <Text style={styles.editMedButtonText}>Edit Medication</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={onDeleteMedPress} style={styles.deleteMedButton}>
              <Text style={styles.deleteMedButtonText}>Delete This Medication</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAwareScrollView>
    </View>
  )
}
