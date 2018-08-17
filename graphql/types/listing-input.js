import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'ListingInput',
  fields: () => ({
    _id: {type: GraphQLID},
    title: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});
