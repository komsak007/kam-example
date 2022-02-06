import { gql } from 'apollo-angular';

export const GET_PRICE_QUERY = gql`
  query getPrice($input: GetPriceInput) {
    getPrice(input: $input) {
      price
      normalPrice
      message
    }
  }
`;
//kam
export const ADD_PRODUCT_MUTATE = gql`
  mutation addProduct($name:String,$quantity:Int,$price:Int) {
    addProduct(name:$name,quantity:$quantity,price:$price) {
      status
      message
    }
  }
`;
