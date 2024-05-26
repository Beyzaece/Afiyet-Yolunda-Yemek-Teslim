import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import CuisineScreen from './screen/CuisineScreen';
import RestaurantScreen from './screen/RestaurantScreen'; 
import RestaurantDetailScreen from './screen/RestaurantDetail.Screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cuisine" component={CuisineScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetailScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;