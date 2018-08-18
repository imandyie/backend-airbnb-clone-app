import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';

import listingType from '../../types/listing';
import ListingModel from '../../../models/listing';

export default {
  type: listingType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    return ListingModel
      .findById(params.id)
      .exec();
  }
};
