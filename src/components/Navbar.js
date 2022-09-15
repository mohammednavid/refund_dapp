import React, { useEffect } from "react";
import useMetaMask from "../hooks/useMetamask";

const Navbar = () => {
  const { connect, disconnect, isActive, account, shouldDisable } =
    useMetaMask();
  // useEffect(() => {
  //   async function asyncFn() {
  //     //Events to detect changes in account or network.
  //     if (window.ethereum) {
  //       window.ethereum.on("accountsChanged", async function (accounts) {
  //         window.location.reload();
  //       });

  //       window.ethereum.on("networkChanged", async function (networkId) {
  //         window.location.reload();
  //       });
  //     }
  //   }
  //   asyncFn();
  // }, [isActive, account]);

  // useEffect(() => {
  //   async function asyncFn() {
  //     //Events to detect changes in account or network.
  //     if (window.ethereum) {
  //       await window.ethereum.request({
  //         method: "wallet_switchEthereumChain",
  //         params: [{ chainId: "0x4" }], // chainId must be in hexadecimal numbers
  //       });
  //     }
  //   }
  //   asyncFn();
  // }, [isActive, account]);

  return (
    <nav className="nav">
      {isActive && (
        <p className="nav_address">
          {account?.slice(0, 7) + "..." + account?.slice(36, 42)}
        </p>)}
      <div className="nav_links">
        {!isActive ? (
          <a href="#" onClick={connect}>
            CONNECT
          </a>
        ) : (
          <a href="#" onClick={disconnect}>
            LOGOUT
          </a>
        )}
        <a href="#about">ABOUT</a>
        <a href="#refund">REFUND</a>
      </div>
    </nav>
  );
};

export default Navbar;
