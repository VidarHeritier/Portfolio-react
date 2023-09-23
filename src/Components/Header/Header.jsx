import "./Header.modale.css";
import { Hamburger } from "../Hamburger/Hamburger";

export function Header() {
  return (
    <header id="navbar">
      <img src="./src/assets/Images/LOOGOO.png" alt="3 Vs logo" id="logo" />
      <Hamburger />
    </header>
  );
}
