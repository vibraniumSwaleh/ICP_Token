import React, { useState } from "react";
import { token } from "../../../declarations/token";
import { AuthClient } from "../../../../node_modules/@dfinity/auth-client/lib/cjs/index";
import { canisterId, createActor } from "../../../declarations/token/index";

function Faucet() {
  const [disable, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState("Gimme gimme");
  
  async function handleClick(event) {
    setDisable(true);

    /* Use this when deploying to Internet Computer

    const authClient = await AuthClient.create();
    const indentity = await authClient.getIdentity();

    const authenticatedCanister = createActor(canisterId, {
      agentOptions: {
        indentity,
      },
    });

    const results = await authenticatedCanister.payOut();

    -- remove this below and use the one above: const results = await token.payOut(); ---
    */
    
    const results = await token.payOut();
    setButtonText(results);
  }
  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>
        Get your free TOK tokens here! Claim 10,000 TOK tokens to your account.
      </label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={disable}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
