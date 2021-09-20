import { useTheme } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View } from "react-native";
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ItemSeparator = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <View
            style={
                {
                    marginVertical: 10,
                    borderBottomWidth: 2,
                    opacity: 0.4,
                    borderColor: theme.dividerColor
                }
            } />
    )
}