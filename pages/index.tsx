
import Hero from 'components/pages/Index/hero/Hero';
import About from "components/pages/Index/about/About"
import Offices from 'components/pages/Index/offices/Offices';
// import Questions from 'components/pages/Index/questions/Questions';
import Contact from 'components/pages/Index/contact/Contact';
import Service from 'components/pages/Index/services/Service';


const index = () => {
  return (
    <>

      <Hero/>
      <Service/>
      
      <About/>
      <Offices/>
      {/* <Questions/>  */}
      <Contact/>
      
    </>
  );
};

export default index;
