import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {
    const [state, setstate] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    });

    const onChange = (value: boolean, field: keyof typeof state) => {
        setstate({
            ...state,
            [field]: value
        })
    }
    const { theme: { colors } } = useContext(ThemeContext);
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <HeaderTitle title="Switch" />
                <View style={styles.switchRow}>
                    <Text style={{...styles.switchText, color: colors.text}}>isActive</Text>
                    <CustomSwitch isOn={state.isActive} onChange={(value) => onChange(value, 'isActive')} />
                </View>
                <View style={styles.switchRow}>
                    <Text style={{...styles.switchText, color: colors.text}}>isHungry</Text>
                    <CustomSwitch isOn={state.isHungry} onChange={(value) => onChange(value, 'isHungry')} />
                </View>
                <View style={styles.switchRow}>
                    <Text style={{...styles.switchText, color: colors.text}}>isHappy</Text>
                    <CustomSwitch isOn={state.isHappy} onChange={(value) => onChange(value, 'isHappy')} />
                </View>
                <Text style={{...styles.switchText, color: colors.text}}>
                    {JSON.stringify(state, null, 3)}
                </Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    switchText: { fontSize: 25 },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8
    }
});
