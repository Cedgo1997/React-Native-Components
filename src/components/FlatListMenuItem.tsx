import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { MenuItem } from '../interfaces/interfaces';

interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
    const { theme: { colors } } = useContext(ThemeContext);
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigate(menuItem.component as never)}>
            <View style={styles.container}>
                <Icon name={menuItem.icon} size={20} color={colors.primary} />
                <Text style={styles.textItem}>{menuItem.name}</Text>
                <View style={{ flex: 1 }} />
                <Icon name="caret-forward-outline" color={colors.primary} size={25} />
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
