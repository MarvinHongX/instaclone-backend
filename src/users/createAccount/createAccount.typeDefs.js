import { gql } from "apollo-server"

export default gql`
    type CreateAccountResult {
        ok: Boolean!
        token: String
        error: String
    }
    type Mutation {
        createAccount(
            firstName: String!
            lastName: String
            username: String!
            email: String!
            password: String!
        ): CreateAccountResult!
    }
`
