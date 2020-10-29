import { useContext } from 'react';
import {USER_LOGGED_IN} from '../graphql/queries';
import {useApolloClient, useQuery} from '@apollo/react-hooks';
import AuthStorageContext from '../context/AuthStorageContext';


const useSignOut = () => {    
    const {data} = useQuery(USER_LOGGED_IN, {fetchPolicy: "cache-and-network"});
    const authStorage = useContext(AuthStorageContext); 
    const apolloClient = useApolloClient();

    const user = data ? data.authorizedUser : null;
         
    const signOut = async () => {                    
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
    };

    return [user, signOut];
};

export default useSignOut;