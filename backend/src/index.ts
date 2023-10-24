import Session from 'supertokens-node/recipe/session';
import ThirdPartyEmailPassword from 'supertokens-node/recipe/thirdpartyemailpassword';
import express from 'express';
import supertokens from 'supertokens-node';

supertokens.init({
  framework: 'express',
  supertokens: {
    connectionURI: 'https://try.supertokens.com',
    // apiKey: <API_KEY(if configured)>,
  },
  appInfo: {
    appName: 'Blog App',
    apiDomain: 'http://localhost:5000',
    websiteDomain: 'http://localhost:3000',
    apiBasePath: '/auth',
    websiteBasePath: '/auth',
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      /*TODO: See next step*/
    }),
    Session.init(), // initializes session features
  ],
});

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
