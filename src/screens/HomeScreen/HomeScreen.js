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

    const onMedPress = (med) => {
      navigation.navigate('ViewMed', {user: route.params, med: med})
    }


    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">


                <View style={styles.mainHomeContentView}>
                  <Text style={styles.sectionTitle}>Current Medications</Text>
                  <View style={styles.medCardContainer}>
                    {route.params.meds.map((med) => {
                      return(
                        <Pressable style={styles.medCard} onPress={() => onMedPress(med)}>
                          <Text style={styles.medTitles}>Medication Name: </Text>
                          <Text style={styles.medInfo}>{med.name}</Text>
                          <Text style={styles.medTitles}>Dosage: </Text>
                          <Text style={styles.medInfo}>{med.dosage}</Text>
                          <Text style={styles.medTitles}>Dosage Frequency: </Text>
                          <Text style={styles.medInfo}>{med.frequencyInt}x {med.frequencyUnit}</Text>
                        </Pressable>
                      )
                    })}
                  </View>
                </View>

                <View>
                  <Pressable onPress={onAddMedPress} style={styles.addMedButton}>
                    <Text style={styles.addMedButtonText}>New Medication</Text>
                  </Pressable>
                </View>

                <View style={styles.footerView}>
                    <Text>{route.params.name}</Text>
                     <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log Out</Text>
                </View>

            </KeyboardAwareScrollView>
        </View>
    )
}
