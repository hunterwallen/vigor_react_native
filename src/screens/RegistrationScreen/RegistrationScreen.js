import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, Linking } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import styles from './styles';
import { firebase } from '../../firebase/config'
import axios from 'axios'

export default function RegistrationScreen({navigation}) {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                setLoading(true)
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    firstName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                      let axiosData = {
                        name: data.firstName,
                        email: data.email,
                        firestoreId: data.id
                      }
                      axios.post('https://mighty-river-62498.herokuapp.com/patients', axiosData).then(()=>{
                        navigation.navigate('Home', {name: data.firstName, id: data.id, email: data.email, meds: []})
                        setTimeout(()=> {
                          setLoading(false)
                        }, 1000)
                      })
                    })
                    .catch((error) => {
                        setLoading(false)
                        alert(error)
                    });
            })
            .catch((error) => {
              setLoading(false)
                alert(error)
        });
    }


    if (loading) {
      return (
        <>
          <LoadingScreen/>
        </>
      )
    } else {
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/VigorLogo.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='First Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>

                    <Text style={styles.footerLink}
                        onPress={() => Linking.openURL('https://www.termsfeed.com/live/c24226d9-4e2a-4a37-a940-a8e5a6565c29')}>
                    Privacy Policy
                  </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
  }
}
