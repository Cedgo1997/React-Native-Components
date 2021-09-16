import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Slide, sliderItems } from '../data/sliderData';


const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

export const SlidersScreen = () => {

    const [slideIndex, setSlideIndex] = useState(0);

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

    const pagination = () => {
        return (
            <Pagination
                dotsLength={sliderItems.length}
                activeDotIndex={slideIndex}
                containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
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
                onSnapToItem={(index) => setSlideIndex(index)}
            />
            {pagination()}
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