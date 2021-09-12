import React, { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';

export const SwitchScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(!isEnabled);

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: "#D9D9DB", true: "#5856D6" }}
                thumbColor={isEnabled ? "#5856D6" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
