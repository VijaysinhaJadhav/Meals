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
        color: '#3498DB',
        padding:6,
        borderBottomColor:'#3498DB',
        borderBottomWidth:2
      },
})