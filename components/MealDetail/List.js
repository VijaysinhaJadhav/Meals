import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const List = ({data}) => {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
    listItem:{
        backgroundColor:'#fbf2db',
        borderRadius:4,
        paddingVertical:6,
        paddingHorizontal:8,
        marginVertical:4,
        marginHorizontal:12
    },
    itemText:{
        color:'black',
        textAlign:'center',
        fontWeight:'bold'
    }
});
