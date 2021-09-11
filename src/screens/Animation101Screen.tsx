import React, { useRef } from 'react';
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    const { opacity, position, fadeIn, fadeOut, startMoving } = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox, opacity, marginBottom: 5, transform: [{
                    translateY: position
                }]
            }}></Animated.View>
            <Button title="Fade In" onPress={() => {
                fadeIn();
                startMoving(100, 800)
            }} />
            <Button title="Fade Out" onPress={fadeOut} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    },
});