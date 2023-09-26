import React, { useRef, useState } from 'react';
import newCustomer, { ClassCustomer } from '../../ELitvinova/typeScript/classes';

const InputExample = () => {
	const [value, setValue] = useState<string>('');
	const inputRef = useRef<HTMLInputElement>(null);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(inputRef.current?.value);
	};

	return (
		<div style={{display: 'flex', justifyContent: 'center', gap: '16px', paddingTop: '16px'}}>
			{/*<input*/}
			{/*	type='text'*/}
			{/*	value={value}*/}
			{/*	onChange={onChangeHandler}*/}
			{/*	placeholder={'Управляемый'}*/}
			{/*/>*/}
			{/*<input*/}
			{/*	type='text'*/}
			{/*	ref={inputRef}*/}
			{/*	placeholder={'Не управляемый'}*/}
			{/*/>*/}
			{/*<button onClick={onClickHandler}>Pew</button>*/}
		</div>
	);
};

export default InputExample;
