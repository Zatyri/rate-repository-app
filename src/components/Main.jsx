import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import Text from './Text';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';

const Main = () => {
    return (
        <View style={styles.container}>
        <Text header='header' style={{padding: 5}}>Rate Repository Application</Text>
        <AppBar />
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/" exact>
            <RepositoryList />
          </Route>
          <Redirect to="/"/>
        </Switch>
      
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      marginTop: Constants.statusBarHeight,
      flexGrow: 1,
      flexShrink: 1,    
      justifyContent: 'flex-start',
      
    },
  });

export default Main;
