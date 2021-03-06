import { gql } from "apollo-boost";

export const REPOSITORY = gql`
  fragment repository on Repository {
    name
    id
    ownerName             
    fullName       
    ratingAverage
    reviewCount
    forksCount
    ownerAvatarUrl
    description
    language
    stargazersCount
    url
  }
`;

export const USER = gql`
  fragment user on User {
    id
    username
  }
`;