import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Animation101Screen = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.purpleBox}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    },
});