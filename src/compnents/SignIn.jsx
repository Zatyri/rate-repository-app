import React from 'react';


import {Formik } from 'formik';

import FormikTextInput from './FormikTextInput';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Text from './Text';

const initialValues = {
    username: '',
    password: ''
};

const LoginForm = ({onSubmit}) => { 

    return (
        <View style={{justifyContent:'center'}}>
            <FormikTextInput name="username" placeholder="Username" style={styles.input}/>
            <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} style={styles.input}/>
            <TouchableWithoutFeedback onPress={onSubmit} >
                <Text style={styles.button}>Login</Text>
            </TouchableWithoutFeedback>
        </View>
        
    );
};

const SignIn = () => {
    const onSubmit = values => {
        console.log(values);
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({handleSubmit}) => <LoginForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

const styles = StyleSheet.create({
    input: {
        borderStyle: "solid",
        borderColor: "rgb(125,125,125)",
        borderWidth: 2,
        borderRadius: 15,
        margin: 10,
        marginTop: 2,
        marginBottom: 2,
        padding: 5,
        fontSize: 35,
        textAlign: "center"
    },
    button: {
        borderRadius: 15,
        margin: 10,
        marginTop: 2,
        marginBottom: 2,
        padding: 5,
        fontSize: 35,
        backgroundColor: 'rgb(75,75,225)',
        color: 'rgb(255,255,255)',
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default SignIn;
