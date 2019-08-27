const gql = require('graphql-tag');

const typeDefs = gql`
    type UserInfo {
        id: String
        status: String
        firstName: String
        lastName: String
        email: String
        providerType: String
        providerName: String
    }

    type Query {
        getUserInfo(id: String!): UserInfo
    }
`;

module.exports = {
    typeDefs,
};