import React, { useState } from 'react';
import { ActivityIndicator, Animated, Text, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
    uri: string;
}

export const FadeInImage = ({ uri }: Props) => {

    const { opacity, fadeIn } = useAnimation();

    const [isLoading, setIsLoading] = useState(false);
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {
                isLoading && <ActivityIndicator style={{position: 'absolute'}} color='grey' size={30} />
            }
            <Animated.Image
                source={{ uri }}
                onLoadEnd={() => { fadeIn(); setIsLoading(false) }}
                style={{
                    width: '100%',
                    height: 300,
                    opacity
                }}
            />
        </View>
    );
};
