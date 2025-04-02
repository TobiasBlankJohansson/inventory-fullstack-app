import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {Auth0Provider} from "@auth0/auth0-react";

const DOMAIN = import.meta.env.VITE_DOMAIN;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain={DOMAIN}
    clientId={CLIENT_ID}
    authorizationParams={{
      redirect_uri: REDIRECT_URI,
      connection: "google-oauth2"
    }}
    cacheLocation="localstorage"
    useRefreshTokens={true}
  >
    <App/>
  </Auth0Provider>
);
