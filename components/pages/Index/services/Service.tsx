import { useState, Ref } from "react";
import ReactHtmlParser from 'react-html-parser';



import ServiceText from "./serviceText.json"
import Cube from "components/global/cube/Cube";


const Service = () => {

  const [text,] = useState(ServiceText.serviceText);
  const [btns,] = useState(ServiceText.serviceBtnText);
  const [defaultText, setDefaultText] = useState(true);
  const [displayText, setDisplayText] = useState("");

  const getText = (e) => {
    if (e.currentTarget.attributes["data-title"]) {
      const aboutHtml = e.currentTarget.attributes["data-title"].nodeValue;
      const serviceBtns = document.querySelectorAll(".btn");


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
            <h1 className="f-size-h2 f-weight-bl">სერვისები</h1>
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
                <div className="icon" style={{ backgroundImage: `url("/svg/${btnText}.svg")` }}></div>
                <p className="f-size-p5 f-weight-bl">{btnText}</p>
              </button>

            ))}
          </div>

          <div className="services_text">
            {text ? defaultText ? <div>{ReactHtmlParser(text[0])}</div> : <div>{ReactHtmlParser(displayText)}</div> : ""}

          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
