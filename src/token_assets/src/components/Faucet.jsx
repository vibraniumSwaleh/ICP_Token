import React, { useState } from "react";
import { token } from "../../../declarations/token";

function Faucet() {
  const [disable, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState("Gimme gimme");

  async function handleClick(event) {
    setDisable(true);
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
        Get your free TOK tokens here! Claim 10,000 TOK tokens to your
        account.
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
