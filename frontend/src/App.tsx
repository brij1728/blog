import "./App.css";

import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import ThirdPartyEmailPassword, {
  Apple,
  Facebook,
  Github,
  Google,
} from "supertokens-auth-react/recipe/thirdpartyemailpassword";

import { AppRouter } from "./routes";
import Session from "supertokens-auth-react/recipe/session";

SuperTokens.init({
  appInfo: {
    appName: "Blog App",
    apiDomain: "http://localhost:5000",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [
          Github.init(),
          Google.init(),
          Facebook.init(),
          Apple.init(),
        ],
      },
    }),
    Session.init(),
  ],
});

function App() {
  return (
    <div className="App">
      <SuperTokensWrapper>
        <AppRouter />
      </SuperTokensWrapper>
    </div>
  );
}

export default App;
