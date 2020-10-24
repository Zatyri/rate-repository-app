import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const Main = () => {
    return (
        <View style={styles.container}>
        <Text header='header' style={{padding: 5}}>Rate Repository Application</Text>
        <AppBar />
        <RepositoryList />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      marginTop: Constants.statusBarHeight,
      flexGrow: 1,
      flexShrink: 1,    
      justifyContent: 'center'
    },
  });

export default Main;
