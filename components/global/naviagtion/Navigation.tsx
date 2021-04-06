import { useState } from "react";
import { motion } from "framer-motion";

import { NavigationAnimation } from "components/lib/Motion/NavigationAnimation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const logoClickHandler = () => {
    scrollTo(0, 0)
  }

  return (
    <>
      <nav className="navigation">
        <div className="navigation_container">
          <div className="logo" onClick={() => logoClickHandler()} />

          <div className="hamburger_container">
            <ul className={!isOpen ? "menu_none nav_links" : "nav_links menu_block"}>
              <li className="nav_items">
                <a href="#services">სერვისები</a>
              </li>
              <li className="nav_items">
                <a href="#about">ჩვენს შესახებ</a>
              </li>

              <li className="nav_items">
                <a href="#offices">ოფისები</a>
              </li>

              <li className="nav_items">
                <a href="#questions">კითხვები</a>
              </li>

              <li className="nav_items">
                <a href="#contact">კონტაქტი</a>
              </li>
            </ul>
          </div>

          <div onClick={() => setIsOpen(!isOpen)} className="hamburger"></div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
