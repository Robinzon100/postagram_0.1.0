import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

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
                <a data-translation-global='services' href="#services">სერვისები</a>
              </li>
              <li className="nav_items">
                <a data-translation-global='about_us' href="#about">ჩვენს შესახებ</a>
              </li>

              <li className="nav_items">
                <a data-translation-global='offices' href="#offices">ოფისები</a>
              </li>

              {/* <li className="nav_items">
                <a data-translation-global='questions' href="#questions">კითხვები</a>
              </li> */}

              <li className="nav_items">
                <a data-translation-global='contact' href="#contact">კონტაქტი</a>
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
