import { useQuery } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { GET_REPOSITORIES_BY_ID } from '../graphql/queries';


const useRepository = () => {
  const [repository, setRepository] = useState();

  const getData = async (id) => {
    const { data, loading, refetch } = await useQuery(GET_REPOSITORIES_BY_ID, {
      variables: { id },
      fetchPolicy: "cache-and-network",
    });
    return {
      repository: data ? data.repositories : null,
      loading,
      refetch,
    };  
  };
  
  
  const getRepository = (id) => {
    const data = getData(id);
    setRepository(data);
  };
  

  return [repository, getRepository];
};

export default useRepository;
