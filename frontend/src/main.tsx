import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {Auth0Provider} from "@auth0/auth0-react";

const DOMAIN = import.meta.env.VITE_DOMAIN_AUTH;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID_AUTH;
const REDIRECT_URI = window.location.origin;

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain={DOMAIN}
    clientId={CLIENT_ID}
    authorizationParams={{
      redirect_uri: REDIRECT_URI,
      connection: "google-oauth2"
    }}
    cacheLocation="localstorage"
    useRefreshTokens={false}
  >
    <App/>
  </Auth0Provider>
);
