const user: {
  name:string;
  surname: string;
  height: number;
} = {
	name: 'Bobr',
	surname: 'Kurwa',
	height: 185
};

//Arrays
const arr: number[] = [123];
const arr2: number[][] = [ [], [], [] ];
const arr3: (number | string)[] = [123, '123', '123', 123];

arr.map((item) => item + 1);


//Tuples
//кортежи (tuples) — неизменяемая и сравниваемая по значению версия массивов.
//записи (records) — неизменяемая и сравниваемая по значению версия простых объектов;
//Объекты сравниваются по внутренним ссылкам (поэтому объект равен только самому себе).
const coordinates: [number, number] = [12.123213, 11.123132];
coordinates.push(234234);


//Literal types, enums
type EnvList = 'development' | 'staging'| 'production';
const useEnv: EnvList = 'staging';

export function setEnv(myEnv: EnvList): EnvList {
	return myEnv;
}


//Interfaces

export interface UserInfo {
	phone: string;
	email: string;
	readonly place: 'matrix';
}

export interface User extends UserInfo{
	name: string | number;
	// ex2: {
	// 	ex21: {
	// 		ex22: string;
	// 	}
	// }
	ex3?: boolean;
}

export interface Customer {
	user: User;
	env: EnvList;
	bill: number;
}

const customer: Customer = {
	user: {
		name: 'Mr.Anderson',
		phone:'88005353555',
		email: 'mranderson@gmail.ru',
		place: 'matrix',
		// ex2: {ex21: {ex22: 'pew'}},
		ex3: true,
	},
	env: 'development',
	bill: 123,
};