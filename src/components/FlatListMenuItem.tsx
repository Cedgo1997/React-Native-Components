import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/interfaces';

interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const { navigate } = useNavigation();
    const { colors } = useTheme();
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigate(menuItem.component as never)}>
            <View style={styles.container}>
                <Icon name={menuItem.icon} size={20} color='lightblue' />
                <Text style={styles.textItem}>{menuItem.name}</Text>
                <View style={{ flex: 1 }} />
                <Icon name="caret-forward-outline" color="grey" size={25} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    textItem: {
        marginHorizontal: 5
    },
});
