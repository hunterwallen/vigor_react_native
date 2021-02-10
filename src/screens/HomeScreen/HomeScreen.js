import React, { useState, useEffect } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config'
import { HeaderBackButton } from '@react-navigation/stack'
import { Calendar } from 'react-native-calendars'


export default function HomeScreen({navigation, route}) {

    const [refillDates, setRefillDates] = useState({})


    const onFooterLinkPress = () => {
        navigation.navigate('Login', {user: null})
    }
    const onAddMedPress = () => {
      navigation.navigate('AddMed', {user: route.params})
    }

    const onMedPress = (med) => {
      navigation.navigate('ViewMed', {user: route.params, med: med})
    }

    const markRefillDate = () => {
      let refills = {}
      route.params.meds.map((med)=> {
        let refillsLeft = Number(med.refillsLeft)
        if(refillsLeft === 0){
          return
        } else {
            let thisMonth = Number(med.refillDate.slice(5,7))
            let thisYear = Number(med.refillDate.slice(0,4))
            let thisDay = Number(med.refillDate.slice(8,10))
            let nextDate = med.refillDate
          while(refillsLeft){
            if(refillsLeft === 1) {
              refills[nextDate] = {selected: true, marked: true, selectedColor: 'red'}
              return
            } else {
              refills[nextDate] = {selected: true, marked: true, selectedColor: 'blue'}
              refillsLeft--
            }
            thisMonth = Number(thisMonth)
            if(thisMonth < 9){
              thisMonth++
              thisMonth = "0" + thisMonth
            } else if (thisMonth === 12) {
              thisMonth = "01"
              thisYear = thisYear++
            } else {
              thisMonth++
            }
            nextDate = thisYear + '-' + thisMonth + '-' + thisDay
          }
        }
      })
      setRefillDates(refills)
    }

    useEffect(()=> {
      markRefillDate()
    }, [route.params.meds])

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
                        <Pressable style={styles.medCard} onPress={() => onMedPress(med)} key={med.id}>
                          <View style={styles.medCardTitleBox}>
                            <Text style={styles.medName}>{med.name}</Text>
                          </View>
                          <View style={styles.dosageFrequencyBox}>
                            <Text style={styles.medInfo}>{med.dosage}</Text>
                            <Text style={styles.medInfo}>{med.frequencyInt}x {med.frequencyUnit}</Text>
                          </View>

                        </Pressable>
                      )
                    })
                    }
                  </View>
                </View>

                <View style={styles.calendarContainer}>
                <Text style={styles.sectionTitle}>Medication Calendar</Text>
                  <Calendar
                    minDate={'2021-01-01'}
                    markedDates={refillDates}
                    />
                    <Text style={styles.keyBlue}> • Refill Date</Text>

                </View>

                <TouchableOpacity onPress={onAddMedPress} style={styles.addMedButton}>
                    <Text style={styles.addMedButtonText}>New Medication</Text>
                </TouchableOpacity>

                <View style={styles.footerView}>
                    <Text>{route.params.name}</Text>
                     <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log Out</Text>
                </View>

            </KeyboardAwareScrollView>
        </View>
    )
}
