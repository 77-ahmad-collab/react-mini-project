import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import House from "../House.jpg";
const List = (props) => {
  //console.log(props.people);
  return (
    <>
      {props.people.map((val) => {
        return (
          <section key={val.id}>
            <div className="d-flex mt-2">
              <img
                className="myimage"
                src={val.image}
                alt="mypic"
                width="50px"
                height="50px"
              />
              <div className="info">
                <p className="singleinfo">{val.name}</p>
                <p className="singleinfo">{val.age}</p>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};
export default List;
