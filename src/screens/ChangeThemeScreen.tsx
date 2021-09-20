import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const ChangeThemeScreen = () => {

    const { setDarkTheme, setLightTheme, theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Theme' />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <TouchableOpacity
                    onPress={setDarkTheme}
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: colors.primary,
                        width: 150,
                        height: 50,
                        justifyContent: 'center',
                        borderRadius: 20,
                    }}>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }} >Dark</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={setLightTheme}
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: colors.primary,
                        width: 150,
                        height: 50,
                        justifyContent: 'center',
                        borderRadius: 20,
                    }}>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }} >Light</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
