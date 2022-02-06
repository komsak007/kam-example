import { gql } from 'apollo-angular';

export const PriceTypeDefs = gql`
  type GetPriceResponse {
    price: Int
    normalPrice: Int
    message: String
  }
  input GetPriceInput {
    itemCode: String
    quantity: Int
    coupon: String
  }

  extend type Query {
    getPrice(input: GetPriceInput): GetPriceResponse
  }
`;
