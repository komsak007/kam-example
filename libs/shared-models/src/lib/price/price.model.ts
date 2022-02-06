export interface IGetPriceResponse {
  price: number;
  normalPrice: number;
  message: string;
}

export interface IGetPriceInput {
  itemCode: string;
  quantity: number;
  coupon: string;
}
