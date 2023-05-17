import React from 'react';
import './CustomButton.scss';
import { cn } from '@bem-react/classname';

const cnCustomButton = cn('CustomButton');

interface CustomButtonProps {
  a?: string;
  children: React.ReactNode;
}

const CustomButton = (props: CustomButtonProps) => {
	return (
		<button className={cnCustomButton()}>
			{props.children}
		</button>
	);
};

export default CustomButton;
