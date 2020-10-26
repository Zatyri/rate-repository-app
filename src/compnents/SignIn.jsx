import React from 'react';
import * as yup from 'yup';
import {Formik } from 'formik';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

const initialValues = {
    username: '',
    password: ''
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(5, 'Username length must be 5 characters or more')
        .required('Username is required'),
    password: yup
        .string()
        .min(5, 'Passowrd must be 5 characters or longer')
        .required('Password is required'),
});

const LoginForm = ({onSubmit, error, touched}) => {     
    return (
        <View style={{justifyContent:'center'}}>
            <FormikTextInput name="username" placeholder="Username" style={[styles.input, error.username && touched.username?styles.error:null]}/>
            <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} style={[styles.input, error.password && touched.password ? styles.error : null]}/>
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
        <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit}
        validationSchema={validationSchema}            
        >
            {({handleSubmit, errors, touched}) => <LoginForm onSubmit={handleSubmit} error={errors} touched={touched}/>}
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
    },
    error: {
        borderColor: 'rgb(200,20,20)'
    }
});

export default SignIn;
