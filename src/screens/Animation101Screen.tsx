import React, { useRef } from 'react';
import { Animated, Button, StyleSheet, Text, View } from 'react-native';

export const Animation101Screen = () => {

    const { current: opacity } = useRef(new Animated.Value(0));

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start();
    }

    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start();
    }

    return (
        <View style={styles.container}>
            <Animated.View style={{ ...styles.purpleBox, opacity, marginBottom: 5 }}></Animated.View>
            <Button title="Fade In" onPress={fadeIn} />
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