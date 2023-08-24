import { Button, StatusBar, StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ImageBackground
      source={require('../Meals/assets/images/t.jpeg')} // Replace with the path to your background image
      style={{ flex: 1 }}
    >
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#80cbea' },
            headerTintColor: 'black', // text color
            contentStyle: { backgroundColor: 'rgba(255, 255, 255, 0)' }, // Add some opacity to make the text more readable
          }}
        >
          <Stack.Screen
            name="CategoriesScreen"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name="MealsOverViewScreen"
            component={MealsOverViewScreen}
          />
          <Stack.Screen
            name="MealDetailScreen"
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({});
