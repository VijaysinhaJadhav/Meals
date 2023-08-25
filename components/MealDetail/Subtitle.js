import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subtitle = ({children}) => {
  return (
    <Text style={styles.subTitle}>{children}</Text>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    subTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginHorizontal: 12,
        marginVertical: 4,
        textAlign: 'center',
        color: '#B2355F',
        padding:6,
        borderBottomColor:'#fbf2db',
        borderBottomWidth:2
      },
})