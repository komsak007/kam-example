import { graphQLHandler } from '../graphql-handler';
import { PriceService } from '@pricing-sample-nx/shared-services';
import {
  validateGetPriceRequest,
  validateGetPriceResponse,
} from '../../schema/price/price.shema';
import {
  IGetPriceInput,
  IGraphQLContext,
} from '@pricing-sample-nx/shared-models';

class PriceController {
  public static priceService: PriceService;
  public static instance: PriceController;
  public static getInstance(): PriceController {
    if (!PriceController.instance)
      PriceController.instance = new PriceController();
    return PriceController.instance;
  }

  constructor() {
    PriceController.priceService = new PriceService();
  }

  async getPriceHandler(
    parent,
    args: { input: IGetPriceInput },
    context: IGraphQLContext
  ) {
    console.log('args [LOG]:--> ', args);
    const priceRequest = validateGetPriceRequest(args.input);
    const priceResponse = await PriceController.priceService.getPrice(
      priceRequest
    );
    return priceResponse;
  }
}

const price: PriceController = new PriceController();
export const priceResolver = {
  Query: {
    getPrice: graphQLHandler({
      handler: price.getPriceHandler,
      validator: validateGetPriceResponse,
    }),
  },
};
