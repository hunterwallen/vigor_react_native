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

          const nextRefill = {key:'nextRefill', color:'blue'}
          const lastRefill = {key:'lastRefill', color:'red'}
          let thisMonth = Number(med.refillDate.slice(5,7))
          let thisYear = Number(med.refillDate.slice(0,4))
          let thisDay = Number(med.refillDate.slice(8,10))
          let nextDate = med.refillDate
          console.log(med.refillFrequencyUnit);
          if(med.refillFrequencyUnit === "monthly"){

            while(refillsLeft){
              console.log(nextDate);
              if(refillsLeft === 1) {
                if(refills[nextDate]){
                  if(!refills[nextDate].dots.includes(lastRefill)){
                    refills[nextDate].dots.push(lastRefill)
                  }
                } else {
                  refills[nextDate] = {dots:[lastRefill], color: "red"}
                }
                return
              } else {

                if(refills[nextDate]){
                  if(!refills[nextDate].dots.includes(nextRefill)){
                    refills[nextDate].dots.push(nextRefill)
                  }
                } else {
                  refills[nextDate] = {dots:[nextRefill]}
                }
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
              if(thisMonth === 2 && thisDay > 27){
                let difference = thisDay - 27
                thisDay = "0" + difference
                thisMonth ++
                thisMonth.toString()
              } else if ((thisMonth === 2 || 6 || 9 || 11) && thisDay > 30){
                thisDay = "01"
                thisMonth ++
                if(thisMonth < 10) {
                  thisMonth = "0" + thisMonth
                } else {
                  thisMonth.toString()
                }
              }
              nextDate = thisYear + '-' + thisMonth + '-' + thisDay
            }
          } else if (med.refillFrequencyUnit === "yearly") {

              let refillInMonths = Math.floor((12 / Number(med.refillFrequencyInt)))
              while(refillsLeft){
                console.log(nextDate);
                if(refillsLeft === 1) {
                  if(refills[nextDate]){
                    if(!refills[nextDate].dots.includes(lastRefill)){
                      refills[nextDate].dots.push(lastRefill)
                    }
                  } else {
                    refills[nextDate] = {dots:[lastRefill], color: "red"}
                  }
                  return
                } else {

                  if(refills[nextDate]){
                    if(!refills[nextDate].dots.includes(nextRefill)){
                      refills[nextDate].dots.push(nextRefill)
                    }
                  } else {
                    refills[nextDate] = {dots:[nextRefill]}
                  }
                  refillsLeft--
                }
                thisMonth = Number(thisMonth)
                if(thisMonth + refillInMonths <= 12){
                  thisMonth += refillInMonths
                  if (thisMonth < 10) {
                    thisMonth = "0" + thisMonth
                  } else {
                    thisMonth.toString()
                  }
                } else if (thisMonth + refillInMonths > 12) {
                  thisYear = thisYear++
                  thisMonth += refillInMonths
                  thisMonth -= 12
                  thisMonth = "0" + thisMonth
                }
                if(thisMonth === 2 && thisDay > 27){
                  let difference = thisDay - 27
                  thisDay = "0" + difference
                  thisMonth ++
                  thisMonth.toString()
                } else if ((thisMonth === 2 || 6 || 9 || 11) && thisDay > 30){
                  thisDay = "01"
                  thisMonth ++
                  if(thisMonth < 10) {
                    thisMonth = "0" + thisMonth
                  } else {
                    thisMonth.toString()
                  }
                }
                nextDate = thisYear + '-' + thisMonth + '-' + thisDay
              }

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

                <View style={styles.logoHeader}>
                  <Image
                      style={styles.logo}
                      source={require('../../../assets/VigorLogo.png')}
                  />
                </View>


                <View style={styles.mainHomeContentView}>
                  <Text style={styles.sectionTitle}>My Medications</Text>



                  <View style={styles.medCardContainer}>
                  <TouchableOpacity onPress={onAddMedPress} style={styles.addMedButton}>
                      <Text style={styles.addMedButtonText}>New Medication</Text>
                  </TouchableOpacity>
                  
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
                <Text style={styles.sectionTitle}>My Calendar</Text>
                  <View style={styles.calendar}>
                    <Calendar
                      minDate={'2021-01-01'}
                      markedDates={refillDates}
                      markingType={'multi-dot'}
                      />
                      <View style={styles.calendarKey}>
                        <Text style={{color:"blue"}}> • Next Refill</Text>
                        <Text style={{color:"red"}}> • Last Refill</Text>
                      </View>

                    </View>


                </View>



                <View style={styles.footerView}>
                      <TouchableOpacity onPress={onFooterLinkPress} style={styles.logoutButton}>
                        <Text style={styles.logoutButtonText}>Log Out</Text>
                     </TouchableOpacity>
                </View>

            </KeyboardAwareScrollView>
        </View>
    )
}
