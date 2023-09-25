import "./Hamburger.modale.css";
import { Menu } from "../Menu/Menu";
import { useState } from "react";

export function Hamburger() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [hamburgerVisible, setHamburgerVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setHamburgerVisible(false);
  };

  return (
    <>
      {hamburgerVisible && (
        <div id="ham-container" className="ham-items" onClick={toggleMenu}>
          <div className="ham ham1 ham-item1"></div>
          <div className="ham ham2 ham-item2"></div>
          <div className="ham ham3 ham-item3"></div>
        </div>
      )}
      {menuVisible && <Menu />} {}
    </>
  );
}
