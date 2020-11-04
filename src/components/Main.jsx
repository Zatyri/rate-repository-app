import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect, useLocation } from 'react-router-native';
import { useQuery } from '@apollo/react-hooks';

import Text from './Text';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import RepositoryItem from './RepositoryItem';
import { GET_REPOSITORIES_BY_ID } from '../graphql/queries';

const Main = () => {  
  let test = useLocation();  
  let repositoryId = test.pathname.substring(1);
  
  const { data, loading } = useQuery(GET_REPOSITORIES_BY_ID, {
    variables: { "id": repositoryId },
    fetchPolicy: "cache-and-network",
  });

  return (
      <View style={styles.container}>
      <Text header='header' style={{padding: 5}}>Rate Repository Application</Text>
      <AppBar />
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/:id"> 
          <RepositoryItem repository={data} loading={loading} showLink={true}/>
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
