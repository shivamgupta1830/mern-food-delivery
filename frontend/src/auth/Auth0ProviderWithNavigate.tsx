import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const domain = import.meta.env.VITE_Auth0_DOMAIN;
  const clientId = import.meta.env.VITE_Auth0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_Auth0_CALLBACK_URL;

  if (!domain || !redirectUri || !clientId) {
    throw new Error("unable to initialise auth");
  }
  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("USER", user);
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
