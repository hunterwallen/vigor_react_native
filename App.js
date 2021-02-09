import 'react-native-gesture-handler';
import React, { useEffect, useState, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, AddMedScreen, MedScreen, EditMedicationScreen } from './src/screens'
import { firebase } from './src/firebase/config'
import { HeaderBackButton } from '@react-navigation/stack'


const Stack = createStackNavigator();


export default function App() {

  const [user, setUser] = useState(null)

  const userRef = useRef(user)





  return (

<>

    <NavigationContainer name="auth">
      <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Vigor',
              headerLeft: null
            }}/>
            <Stack.Screen name="AddMed" component={AddMedScreen} />
            <Stack.Screen name="ViewMed" component={MedScreen}  />
            <Stack.Screen name="EditMed" component={EditMedicationScreen}  />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>

    </NavigationContainer>

</>
  );
}
