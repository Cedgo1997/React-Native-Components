import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

interface Props {
    title: string;
    size?: number;
}

export const HeaderTitle = ({ title, size = 30 }: Props) => {

    const { top } = useSafeAreaInsets();

    /* Header for FlatList */
    return (
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
            <Text style={{ ...styles.title, fontSize: size }}>{title}</Text>
        </View>
    )
};
