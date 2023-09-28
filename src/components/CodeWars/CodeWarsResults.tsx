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
	//====================================================

	//Task 2
	interface IGame {
		rock: string;
		scissors: string;
		paper: string;
	}

	const gameRules = {
		rock: 'scissors',
		scissors: 'paper',
		paper: 'rock'
	};

	const rps = (p1: keyof IGame, p2: string) => {
		if (p1 === p2) {
			return 'Draw!';
		}
		if (p2 === gameRules[p1]) {
			return 'Player 1 won!';
		}
	};
	//=====================================================

	return (
		<div>
			<div></div>
		</div>
	);
};

export default CodeWarsResults;
