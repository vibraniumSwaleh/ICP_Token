import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";
import { AuthClient } from "@dfinity/auth-client";

const init = async () => {
  const authClient = await AuthClient.create();

  if (authClient.isAuthenticated()) {
    console.log("Logged in!!");
    handleAuthenticated(authClient);
  } else {
    await authClient.login({
      indentityProvider: "https://indentity.ic0.app/#authorize",
      onSuccess: () => {
        handleAuthenticated(authClient);
      },
    });
  }

  async function handleAuthenticated(authClient) {
    ReactDOM.render(<App />, document.getElementById("root"));
  }
};

init();
