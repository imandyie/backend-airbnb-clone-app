import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

const app = express();

mongoose.connect('mongodb://mongo/graphql');

const server = app.listen(8080, () => {
  console.log('Listening at port', server.address().port);
});