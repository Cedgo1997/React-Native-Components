import React, { useRef } from 'react';
import { Animated, Button, PanResponder, StyleSheet, Text, View } from 'react-native';

export const Animation102Screen = () => {

    const { current: pan } = useRef(new Animated.ValueXY());

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x,
                dy: pan.y,
            },

        ], {
            useNativeDriver: false
        }),
        onPanResponderRelease: () => {
            Animated.spring(
                pan,
                {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: true
                },
            ).start()
        }
    })

    return (
        <View style={styles.container}>
            <Animated.View
                {...panResponder.panHandlers}
                style={{
                    ...styles.greenBox, transform: [{
                        translateX: pan.getLayout().left,
                    }, {
                        translateY: pan.getLayout().top
                    }]
                }}>
            </Animated.View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    greenBox: {
        backgroundColor: '#12DF7A',
        width: 150,
        height: 150
    },
});