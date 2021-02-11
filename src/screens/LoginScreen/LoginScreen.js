import React, { useState, useEffect } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, Linking } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import styles from './styles';
import axios from 'axios'
import { firebase } from '../../firebase/config'

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }

    const onLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
          setLoading(true)
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef.doc(uid).get().then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                          setLoading(false)
                            alert("We cannot find an account for that email.")
                            return;
                        }
                        let user = firestoreDocument.data()

                        console.log(user);
                        axios.get('https://mighty-river-62498.herokuapp.com/medications/' + user.id).then((response) => {
                          navigation.navigate('Home', {name: user.firstName, id: user.id, email: user.email, meds: response.data})
                          setTimeout(()=> {
                            setLoading(false)
                        }, 1000)
                      })
                    })
                    .catch(error => {
                        setLoading(false)
                        alert(error)
                    });
              }
            )
            .catch(error => {
                setLoading(false)
                alert(error)
            })
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
                  <TouchableOpacity
                      style={styles.button}
                      onPress={() => onLoginPress()}>
                      <Text style={styles.buttonTitle}>Log in</Text>
                  </TouchableOpacity>
                  <View style={styles.footerView}>
                      <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
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
