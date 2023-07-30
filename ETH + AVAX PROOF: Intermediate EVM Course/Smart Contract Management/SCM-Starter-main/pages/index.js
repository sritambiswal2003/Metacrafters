import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import atm_abi from "../artifacts/contracts/SCM.sol/SCM.json";
import backgroundImage from "../assets/background-image.jpg";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(null);
  const [account, setAccount] = useState(null);
  const [atm, setATM] = useState(null);
  const [balance, setBalance] = useState(0);

  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [buyItem, setBuyItem] = useState("");

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(new ethers.providers.Web3Provider(window.ethereum));
    }
  };

  const handleAccount = (account) => {
    if (account && account.length > 0) {
      console.log("Account connected:", account[0]);
      setAccount(account[0]);
    } else {
      console.log("No account found");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    try {
      const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
      handleAccount(accounts);
      getATMContract();
    } catch (error) {
      console.error("Error connecting to the account:", error);
    }
  };

  const getATMContract = () => {
    if (ethWallet) {
      const signer = ethWallet.getSigner();
      const atmContract = new ethers.Contract(contractAddress, atmABI, signer);
      setATM(atmContract);
    }
  };

  const getBalance = async () => {
    try {
      if (atm) {
        const balance = await atm.getBalance();
        setBalance(balance.toNumber());
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  const deposit = async () => {
    if (atm && depositAmount) {
      try {
        const tx = await atm.deposit(depositAmount);
        await tx.wait();
        getBalance();
        setDepositAmount("");
      } catch (error) {
        console.error("Error depositing ETH:", error);
      }
    }
  };

  const withdraw = async () => {
    if (atm && withdrawAmount) {
      try {
        const tx = await atm.withdraw(withdrawAmount);
        await tx.wait();
        getBalance();
        setWithdrawAmount("");
      } catch (error) {
        console.error("Error withdrawing ETH:", error);
      }
    }
  };

  const buy = async () => {
    if (atm && buyItem) {
      try {
        const tx = await atm.buy(buyItem);
        await tx.wait();
        getBalance();
        setBuyItem("");
      } catch (error) {
        console.error("Error buying item:", error);
      }
    }
  };

  const [showBalance, setShowBalance] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [depositAmount, setDepositAmount] = useState("");

  useEffect(() => {
    getWallet();
  }, []);

  const initUser = () => {
    // Check if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>;
    }

    // Check if user is connected. If not, connect to their account
    if (!account) {
      return (
        <button onClick={connectAccount}>
          Please connect your Metamask wallet
        </button>
      );
    }

    return (
      <div className="atm-container">
        <div>
          <button
            style={{ width: "200px", marginBottom: "10px", fontSize: "25px" }}
            onClick={() => setShowAccount(!showAccount)}
          >
            {showAccount ? "Hide Account" : "Show Account"}
          </button>
          {showAccount && <p>Your Account: {account}</p>}
        </div>
        <div>
          <button
            style={{ width: "200px", marginBottom: "10px", fontSize: "25px" }}
            onClick={() => {
              setShowBalance(!showBalance);
              if (!showBalance) {
                getBalance();
              }
            }}
          >
            {showBalance ? "Hide Balance" : "Show Balance"}
          </button>
          {showBalance && <p>Your Balance: {balance}</p>}
        </div>
        <div>
          <button
            style={{ width: "200px", marginBottom: "10px", fontSize: "25px" }}
            onClick={deposit}
          >
            Deposit ETH
          </button>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            placeholder="Enter deposit amount"
            style={{ width: "180px" }}
          />
        </div>
        <div>
          <button
            style={{ width: "200px", marginBottom: "10px", fontSize: "25px" }}
            onClick={withdraw}
          >
            Withdraw ETH
          </button>
          <input
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            placeholder="Enter withdrawal amount"
            style={{ width: "180px" }}
          />
        </div>
        <div>
          <table style={{ margin: "20px auto", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "3px solid black", padding: "8px" }}>
                  Item No.
                </th>
                <th style={{ border: "3px solid black", padding: "8px" }}>
                  NFT Name
                </th>
                <th style={{ border: "3px solid black", padding: "8px" }}>
                  Price (in ETH)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "3px solid black", padding: "8px" }}>1</td>
                <td style={{ border: "3px solid black", padding: "8px" }}>
                  EtherGlow
                </td>
                <td style={{ border: "3px solid black", padding: "8px" }}>
                  150
                </td>
              </tr>
              <tr>
                <td style={{ border
