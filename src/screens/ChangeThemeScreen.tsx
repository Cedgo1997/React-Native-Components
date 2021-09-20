import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const ChangeThemeScreen = () => {

    const { setDarkTheme, setLightTheme } = useContext(ThemeContext);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Theme' />
            <TouchableOpacity
            onPress={setDarkTheme}
                activeOpacity={0.8}
                style={{
                    backgroundColor: '#5856D6',
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
                }} >Light / Dark</Text>
            </TouchableOpacity>
        </View>
    );
};
