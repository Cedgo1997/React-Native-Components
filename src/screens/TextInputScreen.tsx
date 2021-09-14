import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Text Input" />
            <TextInput
                style={stylesText.textInput}
            />
        </View>
    );
};

const stylesText = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10
    }
});
