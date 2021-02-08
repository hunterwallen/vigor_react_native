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

                <Image
                    style={styles.logo}
                    source={require('../../../assets/icon.png')}
                />

                <View>
                  <Text onPress={onAddMedPress}>Add Medication</Text>
                </View>

                <View style={styles.medCardContainer}>
                  {route.params.meds.map((med) => {
                    return(
                      <Pressable style={styles.medCard} onPress={() => onMedPress(med.id)}>
                        <Text>{med.name}</Text>
                      </Pressable>
                    )
                  })}
                </View>

                <View style={styles.footerView}>
                    <Text>{route.params.name}</Text>
                     <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log Out</Text>
                </View>
                
            </KeyboardAwareScrollView>
        </View>
    )
}
