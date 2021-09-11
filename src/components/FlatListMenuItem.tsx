import React from 'react';
import { Text, View } from 'react-native';
import { MenuItem } from '../interfaces/interfaces';

interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
    return (
        <View>
            <Text>{menuItem.name} - {menuItem.icon}</Text>
        </View>
    );
};
