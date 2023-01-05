import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    redirectUri="http://localhost:3000"
    audience="https://weather.app"
    scope="view_mode:card view_mode:table view_mode:both read:current_user read:users"
  >
    <App />
  </Auth0Provider>
);

reportWebVitals();
