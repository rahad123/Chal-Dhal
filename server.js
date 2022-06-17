// const { ApolloServer } = require('apollo-server-express');
// const express = require('express');
// const schema = require('./src/graphql/schema');
// const User = require('./src/users/user.model')
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { schema } from './src/graphql/schema.js'

const app = express();
const server = new ApolloServer({
    ...schema
})
console.log('test');
await server.start();

server.applyMiddleware({ app });
     
app.listen(3001);  
           