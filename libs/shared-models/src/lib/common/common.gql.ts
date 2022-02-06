import { gql } from 'apollo-angular';

export const CommonTypeDefs = gql`
  scalar Date

  type SampleModel {
    name: String
    no: Int
  }

  type Query {
    getSample(id: String): SampleModel
  }
`;
