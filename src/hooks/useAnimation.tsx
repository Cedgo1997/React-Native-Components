import { useRef } from "react";
import { Animated, PanResponder } from "react-native";

export const useAnimation = (duration: number = 300) => {

    /* Fade and opacity */
    const { current: opacity } = useRef(new Animated.Value(0));
    const { current: position } = useRef(new Animated.Value(0));

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration,
            useNativeDriver: true
        }).start();
    }

    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    }

    const startMoving = (initialPosition: number = -100, duration: number = 300) => {

        position.setValue(initialPosition);
        Animated.timing(position, {
            toValue: 0,
            duration,
            useNativeDriver: true,
        }).start();
    }

    /* PanResponder, Drag */
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

    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMoving,
        pan,
        panResponder
    };
};
