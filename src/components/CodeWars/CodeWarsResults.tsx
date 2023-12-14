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
		return Array.from(set).join('') === str.toUpperCase();

		// or

		// return new Set(str.toUpperCase()).size == str.length;
	}
	//=====================================================

	//Task 5
	//variant 1
	class Kata {
		static validatePin(pin: string): boolean {
			return /^(\d{4}|\d{6})$/.test(pin);
		}
	}
	//variant 2
	// export class Kata {
	// 	static validatePin(pin: string): boolean {
	// 		return ((pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin));
	// 	}
	// }
	//=====================================================

	//Task 6
	//variant 1
	function getMiddle(s:string) {
		const middle = s.length / 2;
		const integer = Number.isInteger(middle);

		return integer ? s[middle - 1] + s[middle] : s[middle - 0.5];
	}
	//variant 2

	 // function getMiddle(s:string) {
	// const middle = Math.ceil(s.length / 2) - 1;
	// return s.slice(middle, s.length - middle);
	// }
	//=====================================================

	return (
		<div>
			<div></div>
		</div>
	);
};

export default CodeWarsResults;
