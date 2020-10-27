import {SIGNIN} from '../graphql/mutations';
import {useMutation} from '@apollo/react-hooks';

const useSignIn = () => {
    
    const [mutate, result] = useMutation(SIGNIN);
    
         
    const signIn = async ({username, password}) => {
           
                
        const result = await mutate({variables: {username, password}});
        return result;
        

    };

    return [signIn, result];
};

export default useSignIn;