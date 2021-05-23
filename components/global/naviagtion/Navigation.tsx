import { useState, useEffect } from 'react';
import { Select } from "@geist-ui/react";
import { useCookies } from "react-cookie";
import { lang } from "components/util/translate.content";
import Router from 'next/router'


const Navigation = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['lang']);
  const [isOpen, setIsOpen] = useState(false);



  const logoClickHandler = () => scrollTo(0, 0);



  const changeHtmlLang = async (choosenLang) => {
    await setCookie('lang', choosenLang)

    if (choosenLang == 'geo')
      Router.reload();


    await (async () => {
      const translateElements = document.querySelectorAll('[data-translation]')
      const translateGlobalElements = document.querySelectorAll('[data-translation-global]')

      Array.from(translateElements).map((el: HTMLElement, i) => {
        el.innerHTML = lang[choosenLang].index[el.dataset.translation]
      })
      Array.from(translateGlobalElements).map((el: HTMLElement, i) => {
        el.innerHTML = lang[choosenLang].global.navigation[el.dataset.translationGlobal]
      })
    })()
  }



  const handler = (val) => {
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
                    placeholder="Choose Language"
                    initialValue="geo"
                    size="medium"
                    onChange={handler}>
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
