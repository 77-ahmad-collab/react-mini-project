import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Reviews from "./Data";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const Review = () => {
  const [index, setindex] = useState(0);
  const { name, image, job, text } = Reviews[index];
  // console.log(name, image, job);
  const checknum = (num) => {
    if (num > Reviews.length - 1) {
      num = 0;
      return num;
    } else if (num < 0) {
      num = Reviews.length - 1;
      return num;
    } else {
      return num;
    }
  };
  const prevme = () => {
    // console.log("i am the prev button");
    setindex((index) => {
      let newindex = index - 1;
      return checknum(newindex);
    });
  };
  const nextme = () => {
    //console.log("i am the next btn");
    setindex((index) => {
      let newindex = index + 1;
      return checknum(newindex);
    });
  };
  const randombtn = () => {
    //console.log("i am random button");
    setindex(() => {
      let newindex = Math.floor(Math.random() * Reviews.length);
      if (newindex === index) {
        return newindex + 1;
      }

      return checknum(newindex);
    });
  };
  return (
    <>
      <section className="reviewbox ">
        <div className=" container ">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center ">
              <h2>Our Reviews</h2>
              <h2 className="line bg-dark mt-0">
                <hr />
              </h2>
            </div>
          </div>
          <div className="row review py-3 ">
            <div className="col-12">
              <img
                className="setimage"
                src={image}
                alt="pic error"
                width="100px"
                height="100px"
              />
              <h3 className="text-primary">{name}</h3>
              <h5 className="text-dark">{job}</h5>
              <p>{text}</p>
              <div className="btns mb-2">
                <button className="btn btn-sm btn-primary m-2" onClick={prevme}>
                  <FaArrowLeft />
                </button>
                <button className="btn btn-sm btn-primary m-2" onClick={nextme}>
                  <FaArrowRight />
                </button>
              </div>
              <button className="btn btn-primary" onClick={randombtn}>
                Surprise me
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
