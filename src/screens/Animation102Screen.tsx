import React, { useContext, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation102Screen = () => {

    const { pan, panResponder } = useAnimation();
    const { theme: { colors } } = useContext(ThemeContext);
    return (
        <View style={styles.container}>
            <Animated.View
                {...panResponder.panHandlers}
                style={{
                    ...styles.greenBox, backgroundColor: colors.card, transform: [{
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
        width: 150,
        height: 150
    },
});