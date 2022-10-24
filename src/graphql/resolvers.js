// const { merge } = require('lodash')
// const userResolvers = require('../users/user.resolver')

import pkg from "lodash";
const { merge } = pkg;
import { userResolvers } from "../users/user.resolver.js";
import { productResolvers } from "../products/products.resolver.js";

const resolver = merge(userResolvers, productResolvers);

export { resolver };
