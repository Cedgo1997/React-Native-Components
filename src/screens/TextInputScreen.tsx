import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {

    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        number: '',
        isSubscribed: false
    });

    return (
        /* To show input while keyboard is on */
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title="Text Input" />
                        <TextInput
                            style={stylesText.textInput}
                            placeholder='Name'
                            autoCorrect={false}
                            autoCapitalize='words'
                            onChangeText={(value) => onChange(value, 'name')}
                        />
                        <TextInput
                            style={stylesText.textInput}
                            placeholder='Email'
                            autoCorrect={false}
                            autoCapitalize='none'
                            keyboardType='email-address'
                            onChangeText={(value) => onChange(value, 'email')}
                        />
                        <TextInput
                            style={stylesText.textInput}
                            placeholder='Number'
                            keyboardType='numeric'
                            onChangeText={(value) => onChange(value, 'number')}
                        />
                        <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />

                        <Text>Suscribirme</Text>

                        <Text style={{ fontSize: 18 }}>{JSON.stringify(form, null, 3)}</Text>
                    </View>
                    {/* To scroll while input is visible with and keyboard */}
                </TouchableWithoutFeedback>
                <View style={{ height: 50 }} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const stylesText = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    }
});