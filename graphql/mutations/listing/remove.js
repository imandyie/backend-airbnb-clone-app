import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import listingType from '../../types/listing';
import ListingModel from '../../../models/listing';

export default {
  type: listingType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    const removedListing = ListingModel
      .findByIdAndRemove(params._id)
      .exec();

    if (!removedListing) {
      throw new Error('Error removing listing');
    }

    return removedListing;
  }
};
