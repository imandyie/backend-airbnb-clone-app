import {
  GraphQLList
} from 'graphql';

import listingType from '../../types/listing';
import ListingModel from '../../../models/listing';

export default {
  type: new GraphQLList(listingType),
  args: {},
  resolve (root, params, options) {
    return ListingModel
      .find()
      .exec();
  }
};
