import {gql} from 'apollo-boost';
import { USER } from './fragments';

export const SIGNIN = gql`
mutation Authorize($username: String!, $password: String!) {
    authorize(
        credentials: {
            username: $username, 
            password: $password
        })
        {
        user {
            ...user
        }        
        accessToken
        expiresAt  
    }  
} 
     ${USER} 
`;
