import React from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { cn } from '@bem-react/classname';
import './FormHook.scss';
import FormFields from './exampleV1/FormFields';

const cnFormHook = cn('FormHook');

type MyForm = {
	name: string;
	age: number;
}

export const FormHook = () => {
	const {
		register,
		handleSubmit,
		clearErrors,
		reset,
		setValue,
		formState: {errors},
	} = useForm<MyForm>({
		defaultValues: {

		}
	});

	const submit: SubmitHandler<MyForm> = data => {
		console.log(data);
	};

	const error: SubmitErrorHandler<MyForm> = data => {
		console.log(data);
	};

	return (
		<div className={cnFormHook()}>
			<div>React Hook Form</div>

			<form onSubmit={handleSubmit(submit, error)}>
				<label>
					<p>Name</p>
					<input type='text' {...register('name', {required: true})} />
					<p>{errors.name ? 'Поле не может быть пустым' : ''}</p>
				</label>

				<input type='number' {...register('age')} />

				<button type={'button'} onClick={() => clearErrors()}>Очистить ошибки</button>

				<button onClick={() => reset({age: 0, name: ''})}>
					Очистить форму
				</button>

				<button onClick={() => setValue('name', 'Вася')}>Теперь ты Васёк</button>

				<input type={'submit'} />

				<FormFields />
			</form>
		</div>
	);
};