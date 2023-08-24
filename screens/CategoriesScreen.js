import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data/dummyData';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({navigation}) => {
  const renderCategoryItem = itemData => {
    const pressHandler = () => {
      navigation.navigate('MealsOverViewScreen', {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <View style={{}}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        //   key={1}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
