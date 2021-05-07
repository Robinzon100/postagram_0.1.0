import { useState } from "react";
import { Textarea } from "@geist-ui/react";

import Cube from "components/global/cube/Cube";
import Button from "components/lib/Button/Button";

const Contact = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const handleInput = (e, field: string) => {
    setValue({ ...value, [field]: e.target.value });
  }

  const handleSend = () => {
    if (value.name.length > 2 && validateEmail(value.email)) {
      console.log(value)
    }
  }

  return (
    <>
      <div className="contact" id='contact'>

        <div className="contact_container">


          <div className="heading">
            <Cube />
            <h1 className="f-size-h3 f-weight-bl"
              data-translation='contact_title'>დაგვიკავშირდით</h1>
          </div>

          <div className="contact_form">
            <div className="name_email">

              <div className="name">
                <p className="f-size-p4 f-weight-bo">Name</p>
                <input type="text" placeholder="Name" className="input" value={value.name} onChange={(e) => handleInput(e, "name")} />
              </div>

              <div className="email">
                <p className="f-size-p4 f-weight-bo">Email</p>

                <input
                  type="text"
                  placeholder="Email"
                  className="input"
                  value={value.email}
                  onChange={(e) => handleInput(e, "email")}
                />
              </div>
            </div>



            <div className="message">
              <p className="f-size-p4 f-weight-bo">Message</p>
              <Textarea
                className=""
                minHeight="10rem"
                width="100%"
                value={value.message}
                onChange={(e) => handleInput(e, "message")}
                placeholder="Message"
              />
            </div>


            <Button size="small" width="100%" color="yellow" className="contact_btn" onClick={() => handleSend()}>
              <p
                className="f-size-p2 f-weight-bo"
                style={{ color: "white" }}
                data-translation='contact_button'>გაგზავნა</p>
            </Button>


          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
