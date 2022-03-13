import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {}

const MovingBoll = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>movingBoll</Text>
    </View>
  )
}

export default MovingBoll;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})