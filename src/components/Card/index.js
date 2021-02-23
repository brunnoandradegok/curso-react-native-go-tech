import React from 'react'
import { View, Image, StyleSheet} from 'react-native'

const Card = ({ uri }) => {
  return (
    <View style={styles.container}>
      <Image source={uri} resizeMode="contain" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 180,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: 50,
    marginTop: 50
  }
})

export default Card 