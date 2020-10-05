import React, { useState, useEffect } from "react";

const HookPractice2 = () => {
	const [resource, setResource] = useState("post");

	useEffect(() => {
		console.log("after");
	}, [resource]);

	return (
		<div>
			<button onClick={() => setResource("post")}>Post</button>
			<button onClick={() => setResource("users")}>Users</button>
			<button onClick={() => setResource("comments")}>Comments</button>
			<div>
				<h1>{resource}</h1>
			</div>
		</div>
	);
};

export default HookPractice2;
