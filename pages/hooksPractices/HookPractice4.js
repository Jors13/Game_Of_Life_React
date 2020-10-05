import React, { useState, useEffect, useLayoutEffect } from "react";

const HookPractice4 = () => {
	const [state, setState] = useState("Hola");
	const he = state;

	useEffect(() => {}, [he]);

	return (
		<div>
			<h1>{he}</h1>
			<button onClick={() => setTimeout(() => setState("XD1"), 10000)}>To XD</button>
			<button onClick={() => setTimeout(() => setState("XD2"), 5000)}>To XD2</button>
		</div>
	);
};

export default HookPractice4;
