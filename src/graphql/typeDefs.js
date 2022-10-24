// const { merge } = require('lodash')
// const usersTypeDefs = require('../users/user.typeDef')

// import pkg from 'lodash';
// const { merge } = pkg;
import { mergeTypeDefs } from "@graphql-tools/merge";
import { usersTypeDefs } from "../users/user.typeDef.js";
import { productsTypeDefs } from "../products/products.typeDef.js";

// const typeDef = merge(
//     usersTypeDefs
// );

const typeDef = mergeTypeDefs([usersTypeDefs, productsTypeDefs]);

export { typeDef };
