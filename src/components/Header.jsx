import metaquestLogo from "../assets/metaquest-logo-transp.png"
import style from "./Header.module.css"
import { Wallet } from "./Wallet"

export function Header() {
  return (
    <header className={style.header}>
      <img src={metaquestLogo} alt="MetaQuest logo" width={150}/>
      <nav>
        <a href="">Intro</a>
        <a href="">Pitch</a>
        <a href="">Demo</a>
      </nav>
      <Wallet />
    </header>
  )
}