
import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles';


class LoadingScreen extends React.Component {

  render = () => {

    return (


        <View style={styles.container}>
          <Image
              style={styles.logo}
              source={require('../../../assets/VigorLogo.png')}
          />
          <Text style={styles.text}>Loading...</Text>
        </View>
    )

  }
}

export default LoadingScreen
