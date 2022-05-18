// useQuery Apollo
import { useQuery } from '@apollo/client';
// Books Query
import { GET_BOOKS } from '../GraphQL/Queries';

export const useBooks = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  return { loading, error, data };
};
