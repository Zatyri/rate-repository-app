import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';


const AppBarTab = ({tabText}) => {
    return (
        <View>
            <TouchableWithoutFeedback>
                <Text appBarButton='appBarButton' style={{padding: 10}}>
                    {tabText}
                </Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default AppBarTab;
