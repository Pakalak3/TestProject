import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationConatiner} from '@react-navigation/native';
import HomePage from './Componants/Homepage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationConatiner>
      <Stack.Navigator
        initialRouthName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationConatiner>
  );
};

export default App;
