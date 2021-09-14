import React, { useState } from 'react';
import { Switch } from 'react-native';

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {
    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    };
    return (
        <Switch
            trackColor={{ false: "#D9D9DB", true: "#D9D9DB" }}
            thumbColor={isEnabled ? "#5856D6" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
};
