import {
  CommonTypeDefs,
  PriceTypeDefs,
  ProductTypeDefs,
  TodoTypeDefs
} from '@pricing-sample-nx/shared-models';

import { merge } from 'lodash';

import { commonResolver } from '../controllers/common/common.controller';
import { productResolver } from '../controllers/product/product.controller'
import { priceResolver } from '../controllers/price/price.controller';
import { todoResolver } from '../controllers/todo/todo.controller';

export const typeDefs = [CommonTypeDefs, PriceTypeDefs,ProductTypeDefs,TodoTypeDefs];

export const resolvers = merge(commonResolver, priceResolver,productResolver,todoResolver);
