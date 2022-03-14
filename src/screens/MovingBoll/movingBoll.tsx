import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

type Props = {}

const MovingBoll = (props: Props) => {

  let position = new Animated.ValueXY({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => {
      Animated.spring(position, {
        toValue: { x: 200, y: 500 },
        useNativeDriver: false
      }).start()
    }, 1000);
  }, [])


  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.ball} />
    </Animated.View>
  )
}

export default MovingBoll;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ball: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 30
  }
})