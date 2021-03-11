import Cube from "components/global/cube/Cube";

const Questions = () => {
  return (
    <>
      <div className="questions" id='questions'>
        <div className="questions_container">
          <div className="heading">
            <Cube />
            <h1 className="f-size-h2 f-weight-bl">ხშირად დასმული კითხვები</h1>
          </div>

          <div className="body">
            <ul className="answer_list">

              <li>
                <h1 className="f-size-h7 f-weight-bo">
                  რომელ საათებში მუშაობთ?
                </h1>
                <br/>
                <p className="f-size-p3 f-weight-l">
                  ჩვენ ვმუშაობთ ყოველდღე, 10:00-დან 18:00 საათამდე.
                </p>
              </li>

              <li>
                <h1 className="f-size-h7 f-weight-bo">
                როდის იგზავნება ამანათები?
                </h1>
                <br />

                <p className="f-size-p3 f-weight-l">
                  ამანათები იგზავნება ყოველ კვირა დღეს.
                  <br/>
                  ჩაბარების ბოლო ვადა – შაბათი 18:00
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
