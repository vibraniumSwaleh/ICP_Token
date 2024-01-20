import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token } from "../../../declarations/token";

function Transfer() {
  const [transferID, setTransferID] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [results, setResults] = useState("");

  async function handleClick()
  {
    setIsDisabled(true);
    const recipientID = Principal.fromText(transferID);
    const amountToTransfer = Number(transferAmount);
    const results = await token.transfer(recipientID, amountToTransfer);
    setIsDisabled(false);
    setResults(results);
    setIsHidden(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={transferID}
                onChange={(e) => setTransferID(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled}>
            Transfer
          </button>
          <p hidden={isHidden}>
            {results}
          </p>
        </p>
      </div>
    </div>
  );
}

export default Transfer;
