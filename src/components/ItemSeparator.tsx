import React from 'react';
import { View } from "react-native";

export const ItemSeparator = () => {
    return (
        <View
            style={
                {
                    marginVertical: 10,
                    borderBottomWidth: 2,
                    opacity: 0.4
                }
            } />
    )
}