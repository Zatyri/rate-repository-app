import { gql } from 'apollo-boost';
import { REPOSITORY } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
          node {
            ...repository
          }
      }
    }
  }
  ${REPOSITORY}
`;

export const GET_REPOSITORIES_BY_ID = gql`
  query repository($id: ID!){
    repository (id: $id){
      ...repository
    }
  }
  ${REPOSITORY}
`;

export const USER_LOGGED_IN = gql`
  query{
    authorizedUser {
      id
      username
    }
  }
`;
