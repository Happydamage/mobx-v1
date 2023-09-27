import React from 'react';

const CodeWarsResults = (): JSX.Element => {

	//Task 1
	function countBy(x: number, n: number) {
		const z: number[] = [];

		for (let i = 1; i <= x * n; i++) {
			if (i % x === 0) {
				z.push(i);
			}
		}

		return z;
	}
	//=======================================

	return (
		<div>
			<div></div>
		</div>
	);
};

export default CodeWarsResults;
