import { useEffect } from "react";


import { mapBox } from "components/util/mapBox";
import Cube from "components/global/cube/Cube";

const Offices = () => {

  useEffect(() => {
    mapBox()
  }, []);

  return (
    <>
      <div className="offices" id='offices'>
        <div className="offices_container">
          <div className="heading">

            <Cube />

            <h1 className="f-size-h2 f-weight-bl"
            data-translation='office_title'>ოფისები</h1>

          </div>

          <div className="postagram_map" id="map" />

        </div>
      </div>
    </>
  );
};

export default Offices;
