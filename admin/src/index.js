import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dashboard-login.us.auth0.com"
    clientId={process.env.CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin + "/dashboard"
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);