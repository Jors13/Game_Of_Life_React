import React from "react";

const HookPractice6 = () => {
	const [dark, setDark] = React.useState(false);
	const [count, setCount] = useState(0);
	return (
		<div>
			<input type="number" onChange={() => setCount(parseInt(e.targe.value))} />
			<h1></h1>
			<p style={{ backgroundColor: dark ? "black" : "white" }}>Hola Mundo</p>
			<button onClick={() => setDark(prevDark => !prevDark)}></button>
		</div>
	);
};

export default HookPractice6;
