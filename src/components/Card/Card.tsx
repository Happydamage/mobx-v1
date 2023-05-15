import React from 'react';
import { cn } from '@bem-react/classname';

const cnCard = cn('Card');

export enum Theme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary'
}

interface CardProps {
    width?: string;
    height?: string;
		children: React.ReactNode;
		theme?: Theme;
		borderR?: string;
		padding?: string;
}

const Card = (props: CardProps) => {
	return (
		<div
			className={cnCard()}
			style={{
				width: props.width,
				height: props.height,
				borderRadius: props.borderR ?? '16px',
				padding: props.padding ?? '16px' ,
				background:
					props.theme === Theme.PRIMARY ? 'orange' : Theme.SECONDARY ? 'skyblue' : ''
			}}>
			{props.children}
		</div>
	);
};

export default Card;