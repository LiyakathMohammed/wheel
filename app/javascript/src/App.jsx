import React from "react";

import { I18nextProvider } from "react-i18next";

import i18n from "common/i18n";
import { AuthProvider } from "contexts/auth";
import { UserProvider } from "contexts/user";

import Main from "./components/Main";

const App = props => (
  <AuthProvider>
    <UserProvider>
      <I18nextProvider i18n={i18n}>
        <Main {...props} />
      </I18nextProvider>
    </UserProvider>
  </AuthProvider>
);

export default App;
