import React from 'react';
import { Alert, Button, Modal, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import prompt from 'react-native-prompt-android';

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

    const showPrompt = () => {
        prompt(
            'Enter text',
            'This is for educational purposes',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: info => console.log('OK Pressed, info: ' + info) },
            ],
            {
                type: 'plain-text',
                cancelable: true,
                placeholder: 'Put anything you want'
            }
        );
    }
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts" />
            <Button
                title="Show Alert"
                onPress={showAlert}
            />
            <Button
                title="Show Propmt"
                onPress={showPrompt}
            />
        </View>
    );
};
