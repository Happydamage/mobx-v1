import React from 'react';

interface inputProps {
	label?: string;
	children: React.ReactNode;
}

const InputV1 = (props: inputProps): JSX.Element => {
	return (
		<label>
			<p>{props.label}</p>
			{props.children}
		</label>
	);
};

export default InputV1;