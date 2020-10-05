import React, { useState, useMemo, useEffect } from "react";

const HookPractice5 = () => {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);
	const doublenumber = useMemo(() => {
		return slowfunction(number);
	}, [number]);
	const themeStyles = useMemo(() => {
		//Here we use use memo to store is reference in memory because 2 objs with the sames values are diferrent is memory
		return {
			backgroundColor: dark ? "black" : "white",
			color: dark ? "white" : "black"
		};
	}, [dark]);

	useEffect(() => {
		console.log("Theme Changed");
	}, [themeStyles]);

	return (
		<div>
			<input
				type="number"
				value={number}
				onChange={e => setNumber(parseInt(e.target.value))}
			/>
			<button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
			<div style={themeStyles}>{doublenumber}</div>
		</div>
	);
};

function slowfunction(num) {
	console.log("Calling slow function");
	for (let i = 0; i <= 1000000000; i++) {}
	return num * 2;
}

export default HookPractice5;
