# okta-remote-schema

[Okta](https://okta.com) is a complete access management platform that provides secure identity management with Single Sign-On, Multi-factor Authentication, Lifecycle Management (Provisioning), and more. In a typical app, Okta is the gateway for connecting the app, devices and users via APIs. 

## Adding Okta as Remote Schema

- Get the Okta API Key by visting the [create an API Token docs](https://developer.okta.com/docs/guides/create-an-api-token/overview/)
- Set the API key as OKTA_API_KEY environment variable.
- Get the Okta Domain by visiting the following [find your domain docs](https://developer.okta.com/docs/guides/find-your-domain/overview/)
- We need to input the Okta Domain as OKTA_DOMAIN environment variable.

This custom resolver is used to accept a user's id as an argument and will return a data pertaining to that user.

## Okta API Documentation

[API Documentation](https://developer.okta.com/docs/reference/).

## Deploy with Glitch

1. Click the following button to edit on glitch

   [![glitch-deploy-button](https://raw.githubusercontent.com/hasura/graphql-engine/master/community/boilerplates/auth-webhooks/nodejs-express/assets/deploy-glitch.png)](http://glitch.com/edit/#!/import/github/praveenweb/okta-remote-schema)

2. Add the following environment variables in the `.env` file on glitch.

   ```env
   OKTA_API_KEY=xxx
   OKTA_DOMAIN=xxx
   PORT=3000
   ```

## Running Locally

```bash
npm install
PORT=3000 OKTA_API_KEY=xxx OKTA_DOMAIN=xxx npm start
```
