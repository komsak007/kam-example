import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  IAddProductResponse,
  IGetPriceInput,
  IGetPriceResponse,
} from '@pricing-sample-nx/shared-models';
import { ADD_PRODUCT_MUTATE, GET_PRICE_QUERY } from './query/price.query';

@Injectable()
export class ProductService {
  constructor(public apollo: Apollo) {}

  getPrice(input: IGetPriceInput): Observable<IGetPriceResponse> {
    return this.apollo
      .query({
        query: GET_PRICE_QUERY,
        fetchPolicy: 'no-cache',
        variables: { input },
      })
      .pipe(map((x) => (<{ getPrice: IGetPriceResponse }>x.data)['getPrice']));
  }

  addProduct(name: string, quantity: number,price:number): Observable<IAddProductResponse> {
    return this.apollo
      .mutate({
        mutation: ADD_PRODUCT_MUTATE,
        fetchPolicy: 'no-cache',
        variables: { name, quantity: Number(quantity),price:Number(price) },
      })
      .pipe(
        map((x) => (<{ addProduct: IAddProductResponse }>x.data)['addProduct'])
      );
  }
}

// Service -> Pipeline => [Mapping , Trasform] -> Return (Subscribe)
