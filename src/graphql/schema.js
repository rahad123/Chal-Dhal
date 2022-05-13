// const usersTypeDefs = require('./typeDefs')
// const userResolvers = require('./resolvers')
// console.log("test") 
import { resolver } from './resolvers.js'
import { typeDef } from './typeDefs.js'
const schema = {
    typeDefs: typeDef,
    resolvers: resolver,
};

// module.exports = schema;
export { schema }

