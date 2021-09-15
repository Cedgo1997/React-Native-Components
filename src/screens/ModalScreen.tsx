import React, { useState } from 'react';
import { Alert, Button, Modal, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={styles.globalMargin} >
            <HeaderTitle title="ModalScreen" />
            <Button title="Open Modal" onPress={() => setIsVisible(true)} />
            <Modal
                animationType='slide'
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {
                    Alert.alert("Modal Closed", "Modal now is closed, you can do whatever you want.");
                    setIsVisible(false);
                }}
            >
                {/* Modal background */}
                <View style={
                    {
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                    }
                }>
                    {/* Modal body */}
                    <View style={{ backgroundColor: 'white' }} >
                        <HeaderTitle title="Modal" />
                        <Text>Modal Body</Text>
                        <Button title="Close" onPress={() => setIsVisible(false)} />
                    </View>
                </View>
            </Modal>

        </View >
    );
};
