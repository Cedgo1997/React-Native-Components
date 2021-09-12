import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { styles } from '../theme/appTheme';


export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    /* Header for FlatList */
    const renderListHeader = () => {
        return (
            <View style={{ marginTop: top + 20, marginBottom: 20 }}>
                <Text style={styles.title}>Menu Options</Text>
            </View>
        )
    }

    /* Item separator */
    const itemSeparator = () => {
        return (
            <View style={{ marginVertical: 10, borderBottomWidth: 2, opacity: 0.4 }} />
        )
    }

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItems}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                ListHeaderComponent={renderListHeader} /* This is to render headers on FlatList */
                ItemSeparatorComponent={itemSeparator} /* A component to separate list items */
            />
        </View>
    );
};
