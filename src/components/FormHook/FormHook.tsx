import React from 'react';
import { Resolver, useForm } from 'react-hook-form';
import { cn } from '@bem-react/classname';
import './FormHook.scss';

const cnFormHook = cn('FormHook');

type FormValues = {
	firstName: string;
}

const resolver: Resolver<FormValues> = async (values) => {
	return {
		values: values.firstName ? values : {},
		errors: !values.firstName
			? {
				firstName: {
					type: 'required',
					message: 'This is required.',
				},
			}
			: {},
	};
};

export const FormHook = () => {

	const {
		register,
		formState: {
			errors,
		},
		handleSubmit,
	} = useForm<FormValues>({resolver});

	const onSubmit = (data: any) => {
		alert(JSON.stringify(data));
	};

	return (
		<div className={cnFormHook()}>
			<h1>React Hook Form</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<label>
				First Name
					<input {...register('firstName',{required: 'Поле обязательно к заполнению'})} />
				</label>
				<div>
					{errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}
				</div>
				<input type='submit' />
			</form>
		</div>
	);
};