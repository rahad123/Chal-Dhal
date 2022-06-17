// const { gql } = require('apollo-server-express');
import { gql } from 'apollo-server-express'

const productsTypeDefs = gql `
  input FaqInput {
      question: String
      answer: String
  }

  enum PriceTypeEnum {
      FREE
      PAID
  }

  enum ProductTypeEnum {
      STATIC
      CMS
  }

  type faq {
      question: String
      answer: String
  }

  type Product {
      id: ID!
      title: String
      desc: String
      priceType: PriceTypeEnum
      productType: ProductTypeEnum
      quantity: String
      userId: ID
      isPublished: Boolean
      faq: [faq]
  }

  input CreateProductInput {
    title: String!
    desc: String!
    priceType: PriceTypeEnum
    productType: ProductTypeEnum
    userId: ID
    faq: [FaqInput]!
  }

  input UpdateProductInput {
    title: String
    desc: String
    priceType: PriceTypeEnum
    productType: ProductTypeEnum
    isPublished: Boolean
    faq: [FaqInput]
  } 

  input AggregationProductInput {
    id: ID!
    title: String
    desc: String
    priceType: PriceTypeEnum
    productType: ProductTypeEnum
    quantity: String
  }

  type Query {
      getProducts: [Product]
      getSingleProduct(id: ID): Product
      getProductAggregation(userId: ID): Product
  }

  type Mutation {
      deleteProduct(id:ID): Product
      createProduct(createProductInput: CreateProductInput): Product
      updateProduct(id: ID, updateProductInput: UpdateProductInput): Product
  }

`;

// module.exports = usersTypeDefs;
export { productsTypeDefs }   