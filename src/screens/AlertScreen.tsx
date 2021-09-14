import React from 'react';
import { Alert, Button, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {
    const showAlert = () => {
        Alert.alert(
            "This is my alert",
            "This is an Alert Message",
            [
                { text: "Cancel", style: "destructive", onPress: () => console.log("Cancel Pressed") },
                { text: "Ok", onPress: () => console.log("Ok Pressed") }
            ],
            {
                cancelable: true,
                onDismiss: () => console.log('On dismiss')
            }
        )
    }
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts" />
            <Button
                title="Show Alert"
                onPress={showAlert}
            />
        </View>
    );
};
