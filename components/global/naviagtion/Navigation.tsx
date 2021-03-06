import { useState } from "react";
import { motion } from "framer-motion";

import {NavigationAnimation} from "components/lib/Motion/NavigationAnimation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navigation">
        <div className="navigation_container">
          <div className="logo" />

          <div className="hamburger_container">
            <ul className={!isOpen ?  "menu_none nav_links" : "nav_links menu_block"}>
              <li className="nav_items">
                <a href="#">სერვისები</a>
              </li>
              <li className="nav_items">
                <a href="#">ჩვენს შესახებ</a>
              </li>

              <li className="nav_items">
                <a href="#">ოფისები</a>
              </li>

              <li className="nav_items">
                <a href="#">კითხვები</a>
              </li>

              <li className="nav_items">
                <a href="#">კონტაქტი</a>
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
