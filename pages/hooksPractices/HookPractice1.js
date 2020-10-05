import React, { useState } from "react";

const getCountFromX = () => {
	console.log("Run Function");
	return 1;
};

const getInitial = params => {
	for (let i = 0; i <= 200; i++) {
		//useMemo works better for this functions
		console.log(i);
	}
	return { count1: 1, count2: 2 };
};

const HookPractice1 = () => {
	const [count, setCount] = useState(() => getInitial());

	return (
		<>
			<button
				onClick={() => {
					setCount({ ...count, count2: 10 });
				}}
			>
				Change count to ramdon var
			</button>
			<h3>{count.count1}</h3>
			<h4>{count.count2}</h4>
			<button
				onClick={() => {
					setCount(prevState => {
						return { ...prevState, count1: prevState.count1 + 1 }; //...prevState Respresent all values of initial Obj This is necesary because React change the initial obj to a new obj with the change , and prevState.count represent temp count var before render the new
					});

					setCount(prevState => {
						return { ...prevState, count1: prevState.count1 + 1 };
					});
				}}
			>
				Change count to ramdon var
			</button>

			<button
				onClick={() => {
					setCount(getInitial());
				}}
			>
				Change count to ramdon var
			</button>
		</>
	);
};

export default HookPractice1;
