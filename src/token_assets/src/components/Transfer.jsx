import React, { useState } from "react";
import {Principal} from "@dfinity/principal";
import { token } from "../../../declarations/token";

function Transfer()
{
  const [transferID, setTransferID] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  
  async function handleClick()
  {
    const recipientID = Principal.fromText(transferID);
    const amountToTransfer = Number(transferAmount);
    await token.transfer(recipientID, amountToTransfer);
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
          <button id="btn-transfer" onClick={handleClick} >
            Transfer
          </button>
        </p>
      </div>
    </div>
  );
}

export default Transfer;
