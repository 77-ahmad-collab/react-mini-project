import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const Singlequestion = ({ title, info }) => {
  const [showme, issetshow] = useState(false);
  return (
    <div>
      <div className="singleques mt-3 p-3 shadow-sm rounded">
        <div className="questions d-flex justify-content-between">
          <h2>{title}</h2>
          <button
            className="btn minusplus btn-outline-info btn-sm rounded"
            onClick={() => issetshow(!showme)}
          >
            {showme ? <FaMinus /> : <FaPlus />}
          </button>
        </div>
        <div className="answer">
          <p>{showme && info}</p>
        </div>
      </div>
    </div>
  );
};

export default Singlequestion;
