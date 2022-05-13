// const { gql } = require('apollo-server-express');
import { gql } from 'apollo-server-express'

const usersTypeDefs = gql `
input CreateUserInput {
    username: String
    email: String
    password: String
  }

input UpdateUserInput {
    username: String
    email: String
    password: String
} 

  type User {
      id: ID!
      username: String
      email: String
      password: String
  }

  type Query {
      getUsers: [User]
      getSingleUser(id:ID): User
  }

  type Mutation {
      deleteUser(id:ID): User
      createUser(createUserInput: CreateUserInput): User
      updateUser(id: ID, updateUserInput: UpdateUserInput): User
  }

`;

// module.exports = usersTypeDefs;
export { usersTypeDefs }   