import { gql } from 'apollo-angular';

export const GET_SAMPLE_QUERY = gql`
  query getSample($id: String) {
    getSample(id: $id) {
      no
      name
    }
  }
`;
