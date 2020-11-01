import React from 'react';
import { TextInput as NativeTextInput } from 'react-native';


// eslint-disable-next-line no-unused-vars
const TextInput = ({ style, error, ...props }) => {

    const TextInputStyle = [style];

    return <NativeTextInput style={TextInputStyle} {...props} />;
};

export default TextInput;
