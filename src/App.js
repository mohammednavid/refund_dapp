import { useEffect, useState } from "react";
import {
  onPreSaleMint,
  onPublicSaleMint,
  sendRefund,
} from "./actions/smartActions";
import "./App.css";
import Navbar from "./components/Navbar";
import useMetaMask from "./hooks/useMetamask";

function App() {
  const { connect, disconnect, isActive, account, shouldDisable } =
    useMetaMask();

  const [quantityInput, setQuantityInput] = useState("1");
  const [proofInput, setProofInput] = useState("0x");
  const [refundInput, setRefundInput] = useState("1");
  const [preSaleMint, setPreSaleMint] = useState(true);

  const onPreMintSubmit = async (e) => {
    e.preventDefault();
    console.log("preSale");
    const input1 = parseInt(quantityInput);
    await onPreSaleMint(input1, [proofInput])
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const onPublicMintSubmit = async (e) => {
    e.preventDefault();
    const input = parseInt(quantityInput);
    console.log("publicSale");
    await onPublicSaleMint(input)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const onRefundSubmit = async (e) => {
    e.preventDefault();
    const input = parseInt(refundInput);
    await sendRefund(input)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="app">
      <Navbar />
      {/* mint */}
      <div className="background" />
      <div className="mint">
        <form
          className="container"
          onSubmit={preSaleMint ? onPreMintSubmit : onPublicMintSubmit}
        >
          <div className="toggle">
            <p
              onClick={() => setPreSaleMint(true)}
              className={preSaleMint && "mint_active"}
            >
              Pre Sale Mint
            </p>
            <p
              onClick={() => setPreSaleMint(false)}
              className={!preSaleMint && "mint_active"}
            >
              Public Sale Mint
            </p>
          </div>
          <br />
          <input
            type="number"
            placeholder="Please enter quantity"
            className="input"
            value={quantityInput}
            onChange={(e) => setQuantityInput(e.target.value)}
          />
          {preSaleMint && (
            <input
              type="text"
              placeholder="Please enter 0x"
              className="input"
              value={proofInput}
              onChange={(e) => setProofInput(e.target.value)}
            />
          )}
          <button type="submit" disabled={!account} className="btn">
            MINT NFT
          </button>
        </form>
      </div>

      {/* about */}
      <div className="about" id="about">
        <h1>ABOUT</h1>
        <p className="about_description">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
          <br />
          <br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
          <br />
          <br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
          <br />
          <br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>

      {/* refund */}
      <div className="refund" id="refund">
        <div className="refund_container">
          <form className="container" onSubmit={onRefundSubmit}>
            <h1>REFUND</h1>
            <br />
            <br />
            <input
              type="number"
              placeholder="Please enter NFT id"
              className="input"
              value={refundInput}
              onChange={(e) => setRefundInput(e.target.value)}
            />
            <button type="submit" disabled={!account} className="btn">
              Refund
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
