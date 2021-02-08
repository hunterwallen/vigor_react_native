import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import {decode, encode} from 'base-64'
import { firebase } from './src/firebase/config'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();


export default function App() {

  const [user, setUser] = useState(null)




  return (

<>

    <NavigationContainer name="auth">
      <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'}>
            <Stack.Screen name="Login">
            { props => <LoginScreen {...props} extraData={user} />}
            </Stack.Screen>
            <Stack.Screen name="Home" >
              {props => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>
            <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>

    </NavigationContainer>

</>
  );
}
