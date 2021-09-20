import React from 'react';
import { StackNavigator } from './src/navigation/StackNavigator';
import 'react-native-gesture-handler';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

/* const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: ,
    background: 'black',
    text: ,
    card: ,
    border: ,
    notification: ,
  }
} */


export const App = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
};

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}