import * as reactRouterDom from "react-router-dom";

import { About, Article, ArticleList, Home, NotFound } from "../pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SessionAuth } from "supertokens-auth-react/recipe/session";
import { ThirdPartyEmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/thirdpartyemailpassword/prebuiltui";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [
          ThirdPartyEmailPasswordPreBuiltUI,
        ])}
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <SessionAuth>
              <About />
            </SessionAuth>
          }
        />
        <Route path="/articles" element={<ArticleList />} />
        <Route
          path="/articles/:slug"
          element={
            <SessionAuth>
              <Article />
            </SessionAuth>
          }
        />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
