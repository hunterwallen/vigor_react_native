import 'react-native-gesture-handler';
import React, { useEffect, useState, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, AddMedScreen, MedScreen, EditMedicationScreen } from './src/screens'
import { firebase } from './src/firebase/config'
import { HeaderBackButton } from '@react-navigation/stack'

import {styles} from './src/screens/styles.js'


const Stack = createStackNavigator();


export default function App() {

  const [user, setUser] = useState(null)

  const [loading, setLoading] = useState(true)

  const userRef = useRef(user)

  useEffect((()=> {
    setLoading(false)
  }))
  if (loading) {
    return (<></>)
  } else {

    return (

    <>

      <NavigationContainer name="auth">
        <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'}>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home',
                headerLeft: null
              }}/>
              <Stack.Screen name="AddMed" component={AddMedScreen} options={{title: "Add Medication"}} />
              <Stack.Screen name="ViewMed" component={MedScreen} options={{title: "Medication Details"}}  />
              <Stack.Screen name="EditMed" component={EditMedicationScreen}  options={{title: "Edit Medication"}} />
              <Stack.Screen name="Registration" component={RegistrationScreen} options={{title: "Create Account"}} />
        </Stack.Navigator>

      </NavigationContainer>

    </>
    );


  }

}
