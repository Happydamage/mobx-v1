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

	//Task 3
	const dataArray:(number | string)[] = [10, 5, 15, '10'];

	function dataSum(data:(string | number)[]) {
		let sum = 0;

		for (let i = 0; i < data.length; i++) {
			sum += +data[i];
		}
		console.log(sum);
	}
	dataSum(dataArray);
	//=====================================================

	//Task 4
	function isIsogram(str:string){
		const set = new Set(str.toUpperCase());
		console.log(Array.from(set).join('') === str.toUpperCase());
	}
	//=====================================================

	return (
		<div>
			<div></div>
		</div>
	);
};

export default CodeWarsResults;
