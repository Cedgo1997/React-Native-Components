import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import 'react-native-gesture-handler';

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    /* primary: ,
    background: 'black',
    text: ,
    card: ,
    border: ,
    notification: , */
  }
}

export const App = () => {
  return (
    <NavigationContainer theme={customTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};
