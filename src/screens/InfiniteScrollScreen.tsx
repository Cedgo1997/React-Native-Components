import React, { useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import { FadeInImage } from '../components/FadeInImage';
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
            /* <Image
                source={
                    { uri: `https://picsum.photos/id/${item}/200/300` }
                }
                style={{
                    width: '100%',
                    height: 300
                }} /> */

            <FadeInImage uri={`https://picsum.photos/id/${item}/200/300`} />
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
                ListFooterComponent={() => (
                    <View style={{
                        height: 150,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <ActivityIndicator size={20} color='grey' />
                    </View>
                )}
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