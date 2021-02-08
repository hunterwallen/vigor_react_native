import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config'
import { HeaderLeftButton } from '@react-navigation/native'




export default function LoginScreen({navigation}) {

    const onFooterLinkPress = () => {
        navigation.navigate('Login', {user: null})
    }
    navigation.setOptions({
      headerLeft: () => {
        <HeaderLeftButton onPress = {() => {
          navigation.navigate('Home')
        }} />
      }
    })


    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/icon.png')}
                />
                <View style={styles.footerView}>
                     <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log Out</Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}
