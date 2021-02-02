import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import Data from "./Data";
const Birthday = () => {
  const [people, setpeople] = useState(Data);
  const clearitem = () => {
    setpeople([]);
  };
  return (
    <div className="container-fluid bd-body">
      <div className="box">
        <h2>{people.length} Birthdays today</h2>
        <List people={people} />
        <button className="clearbtn btn btn-primary" onClick={clearitem}>
          Remove-all-items
        </button>
      </div>
    </div>
  );
};

export default Birthday;
