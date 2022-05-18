// useQuery Apollo
import { useQuery } from '@apollo/client';
// Book Query
import { GET_BOOK } from '../GraphQL/Queries';

export const useBook = (id) => {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: {
      id,
    },
  });

  return { loading, error, data };
};
