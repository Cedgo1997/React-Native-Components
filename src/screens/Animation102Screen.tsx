import React, { useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation102Screen = () => {

    const { pan, panResponder } = useAnimation();

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