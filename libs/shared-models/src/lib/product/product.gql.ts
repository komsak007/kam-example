import { gql } from 'apollo-angular';

export const ProductTypeDefs = gql`
  type AddProductResponse {
      status:Int
      message:String
  }

  type Mutation {
    addProduct(name:String,quantity:Int,price:Int): AddProductResponse
  }
`;
