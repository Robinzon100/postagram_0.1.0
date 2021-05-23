import { useState, Ref, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';



import ServiceText from "./serviceText.json"
import Cube from "components/global/cube/Cube";
import { useCookies } from 'react-cookie';


const Service = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['lang']);
  const [defaultText, setDefaultText] = useState(true);
  const [displayText, setDisplayText] = useState("");
  let language = cookies.lang
  const [text, setText] = useState([])
  const [btns, setBtns] = useState([])

  useEffect(() => {
    if (cookies.lang) {
      setText(ServiceText[language].serviceText);
      setBtns(ServiceText[language].serviceBtnText);
    }

    if(!cookies.lang) {
        setCookie("lang","geo")
        language = "geo"
        setText(ServiceText[language].serviceText);
        setBtns(ServiceText[language].serviceBtnText);
    }

  }, [cookies])


  const getText = (e) => {
    if (e.currentTarget.attributes["data-title"]) {
      const aboutHtml = e.currentTarget.attributes["data-title"].nodeValue;
      const serviceBtns = document.querySelectorAll(".btn");
      const textContainer = document.querySelector('.services_text') as HTMLDivElement
      scrollTo(0, window.pageYOffset + textContainer.getBoundingClientRect().top - 100)


      serviceBtns.forEach(btn => {
        if (btn.classList.contains('service_btn_active')) {
          btn.classList.remove('service_btn_active')
        }
      });
      e.currentTarget.classList.add('service_btn_active');

      setDisplayText(aboutHtml);
    } else {
      setDisplayText("ჩაამატეთ ტექსტი");
    }
  };





  return (
    <>
      <section className="services" id='services'>
        <div className="services_container">
          <div className="heading">
            <Cube />
            <h1
              className="f-size-h2 f-weight-bl"
              data-translation='service_title'>სერვისები</h1>
          </div>

          <div className="services_btns">
            {btns.map((btnText, i) => (
              <button
                key={i}
                className={`btn ${"th" + i} ${i == 0 && 'service_btn_active'}`}
                data-title={text[i]}
                onClick={(e) => {
                  getText(e);
                  setDefaultText(false);
                }}>
                <div className="icon" style={{ backgroundImage: `url("/svg/${i + 1}.svg")` }}></div>
                <p className="f-size-p5 f-weight-bl">{btnText}</p>
              </button>

            ))}
          </div>

          <div className="services_text">
            {text ? defaultText ? <div>{ReactHtmlParser(text[0])}</div> : <div>{ReactHtmlParser(displayText)}</div> : ""}

          </div>

          <div className="goals">
            <p className="f-size-p2 f-weight-l"
              data-translation='service_description'>
              ფოსტაგრამის მთავარი მიზანი პარტნიორი კომპანიებისთვის მიტანის
              სერვისის გამარტივება და დახვეწაა. შესაბამისად, ნებისმიერი
              დამატებითი საჭიროების შემთხვევაში, მზად ვართ, დავამუშაოთ
              თქვენი მოთხოვნა და შევქმნათ თქვენზე მორგებული სერვისი.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
