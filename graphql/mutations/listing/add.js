import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import listingInputType from '../../types/listing-input';
import listingType from '../../types/listing';
import ListingModel from '../../../models/listing';

export default {
  type: listingType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(listingInputType)
    }
  },
  async resolve (root, params) {
    const listingModel = new ListingModel(params.data);
    const newListing = await listingModel.save();

    if (!newListing) {
      throw new Error('Error adding new listing');
    }
    return newListing;
  }
};
