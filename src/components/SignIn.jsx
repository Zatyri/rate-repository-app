import React from 'react';
import {useHistory} from 'react-router-native';
import * as yup from 'yup';
import {Formik } from 'formik';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
    username: '',
    password: ''
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(4, 'Username length must be 4 characters or more')
        .required('Username is required'),
    password: yup
        .string()
        .min(5, 'Passowrd must be 5 characters or longer')
        .required('Password is required'),
});

const LoginForm = ({onSubmit, error, touched}) => {     
    return (
        <View style={{justifyContent:'center'}}>
            <FormikTextInput name="username" placeholder="Username" style={[styles.input, error.username && touched.username?styles.error:null]} testID='username' />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} style={[styles.input, error.password && touched.password ? styles.error : null]} testID='password' />
            <TouchableWithoutFeedback onPress={onSubmit} testID='submitButton'>
                <Text style={styles.button}>Login</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

export const SignInContainer = ({signIn}) => {    
    const history = useHistory();   

    const onSubmit = async values => {
       const { username, password } = values;                  
       try {
        const {data} = await signIn({ username, password });
        console.log(data);
        history.push('/');
      } catch (e) {
        console.log(e);
      }
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

const SignIn = () => {
    const [signIn] = useSignIn();     
    return <SignInContainer signIn={signIn}/>;
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
