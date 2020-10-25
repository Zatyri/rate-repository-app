import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';


const AppBarTab = ({tabText, link}) => {
    return (
        <Link to={link} component={TouchableWithoutFeedback}>            
                <Text appBarButton='appBarButton' style={{padding: 10}}>
                    {tabText}
                </Text>
        </Link>
    );
};

export default AppBarTab;
