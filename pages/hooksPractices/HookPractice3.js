import React, { useState, useRef, useEffect } from "react";

const HookPractice3 = () => {
	const [name, setName] = useState("");
	const inputRef = useRef();

	function focus() {
		console.log(inputRef.current);
	}

	return (
		<div>
			<input
				ref={inputRef}
				value={name}
				onChange={e => {
					setName(e.target.value);
				}}
			/>
			<h1>My name is {name}</h1>
			<button onClick={focus}>Focus</button>
		</div>
	);
};

export default HookPractice3;
