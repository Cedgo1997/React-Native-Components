import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { Slide, sliderItems } from '../data/sliderData';
import { useAnimation } from '../hooks/useAnimation';


const { width: screenWidth } = Dimensions.get('screen');

interface Props extends StackScreenProps<any, any> { };
export const SlidersScreen = ({ navigation }: Props) => {

    const [slideIndex, setSlideIndex] = useState(0);
    const { opacity, fadeIn, fadeOut } = useAnimation();

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
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                alignItems: 'center',
            }}>
                <Pagination
                    dotsLength={sliderItems.length}
                    activeDotIndex={slideIndex}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 8,
                        backgroundColor: 'black'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
                <Animated.View style={{ opacity }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        backgroundColor: '#5856D6',
                        width: 140,
                        height: 50,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                        activeOpacity={0.8}
                        disabled={slideIndex === sliderItems.length - 1 ? false : true}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={{ fontSize: 25, color: 'white' }}>Entrar</Text>
                        <Icon
                            name='chevron-forward-outline'
                            color='white'
                            size={40}
                        />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }

    const slideShow = (index: number) => {
        setSlideIndex(index);
        index === sliderItems.length - 1 ? fadeIn() : fadeOut();
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
                onSnapToItem={(index) => slideShow(index)}
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