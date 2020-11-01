import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';


const SignOut = ({tabText, link, signOut}) => {

    return (
        <Link to={link} component={TouchableWithoutFeedback} onPress={signOut}>            
                <Text appBarButton='appBarButton' style={{padding: 10}}>
                    {tabText}
                </Text>
        </Link>
    );
};

export default SignOut;