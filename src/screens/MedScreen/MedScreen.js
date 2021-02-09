import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';


export default function MedScreen({navigation, route}) {

  let med = route.params.med

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
            <Text style={styles.medInfo}>{route.params.med.refillDate}</Text>
          </View>
          <View style={styles.medInfoLine}>
            <Text style={styles.medTitles}>Refills Remaining: </Text>
            <Text style={styles.medInfo}>{route.params.med.refillsLeft}</Text>
          </View>
        </View>

      </KeyboardAwareScrollView>
    </View>
  )
}
