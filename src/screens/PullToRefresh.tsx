import React, { useContext, useState } from 'react';
import { RefreshControl, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const PullToRefresh = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();
    const { theme: { colors } } = useContext(ThemeContext);
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
                    progressBackgroundColor={colors.primary}
                    colors={['white', 'red', 'orange']}
                    title="Refreshing" /* IOS */
                    titleColor={colors.text} /* IOS */
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull to Refresh" />
                {data && <Text style={{ color: colors.text }}>{data}</Text>}
            </View>
        </ScrollView>
    );
};
