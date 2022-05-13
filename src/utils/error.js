// const constants = require('./constants');
// const { ApolloError } = require('apollo-server-express');

import { constants } from './constants.js'
import { ApolloError } from 'apollo-server-express'

const errors = {
  INTERNAL_SERVER_ERROR: {
    message: constants.HTTP_CODE_500_MESSAGE,
    code: constants.HTTP_CODE_500_CODE,
  },
  FORBIDDEN: {
    message: constants.HTTP_CODE_403_MESSAGE,
    code: constants.HTTP_CODE_403_CODE,
  },
  UNPROCESSABLE_ENTITY: {
    message: constants.HTTP_CODE_422_MESSAGE,
    code: constants.HTTP_CODE_422_CODE,
  },
  TOO_MANY_REQUESTS: {
    message: constants.HTTP_CODE_429_MESSAGE,
    code: constants.HTTP_CODE_429_CODE,  
  },
  CATEGORY_LIMIT_REACHED: {
    message: constants.CATEGORY_LIMIT_REACHED_MESSAGE,
    code: constants.CATEGORY_LIMIT_REACHED_CODE,
  },
  TAG_LIMIT_REACHED: {
    message: constants.TAG_LIMIT_REACHED_MESSAGE,
    code: constants.TAG_LIMIT_REACHED_CODE,
  },
  SLUG_NOT_UNIQUE: {
    message: constants.SLUG_NOT_UNIQUE_MESSAGE,
  },
  DOMAIN_NOT_UNIQUE: {
    message: constants.DOMAIN_NOT_UNIQUE_MESSAGE,
  },
  SITE_PREFIX_NOT_UNIQUE: {
    message: constants.SITE_PREFIX_NOT_UNIQUE_MESSAGE,
  },
  CUSTOM_DOMAIN_NOT_ALLOWED: {
    message: constants.CUSTOM_DOMAIN_NOT_ALLOWED,
  },
  REDEEM_SUCCESSFULLY: {
    message: constants.REDEEM_SUCCESSFULLY,
  },
  DETACHED_SUCCESSFULLY: {
    message: constants.DETACHED_SUCCESSFULLY,
  },
  LICENSE_ALREADY_EXISTS_IN_SITE: {
    message: constants.LICENSE_ALREADY_EXISTS_IN_SITE,
    code: constants.HTTP_CODE_400_CODE,
  },
  LICENSE_NOT_VALID: {
    message: constants.LICENSE_NOT_VALID,
    code: constants.HTTP_CODE_400_CODE,
  },
  withApolloError: (ERROR, customMessage = null) => {
    return new ApolloError(ERROR.message, ERROR.code, {
      error: true,
      message: customMessage ? customMessage : ERROR.message,
    });
  },
};

export { 
    errors
 };