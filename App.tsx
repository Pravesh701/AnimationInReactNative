import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import simpleTesting from './src/screens/example/simpleTesting'

//Custom Imports
import MovingBoll from './src/screens/MovingBoll/movingBoll'
import MyScreen from './src/screens/MyScreen'

type Props = {}

const App = (props: Props) => {
  useEffect(() => {
    // simpleTesting()
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <MyScreen />
      {/* <MovingBoll /> */}
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})