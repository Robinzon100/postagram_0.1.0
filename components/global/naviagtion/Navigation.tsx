import { useState, useEffect } from 'react';
import { Select } from "@geist-ui/react";
import { useCookies } from "react-cookie";
import { lang } from "components/util/translate.content";

const Navigation = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['lang']);
  const [isOpen, setIsOpen] = useState(false);


  const logoClickHandler = () => {
    scrollTo(0, 0);
  };



  useEffect(() => {


  }, [])

  const changeHtmlLang = (lang) => {
    setCookie('lang', lang)

    if (cookies.lang.length > 0 && cookies.lang != 'geo') {
      const translateElements = document.querySelectorAll('[data-translation]')

      Array.from(translateElements).map((el: HTMLElement, i) => {
        el.innerHTML = lang[cookies.lang].index[el.dataset.translation]
      })

      const translateGlobalElements = document.querySelectorAll('[data-translation-global]')

      Array.from(translateGlobalElements).map((el: HTMLElement, i) => {
        el.innerHTML = lang[cookies.lang].global.navigation[el.dataset.translationGlobal]
      })
    } 
  }



  const handler = (val) => {
    console.log(val);
    
    changeHtmlLang(val)
  };



  return (
    <>
      <nav className="navigation">
        <div className="navigation_container">
          <div className="logo" onClick={() => logoClickHandler()} />

          <div className="hamburger_container">
            <ul
              className={
                !isOpen ? "menu_none nav_links" : "nav_links menu_block"
              }
            >
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

              <li>
                <div className="select_lang">
                  <Select
                    placeholder="Choose one"
                    initialValue="geo"
                    size="medium"
                    onChange={handler}
                  >
                    <Select.Option value="geo">geo</Select.Option>
                    <Select.Option value="eng">eng</Select.Option>
                    <Select.Option value="rus">rus</Select.Option>
                  </Select>
                </div>
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
