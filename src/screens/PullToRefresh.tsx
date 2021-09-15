import React, { useState } from 'react';
import { RefreshControl, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const PullToRefresh = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log("End");
            setData("Hello, World!")
            setRefreshing(false);
        }, 1500);
    }
    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressBackgroundColor="lightblue"
                    colors={['white', 'red', 'orange']}
                    title="Refreshing" /* IOS */
                    titleColor="black" /* IOS */
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull to Refresh" />
                {data && <Text>{data}</Text>}
            </View>
        </ScrollView>
    );
};
