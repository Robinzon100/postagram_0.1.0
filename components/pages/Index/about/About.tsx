import Cube from "components/global/cube/Cube";


const About = () => {
  return (
    <>
      <section className="about" id='about'>
        <div className="about_container">
          <div className="about_us">

              <div className="heading">

              <Cube/>
              
                <h1 className="f-size-h2 f-weight-bl">ჩვენს შესახებ</h1>
              </div>

              <div className="paragraph">
                <p className="f-size-p3 f-weight-l">
                  ფოსტაგრამი საფოსტო საკურიერო კომპანიაა, რომლის მიზანია, წლების
                  განმავლობაში დაგროვილი გამოცდილების საფუძველზე, გაუმარტივოს
                  მომხმარებელს ნივთის შეძენისა და მიწოდების პროცესი.
                  <br />
                  <br/>
                  ფოსტაგრამი ახორციელებს ამანათების როგორც საერთაშორისო, ისე
                  საქართველოს მასშტაბით მიტანას. ჩვენი სერვისები მორგებულია
                  პარტნიორი კომპანიების ინტერესებსა და საჭიროებებზე და ეხმარება
                  მათ, შეინარჩუნონ მომხმარებლების ნდობა.
                </p>
              </div>

          </div>

          <div className="picture"></div>

        </div>
      </section>
    </>
  );
};

export default About;
