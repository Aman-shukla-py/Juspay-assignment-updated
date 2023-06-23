import React, { useState, useRef, useEffect } from "react";
import Box from "./Box";
import "./MidArea.css"

export default function MidArea() {
  const [boxes, setBoxes] = useState([]);
  

  useEffect(() => {
    setBoxes(boxes => [...boxes, <Box />]);
  }, []);

  const addBoxes = () => {
    setBoxes(boxes => [...boxes, <Box />]);
  };

  return (
    <div className="midarea">
      <div style={{display:'flex',background:'black', borderRadius:'2px'}}>
        <button className="playgroundBtn" onClick={addBoxes}>Add Playground</button>
      </div >
      <div className="playground h-full overflow-auto">
        {boxes.map((e, index) => (
          <React.Fragment key={index}>
            {e}
          </React.Fragment>
        ))}
      </div>
    </div>

  );
}
