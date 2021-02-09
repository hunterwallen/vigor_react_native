import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config'
import { HeaderBackButton } from '@react-navigation/stack'


export default function HomeScreen({navigation, route}) {

    const onFooterLinkPress = () => {
        navigation.navigate('Login', {user: null})
    }
    const onAddMedPress = () => {
      navigation.navigate('AddMed', {user: route.params})
    }

    const onMedPress = (id) => {
      alert(id)
    }


    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">

                <View>
                  <Pressable onPress={onAddMedPress} style={styles.addMedButton}>
                    <Text style={styles.addMedButtonText}>Add Medication</Text>
                  </Pressable>
                </View>


                <View style={styles.mainHomeContentView}>
                  <Text style={styles.sectionTitle}>Current Medications</Text>
                  <View style={styles.medCardContainer}>
                    {route.params.meds.map((med) => {
                      return(
                        <Pressable style={styles.medCard} onPress={() => onMedPress(med.id)}>
                          <Text style={styles.medTitles}>Medication Name: </Text>
                          <Text style={styles.medInfo}>{med.name}</Text>
                          <Text style={styles.medTitles}>Dosage: </Text>
                          <Text style={styles.medInfo}>{med.dosage}</Text>
                          <Text style={styles.medTitles}>Dosage Frequency: </Text>
                          <Text style={styles.medInfo}>{med.frequencyInt}x {med.frequencyUnit}</Text>
                          <Text style={styles.medTitles}>Refill Frequency: </Text>
                          <Text style={styles.medInfo}>{med.refillFrequencyInt}x {med.refillFrequencyUnit}</Text>
                          <Text style={styles.medTitles}>Refill Date: </Text>
                          <Text style={styles.medInfo}>{med.refillDate}</Text>
                          <Text style={styles.medTitles}>Refills Remaining: </Text>
                          <Text style={styles.medInfo}>{med.refillsLeft}</Text>
                        </Pressable>
                      )
                    })}
                  </View>
                </View>

                <View style={styles.footerView}>
                    <Text>{route.params.name}</Text>
                     <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log Out</Text>
                </View>

            </KeyboardAwareScrollView>
        </View>
    )
}
