import { createEvent, createStore, sample } from 'effector'

import { $$session } from '~src/entities/session'

export interface SignUpForm {
	email: string
	password: string
	confirm: string
}

export function createSignUpForm() {
	const submit = createEvent<SignUpForm>()
	const setErrors = createEvent<SignUpForm>()

	const $errors = createStore<SignUpForm>({} as SignUpForm)
	const $signUpPending = $$session.signUpFx.pending

	$errors.on(setErrors, (_, errors) => errors)

	sample({
		clock: submit,
		filter: (form) => form?.email !== '' && form?.password !== '' && form?.confirm !== '',
		target: $$session.signedUp,
	})

	return {
		submit,
		setErrors,
		$errors,
		$signUpPending,
	}
}
