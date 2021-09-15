import React, { CSSProperties, useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, Text, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>
}

export const FadeInImage = ({ uri, style }: Props) => {

    const { opacity, fadeIn } = useAnimation();

    const [isLoading, setIsLoading] = useState(false);
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {
                isLoading && <ActivityIndicator style={{ position: 'absolute' }} color='grey' size={30} />
            }
            <Animated.Image
                source={{ uri }}
                onLoadEnd={() => { fadeIn(); setIsLoading(false) }}
                style={{
                    ...style as Object,
                    opacity
                }}
            />
        </View>
    );
};
