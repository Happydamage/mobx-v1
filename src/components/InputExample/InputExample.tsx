import React, { useState } from 'react';

const InputExample = () => {
	const [value, setValue] = useState<string>('');

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<div>
			<input
				type='text'
				value={value}
				onChange={onChangeHandler}
			/>
		</div>
	);
};

export default InputExample;