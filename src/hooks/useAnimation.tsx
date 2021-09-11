import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {

    const { current: opacity } = useRef(new Animated.Value(0));
    const { current: position } = useRef(new Animated.Value(0));

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

    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMoving
    };
};
