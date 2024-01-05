import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token } from "../../../declarations/token/index";

function Balance() {

  const [inputValue, setInputValue] = useState("");
  const [principalBalance, setPrincipalBalance] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  
  async function handleClick() {
    // console.log(inputValue);
    const principal = Principal.fromText(inputValue);
    const balanceQuery = await token.balanceOf(principal);
    const balanceSymbol = await token.getSymbol();

    setPrincipalBalance(balanceQuery.toLocaleString());
    setTokenSymbol(balanceSymbol);
    setIsHidden(false);
  }

  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p hidden={isHidden}>This account has a balance of: {principalBalance} {tokenSymbol}</p>
    </div>
  );
}

export default Balance;
