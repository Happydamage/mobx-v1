import React from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { cn } from '@bem-react/classname';
import './FormHook.scss';

const cnFormHook = cn('FormHook');

type MyForm = {
	name: string;
	age: string;
}

export const FormHook = () => {
	const { register, handleSubmit,
	} = useForm<MyForm>({
		defaultValues: {}
	});

	const submit: SubmitHandler<MyForm> = data => {
		console.log(data);
	};

	const error: SubmitErrorHandler<MyForm> = data => {
		console.log(data);
	};

	return (
		<div className={cnFormHook()}>
			<h1>React Hook Form</h1>

			<form onSubmit={handleSubmit(submit, error)}>
				<input type='text' {...register('name', {required: true})} />
				<input type='number' {...register('age')} />

				<input type='submit' />
			</form>
		</div>
	);
};