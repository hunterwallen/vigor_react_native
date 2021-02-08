import 'react-native-gesture-handler';
import React, { useEffect, useState, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import {decode, encode} from 'base-64'
import { firebase } from './src/firebase/config'
import { HeaderBackButton } from '@react-navigation/stack'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();


export default function App() {

  const [user, setUser] = useState(null)

  const userRef = useRef(user)





  return (

<>

    <NavigationContainer name="auth">
      <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'}>
            <Stack.Screen name="Login" component={LoginScreen} options={{user: user}} />
            <Stack.Screen name="Home" component={HomeScreen} options={{
              headerLeft: (props) => {
                <HeaderBackButton {...props} onPress = {() => {
                  navigation.navigate('Home')
                }} />
              }
            }} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>

    </NavigationContainer>

</>
  );
}
