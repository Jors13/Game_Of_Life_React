import React, { useState, useEffect, useCallback, useRef } from "react";

import produce from 'immer';

const GameOfLife = ({numRows, numCols, operations, generateEmptyGrid}) => {
	const [grid, setGrid] = useState(() => {
	    return generateEmptyGrid();
	});

	const [running, setRunning] = useState(false);

	const runningRef = useRef(running);
	runningRef.current = running;

	const runSimulation = useCallback(() => {
			//Simulate
			if(!runningRef.current){
				return;
			}

			setGrid(g => {
				return produce(g, gridCopy => {
					for (let i = 0 ;i < numRows; i++) {
						for (let k = 0; k < numCols; k++) {
							let neighbors = 0 ;
							operations.forEach(([x,y])=>{
								const newI = i + x;
								const newK = k + y;
								if(newI >= 0 && newI < numRows && newK >= 0 && newK < numCols){
									neighbors += g[newI][newK];
								}
							})

							if(neighbors < 2 || neighbors > 3){
								gridCopy[i][k] = 0;
							} else if(g[i][k] === 0 && neighbors === 3){
								gridCopy[i][k] = 1;
							}
						}
					}
				} )
			})

			setTimeout(runSimulation,100);
		},[])

	return (
		<div>

		<button onClick={ () => {
			setRunning(!running);
			if(!running){
					runningRef.current = true;
			runSimulation();
			}
		
		} }>{running ? "Stop" : "Start"}</button>
		<button onClick={() => {
			 const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => Math.random() > 0.8 ? 1 : 0));
    }
    setGrid(rows);
		}}>random</button>

		<button onClick={() => {
			setGrid(generateEmptyGrid());
		}}>Clear</button>


			<div
				style={{
					display: "grid",
					gridTemplateColumns: `repeat(${numCols}, 20px)`,
					backgroundColor: "black"
				}}
			>
				{grid.map((rows, i) =>
					rows.map((col, k) => (
						<div
							key={`${i}-${k}`}
							onClick={() => {
                 const newGrid = produce(grid, gridCopy => {
                 	gridCopy[i][k] = !gridCopy[i][k];
                 }); 
                 setGrid(newGrid);
							}}
							style={{
								width: 20,
								height: 20,
								backgroundColor: grid[i][k] ? "white" : undefined,
							}}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default GameOfLife;
