import React from "react";
import { useState } from "react";
import goodfellas from "../assets/goodfellas.jpg";

function Example() {
  const [isPhoto, setIsPhoto] = useState(false);

  return (
    <div className="example">
      <button onClick={() => setIsPhoto((prev) => !prev)}>Click on me!</button>
      {isPhoto && (
        <div className="img">
          <img src={goodfellas} />
        </div>
      )}
    </div>
  );
}

export default Example;
