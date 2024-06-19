import { useState } from "react"
import { connect, disconnect } from "@argent/get-starknet"

import style from "./Wallet.module.css"

export function Wallet() {
  const [connection, setConnection] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [address, setAddress] = useState("");

  const connectWallet = async () => {
    const connection = await connect({ webWalletUrl: "https://web.argent.xyz"});
    if (connection && connection.isConnected) {
      setConnection(connection);
      setAccount(connection.account);
      setAddress(connection.selectedAddress);
    }
  }

  const disconnectWallet = async() => {
    await disconnect();
    setConnection(undefined);
    setAccount(undefined);
    setAddress('');
}

  return (
    <div>
      {connection?.isConnected ? (
        <button onClick={disconnectWallet}>Connected to: {address.slice(0,5) + "..." + address.slice(-5)}</button>
      ):(
        <button onClick={connectWallet}>Connect your wallet</button>
      )}
    </div>
  )
}