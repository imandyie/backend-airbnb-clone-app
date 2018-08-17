import {
  GraphQLBoolean
} from 'graphql';

import ListingModel from '../../../models/listing';

export default {
  type: GraphQLBoolean,
  resolve (root, params, options) {
    return ListingModel
      .remove({})
      .exec();
  }
};
