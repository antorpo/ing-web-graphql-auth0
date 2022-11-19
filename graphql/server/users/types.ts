import { gql } from "apollo-server-micro";
import { GenericResponse } from "../generic";

export const UserTypes = gql`
  # Generic types
  ${GenericResponse}

  type UserResponse implements IGenericResponse {
    code: Int!
    status: EnumStatus!
    message: String!
    data: User
  }

  type UserListResponse implements IGenericResponse {
    code: Int!
    status: EnumStatus!
    message: String!
    data: [User!]!
  }

  # Mutation type definition"
  type Mutation {
    updateUser(input: UserUpdateInput!): UserResponse
  }

  # Query type definition"
  type Query {
    getUsers: UserListResponse
    getUserById(id: ID!): UserResponse
    getUserByEmail(email: String!): UserResponse
  }

  # User types definition"
  type User {
    id: ID
    name: String!
    email: String!
    phoneNumber: String
    roleId: String!
    token: String
  }

  # Input types definition"
  input UserUpdateInput {
    userId: String!
    email: String
    name: String
    password: String
    phoneNumber: String
  }
`;
