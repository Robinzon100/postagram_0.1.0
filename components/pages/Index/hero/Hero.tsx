import { motion } from "framer-motion";
import { ArrowRight } from "react-feather";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic'

// import GetPackage from "components/pages/Index/feature/GetPackage";
import Button from "components/lib/Button/Button";
import { Modal } from "@geist-ui/react";
const GetPackage = dynamic(() => import('components/pages/Index/feature/GetPackage'))


const Hero = () => {
  const [videoSource, setVideoSource] = useState<string>("");
  const [toggleCalc, setToggleCalc] = useState<boolean>(false);
  const [value, setValue] = useState<string>("")
  const [modelOpen, setModelOpen] = useState<boolean>(false)



  useEffect(() => {
    if (window.innerWidth > 1080) {
      setVideoSource("/videos/animation.mp4")
    } else {
      setVideoSource("/videos/for_mobile1.mp4")
    }
  }, [])


  const handler = (e) => {
    setValue(e.target.value)
  }





  return (
    <>
      <section className="hero">
        <Modal open={modelOpen} onClose={() => setModelOpen(false)}>
          <Modal.Content>
            <p className="f-size-p3 f-weight-l">თქვენი ამანათის სტატუსი: <span> </span>
              <span className='f-size-p3 f-weight-bl'>საწყობშია</span>
            </p>
          </Modal.Content>
          <Modal.Action passive onClick={() => setModelOpen(false)}>დახურვა</Modal.Action>
        </Modal>
        <div className="container">
          <div className="content">
            <motion.h1
              animate={{ opacity: 1, y: 15 }}
              transition={{ duration: 0.4, delay: 2.0 }}
              className="f-size-h1 f-weight-bl heading"
              data-translation='hero_title'>
              ჩვენი გამოცდილება <br /> თქვენი  უპირატესობაა
            </motion.h1>


            <motion.p
              animate={{ opacity: 0.7, y: 15 }}
              transition={{ duration: 0.4, delay: 2.3 }}
              className="f-size-p2 f-weight-l paragraph"
              data-translation='hero_description'>
              ჩვენი გუნდი მზადაა უპასუხოს <br /> თქვენს ნებისმიერ შეკითხვას.
            </motion.p>


            <motion.div
              animate={{ opacity: 1, y: 15 }}
              transition={{ duration: 0.4, delay: 2.6 }}
              className="hero_input">
              <div className="hero_input-container">

                <input
                  value={value}
                  placeholder='tracking number'
                  type="number"
                  onChange={handler}
                  className="input"
                  name="search"
                  max={9999}
                />

                <Button onClick={() => setModelOpen(true)} size="small" width="100%" color="yellow" className="hero_btn">
                  <p 
                    className="f-size-p2 f-weight-bo"
                    data-translation='hero_button'>ძებნა</p>
                  <ArrowRight
                    className="arrow-right"
                    color={"white"}
                    style={{ opacity: "0.55" }}
                    strokeWidth={2.4} />
                </Button>

              </div>
            </motion.div>
          </div>

          <div className="mobile_package"
            style={toggleCalc ? { backgroundImage: "url(/svg/x-circle.svg)" } : {}}
            onClick={() => setToggleCalc((toggleCalc) => !toggleCalc)}>
          </div>

          <GetPackage toggle={toggleCalc} />


          <div className="backgound_video__container">
            <video autoPlay muted src={videoSource}></video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
