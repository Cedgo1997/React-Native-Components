import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

    const loadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i
        }
        setNumbers([...numbers, ...newArray]);
    }

    const renderItem = (item: number) => {
        return (
            <Text
                style={textStyles.textItem}
            >
                {item}
            </Text>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={numbers}
                keyExtractor={(item, index) => item.toString() + index}
                renderItem={({ item }) => renderItem(item)}
                ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
};

const textStyles = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150
    }
});