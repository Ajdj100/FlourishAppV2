import React, { useState } from "react";

const Tree = () => {
  const [numLayers, setNumLayers] = useState(0);
  const [treeList, setTreeList] = useState([]);

  const generateTree = (layers) => {
    let newTree = [];
    let top = -10;
    let left = 100;
    let bx = 10;
    let bbottom = 20;
    let increment = -10;
    const scaleFactor = 2;

    // Loop to generate the tree with layers
    for (let i = 0; i < layers; i++) {
      newTree.push({
        top: top * scaleFactor,
        left: left * scaleFactor,
        bx: bx * scaleFactor,
        bbottom: bbottom * scaleFactor,
      });
      top += increment;
      left -= 5;
      bx += 5;
      bbottom += 10;
      increment -= 10;
    }
    setTreeList(newTree);
  };

  // Setting the input to generate the tree with the number of layers
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setNumLayers(value);
    generateTree(value);
  };

  return (
    <div>
      <h1>Tree</h1>
      <input type="number" value={numLayers} onChange={handleInputChange} />
      <div>
        {treeList.map((a, index) => (
          <div
            key={index}
            style={{
              width: "0px",
              height: "0px",
              top: `${a.top}px`,
              position: "relative",
              left: `${a.left}px`,
              borderLeft: `${a.bx}px solid transparent`,
              borderRight: `${a.bx}px solid transparent`,
              borderBottom: `${a.bbottom}px solid #555`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Tree;
