import React from 'react';
import { cn } from '@bem-react/classname';
import CodeWarsItem from './CodeWarsItem';

const cnCodeWars = cn('CodeWars');

const CodeWars = (): JSX.Element => {
	return (
		<div className={cnCodeWars()}>
			<CodeWarsItem
				taskNumber={'1'}
				task={'Create a function with two arguments that will return an array of the first n multiples of x.\n' +
				'\n' +
				'Assume both the given number and the number of times to count will be positive numbers greater than 0.\n' +
				'\n' +
				'Return the results as an array or list ( depending on language ).'}
				example={'countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]\n' +
				'countBy(2,5) === [2,4,6,8,10]'}
			/>
		</div>
	);
};

export default CodeWars;
