
import { graphQLHandler } from '../graphql-handler';
import { validateResponseSample } from '../../schema/common/common.schema';
import {
  IGraphQLContext,
  ISampleModel,
} from '@pricing-sample-nx/shared-models';

class CommonController {
  getSampleHandler(
    parent,
    args: { id: string },
    context: IGraphQLContext
  ): ISampleModel {
    console.log('args [LOG]:--> ', args);
    return { _id: 'xxxx', name: 'Name', no: 1123 } as ISampleModel;
  }
}

const common: CommonController = new CommonController();
export const commonResolver = {
  Query: {
    getSample: graphQLHandler({
      handler: common.getSampleHandler,
      validator: validateResponseSample,
    }),
  },
};