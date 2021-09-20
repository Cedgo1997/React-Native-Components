import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

interface Props {
    title: string;
    size?: number;
}

export const HeaderTitle = ({ title, size = 30 }: Props) => {

    const { top } = useSafeAreaInsets();
    const { theme: { colors } } = useContext(ThemeContext);
    /* Header for FlatList */
    return (
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
            <Text style={{ ...styles.title, fontSize: size, color: colors.text }}>{title}</Text>
        </View>
    )
};
