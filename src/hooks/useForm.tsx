import { useState } from "react";
import { ValueOf } from "react-native-gesture-handler/lib/typescript/typeUtils";

export const useForm = <T extends Object>(initState: T) => {

    const [state, setState] = useState(initState);

    const onChange = (value: ValueOf<T>, field: keyof typeof state) => {
        setState({
            ...state,
            [field]: value
        });
    }
    return {
        ...state,
        form: state,
        onChange
    };
};
