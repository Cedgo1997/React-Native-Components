import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { menuItems } from '../data/menuItems';
import { styles } from '../theme/appTheme';


export const HomeScreen = () => {

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
                ListHeaderComponent={() => <HeaderTitle title="Menu Options" />} /* This is to render headers on FlatList */
                ItemSeparatorComponent={itemSeparator} /* A component to separate list items */
            />
        </View>
    );
};
