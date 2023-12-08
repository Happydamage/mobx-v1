import React from 'react';
import { cn } from '@bem-react/classname';
import './CodeWarsItem.scss';

const cnCodeWarsItem = cn('CodeWarsItem');

interface CodeWarsItemProps {
  task: string;
	taskNumber: number;
  example?: string;
	result?: string;
}

export const CodeWarsItem = (props: CodeWarsItemProps): JSX.Element => {
	return (
		<div className={cnCodeWarsItem()}>
			<div className={cnCodeWarsItem('Task')}>
				<div className={cnCodeWarsItem('Task-Number')}>
					Task №{props.taskNumber}
				</div>
				{props.task}
			</div>

			<div className={cnCodeWarsItem('Example')}>
				<div className={cnCodeWarsItem('Example-Title')}>Example</div>
				{props.example}
			</div>

			<div className={cnCodeWarsItem('Result')}>
				{props.result}
			</div>
		</div>
	);
};
