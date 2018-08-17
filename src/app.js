import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import schema from '../graphql';

const app = express();

// GraphqQL server route
app.use('/graphql', graphqlHTTP(req => ({
  schema,
  pretty: true,
  graphiql: true
})));

mongoose.connect('mongodb://mongo:27017/graphql');

const server = app.listen(8080, () => {
  console.log('Listening at port', server.address().port);
});
