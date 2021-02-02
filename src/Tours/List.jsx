import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import House from "../House.jpg";
const List = (props) => {
  const [readmore, setreadmore] = useState(true);
  //setnewtour(props.tour);
  //console.log(props.tour, "props.tour");
  const handleremove = (id) => {
    console.log(id, "i am in handle ");
    props.removeme(id);
  };
  return (
    <div>
      {props.tour.map((val) => {
        const { id, name, info, image, price } = val;
        return (
          <div key={id}>
            <div className="card mt-5  mx-auto">
              <img src={image} alt="House" width="350px" height="300px" />
              <div className="card-body">
                <article className="title">
                  <h2 className="text-danger">{name}</h2>
                  <h3 className="text-success">${price}</h3>
                </article>
                <article className="info">
                  <p className="mt-3">
                    {readmore ? info : info.substring(0, 200)}
                    <button
                      className="btn btn-sm btn-info ml-2 "
                      onClick={() => setreadmore(!readmore)}
                    >
                      {readmore ? "Read less" : "Read more"}
                    </button>
                  </p>
                  <button
                    className="btn btn-outline-danger w-100"
                    onClick={() => {
                      handleremove(id);
                    }}
                  >
                    Not intrested
                  </button>
                </article>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
