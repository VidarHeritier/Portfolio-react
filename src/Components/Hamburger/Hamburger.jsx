import "./Hamburger.modale.css";
import { Menu } from "../Menu/Menu";
import { useState } from "react";

export function Hamburger() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div id="ham-container" className="ham-items" onClick={toggleMenu}>
      <div className="ham ham1 ham-item1"></div>
      <div className="ham ham2 ham-item2"></div>
      <div className="ham ham3 ham-item3"></div>
      {menuVisible && <Menu />} {}
    </div>
  );
}
