import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefresh } from '../screens/PullToRefresh';
import { SectionListScreen } from '../screens/SectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlidersScreen } from '../screens/SlidersScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Animation101" component={Animation101Screen} />
                <Stack.Screen name="Animation102" component={Animation102Screen} />
                <Stack.Screen name="Switch" component={SwitchScreen} />
                <Stack.Screen name="Alert" component={AlertScreen} />
                <Stack.Screen name="TextInput" component={TextInputScreen} />
                <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
                <Stack.Screen name="SectionList" component={SectionListScreen} />
                <Stack.Screen name="Modal" component={ModalScreen} />
                <Stack.Screen name="InfiniteScroll" component={InfiniteScrollScreen} />
                <Stack.Screen name="Slides" component={SlidersScreen} />
                <Stack.Screen name="ChangeTheme" component={ChangeThemeScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}