import React from "react";

import GameOfLife from "./GameOfLife";

const GameWindow = ({width, height}) => {

  const numRows = 50;
  const numCols = 50;
  const operations = [
  [0,1],
  [0,-1],
  [1,-1],
  [-1,1],
  [1,1],
  [1,0],
  [-1, 0]
  ];

  const generateEmptyGrid = () => {
      const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  };

  return <GameOfLife generateEmptyGrid={generateEmptyGrid} numRows={numRows} numCols={numCols} operations={operations}/>
}

export default GameWindow;
