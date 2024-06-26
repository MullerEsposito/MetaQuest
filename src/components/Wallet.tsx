import { useState } from "react"
import { ConnectedStarknetWindowObject, connect, disconnect } from "@argent/get-starknet"

import styles from "./Wallet.module.css"

export function Wallet() {
  const [connection, setConnection] = useState<ConnectedStarknetWindowObject | undefined>(undefined);
  const [address, setAddress] = useState("");

  const connectWallet = async () => {
    const connection = await connect({ webWalletUrl: "https://web.argent.xyz"});
    if (connection && connection.isConnected) {
      setConnection(connection);
      setAddress(connection.selectedAddress);
    }
  }

  const disconnectWallet = async() => {
    await disconnect();
    setConnection(undefined);
    setAddress('');
}

  return (
    <div>
      {connection?.isConnected ? (
        <button className={styles.button} onClick={disconnectWallet}>Connected to: {address.slice(0,5) + "..." + address.slice(-5)}</button>
      ):(
        <button className={styles.button} onClick={connectWallet}>Connect your wallet</button>
      )}
    </div>
  )
}