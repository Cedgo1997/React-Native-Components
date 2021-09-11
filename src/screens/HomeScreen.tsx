import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { MenuItem } from '../interfaces/interfaces';
import { styles } from '../theme/appTheme';


const menuItems: MenuItem[] = [
    { name: 'Animation 101', icon: 'cube-outline', component: 'Animation101Screen' },
    { name: 'Animation 102', icon: 'albums-outline', component: 'Animation102Screen' },
]

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
