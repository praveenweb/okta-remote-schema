const OKTA_API_KEY = process.env.OKTA_API_KEY;
const OKTA_DOMAIN = process.env.OKTA_DOMAIN;

const fetch = require('node-fetch');

const resolvers = {
    Query: {
        getUserInfo: (root, args, context, info) => {
            const userId = args.id;

            const url = 'https://' + OKTA_DOMAIN + '/api/v1/users/' + userId;
            const options = {
                'headers': {
                    'Authorization': 'SSWS ' + OKTA_API_KEY
                }
            }
            return fetch(url, options)
                .then(res => res.json())
                .then(body => {
                    const results = body;
                    const userInfo = {
                        id: body.id, status: body.status, firstName: body.profile.firstName, lastName: body.profile.lastName, email: body.profile.email, providerType: body.credentials.provider.type, providerName: body.credentials.provider.name
                    };
                    return userInfo;
                });
        },
    },
};

module.exports = {
    resolvers,
};