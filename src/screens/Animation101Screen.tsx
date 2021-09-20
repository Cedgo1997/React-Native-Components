import React, { useContext, useRef } from 'react';
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    const { opacity, position, fadeIn, fadeOut, startMoving } = useAnimation();

    const { theme: { colors } } = useContext(ThemeContext);
    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox, backgroundColor: colors.primary, opacity, marginBottom: 5, transform: [{
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
        width: 150,
        height: 150
    },
});