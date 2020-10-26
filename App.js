import React from 'react';
import {NativeRouter} from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';

import Main from './src/compnents/Main';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();

const App = () =>  {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main/>
      </ApolloProvider>  
    </NativeRouter>
  
  );
};

export default App;