import React from 'react';
import { StyleSheet } from 'react-native';
import {useField} from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
    errorText: {      
      padding: 5,
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 15,
      color: 'rgb(200,20,20)',
      backgroundColor: 'rgb(225,225,0)',
      textAlign: 'center'
    },
  });

const FormikTextInput = ({name, ...props}) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;
    return (
        <>
          <TextInput
            onChangeText={value => helpers.setValue(value)}
            onBlur={() => helpers.setTouched(true)}
            value={field.value}            
            error={showError}            
            {...props}            
        />
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </>
    );
};

export default FormikTextInput;
