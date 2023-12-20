import React, { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnCodeWars = cn('CodeWars');

const CodeWars: FC = () => {

	 function duplicateEncode(word: string){
		 const symbol = '[a-zA-Z0-9]';
		 const specialSymbol = '([\\]\\[\\$\\%\\^\\&\\*\\(\\)\\_\\+\\=\\-])';
		 let result = '';

		 for (let i = 0; i < word.length; i++) {
			 if (!word[i].match(specialSymbol)) {
				 const regexp = new RegExp(word[i], 'gi');
				 	word.match(regexp)?.length !== 1 ? result += ')' : result += '(';
			 }
		 }
		 return result;
	}

	console.log(duplicateEncode('121212123'));

	// class Kata {
	// 	static disemvowel(str: string): string {
	// 		return str.replace(/[aeiou]/ig, '');
	// 	}
	// }

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

			{/*<CodeWarsItem task={'Isogram'} taskNumber={4} />*/}
			{/*<CodeWarsItem task={'An isogram is a word that has no repeating letters, consecutive or non-consecutive. ' +*/}
			{/*	'Implement a function that determines whether a string that contains only letters is an isogram. ' +*/}
			{/*	'Assume the empty string is an isogram. Ignore letter case.'} taskNumber={4} />*/}

			{/*<CodeWarsItem task={'Проверка пинкода'} taskNumber={5} />*/}
			{/*<CodeWarsItem task={'ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
			If the function is passed a valid PIN string, return true, else return false.'} taskNumber={5} />*/}

			{/*<CodeWarsItem task={'Середина строки'} taskNumber={6} />*/}
			{/*<CodeWarsItem task={'You are going to be given a word.
			Your job is to return the middle character of the word.
			If the word's length is odd, return the middle character.
			If the word's length is even, return the middle 2 characters.'} taskNumber={6} />*/}
		</div>
	);
};

export default CodeWars;
