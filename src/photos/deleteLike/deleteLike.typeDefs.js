import { gql } from "apollo-server-express";

export default gql`
  type DeleteLikeResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    deleteLike(id: Int!): DeleteLikeResult!
  }
`;