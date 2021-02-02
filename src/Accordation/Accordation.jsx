import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Data from "./Data";
import Singlequestion from "./Singlequestion";
const Accordation = () => {
  return (
    <div className="quesbody ">
      <div className="myquesbox  ">
        <div className="container contbox bg-white">
          <article className="row">
            <div className="col-lg-4 mt-5">
              <h2 className="mt-5">Question And Answer About Login</h2>
            </div>
            <div className="col-lg-8 py-3">
              {Data.map((val) => {
                const { id } = val;
                //console.log(id, title, info, "mapppppedd");
                return (
                  <div className="accordationbody" key={id}>
                    <Singlequestion {...val} />
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Accordation;
