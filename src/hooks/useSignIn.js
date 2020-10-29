import { useContext } from 'react';
import {SIGNIN} from '../graphql/mutations';
import {useApolloClient, useMutation} from '@apollo/react-hooks';
import AuthStorageContext from '../context/AuthStorageContext';


const useSignIn = () => {    
    const [mutate, result] = useMutation(SIGNIN);
    const authStorage = useContext(AuthStorageContext); 
    const apolloClient = useApolloClient();
         
    const signIn = async ({username, password}) => {                       
        const result = await mutate({variables: {username, password}}); 
        await authStorage.setAccessToken(result.data.authorize.accessToken);
        apolloClient.resetStore();
        return result;
        

    };

    return [signIn, result];
};

export default useSignIn;