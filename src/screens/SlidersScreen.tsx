import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { Slide, sliderItems } from '../data/sliderData';


const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

export const SlidersScreen = () => {

    const renderItem = (item: Slide) => {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 40,
                justifyContent: 'center'
            }}>
                <Image source={item.img} style={{ width: 350, height: 400, resizeMode: 'center' }} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>{item.desc}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView
            style={{ flex: 1, paddingTop: 50 }}
        >
            <Carousel
                data={sliderItems}
                renderItem={({ item }) => renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6'
    },
    subTitle: {
        fontSize: 16,
    }
});