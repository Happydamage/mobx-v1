import React from 'react';
import { cn } from '@bem-react/classname';

const cnCodeWars = cn('CodeWars');



const CodeWars = (): JSX.Element => {



	return (
		<div className={cnCodeWars()}>
			{/*<CodeWarsItem*/}
			{/*	taskNumber={1}*/}
			{/*	task={'Create a function with two arguments that will return an array of the first n multiples of x.\n' +*/}
			{/*	'\n' +*/}
			{/*	'Assume both the given number and the number of times to count will be positive numbers greater than 0.\n' +*/}
			{/*	'\n' +*/}
			{/*	'Return the results as an array or list ( depending on language ).'}*/}
			{/*	example={'countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]\n' +*/}
			{/*	'countBy(2,5) === [2,4,6,8,10]'}*/}
			{/*/>*/}

			{/*<CodeWarsItem task={'Камень ножницы бумага'} taskNumber={2} />*/}
			{/*<CodeWarsItem task={'Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.\n' +*/}
			{/*	'\n' +*/}
			{/*	'Return your answer as a number.'} taskNumber={2} />*/}

			{/*<CodeWarsItem task={'Камень ножницы бумага'} taskNumber={4} />*/}
			{/*<CodeWarsItem task={'An isogram is a word that has no repeating letters, consecutive or non-consecutive. ' +*/}
			{/*	'Implement a function that determines whether a string that contains only letters is an isogram. ' +*/}
			{/*	'Assume the empty string is an isogram. Ignore letter case.'} taskNumber={4} />*/}
		</div>
	);
};

export default CodeWars;
