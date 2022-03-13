import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

//Custom Imports
import MovingBoll from './src/screens/MovingBoll/movingBoll'

type Props = {}

const App = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <MovingBoll />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})