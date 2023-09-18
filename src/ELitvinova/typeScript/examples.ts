export {};

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
const matrix: number[][] = [ [], [], [] ];
const arr2: (number | string)[] = [123, '123', '123', 123];

arr.map((item) => item + 1);


//Tuples
//кортежи (tuples) — неизменяемая и сравниваемая по значению версия массивов.
//записи (records) — неизменяемая и сравниваемая по значению версия простых объектов;
//Объекты сравниваются по внутренним ссылкам (поэтому объект равен только самому себе).
const coordinates: [number, number] = [12.123213, 11.123132];
coordinates.push(234234);

